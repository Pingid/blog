const fs = require('fs');
const path = require('path');
const marked = require('marked');

function promiseAllP(items, block) {
    var promises = [];
    items.forEach(function(item, index) {
        promises.push(function(item, i) {
            return new Promise(function(resolve, reject) {
                return block.apply(this, [item, index, resolve, reject]);
            });
        }(item, index))
    });
    return Promise.all(promises);
}

function readFiles(dirname) {
    return new Promise((resolve, reject) => {
        fs.readdir(dirname, function(err, filenames) {
            if (err) return reject(err);
            promiseAllP(filenames.filter(x => /.md/.test(x)), (filename, index, resolve, reject) =>  {
                fs.readFile(path.resolve(dirname, filename), 'utf-8', function(err, content) {
                    if (err) return reject(err);
                    return resolve({filename: filename, contents: content});
                });
            })
            .then(resolve)
            .catch(reject)
        });
  });
}

function parseMarkdown(files) {
  return new Promise((resolve, reject) => {
    promiseAllP(files, (file, index, resolve, reject) =>  {
      var renderer = new marked.Renderer();
      const output = { markdown: file.contents };
      // Remove styles
      renderer.code = function (text, language) {
        output.styles = JSON.parse(text);
        return '';
      }
      // Get title
      renderer.heading = (text, level) => {
        if (level === 1) {
          output.title = text;
        }
      }
      // Set Links
      renderer.paragraph = (text) => {
        const match = text.match(/(?=http).*(?=\s\[)/g);
      }
      const html = marked(file.contents, { renderer });

      resolve(output);
    })
    .then(resolve)
    .catch(reject)
  })
}

function writeJson(files) {
  return new Promise((resolve, reject) => {
    const output = JSON.stringify(files, null, 2)
    fs.writeFile(path.resolve(__dirname, 'src', 'articles.json'), output, 'utf-8', (err) => {
        if(err) reject(err);
        resolve(files);
    });
  })
}

readFiles(path.resolve(__dirname, 'essays'))
  .then(parseMarkdown)
  .then(writeJson)
  .then(() => console.log('Great success'))
  .catch(error => console.log( error ));
