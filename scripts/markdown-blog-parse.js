const path = require('path');
const fs = require('fs');
const R = require('ramda');
const moment = require('moment');

// Static paths
const folder = path.join(__dirname, '../', process.argv[2]);
const static = path.join(__dirname, '../src/static');
const outFile = path.join(static, 'posts.json');

// Wraps callback functions in promise
const promisifyFS = func =>  (...args) =>
	new Promise((resolve, reject) => 
		func(...args, (err, results) => err ? reject(err) : resolve(results))
)

// Wrap node fs function in promise
const read_dir = promisifyFS(fs.readdir);
const read_file = promisifyFS(fs.readFile);
const write_file = promisifyFS(fs.writeFile);

// Extract title of article
const addTitle = (text, obj) => R.assoc('title', text.match(/(?<=#\s)(.*?)\n/)[0].trim(), obj);

// Extract data from json code block in markdown
const addMeta = (text, obj) => {
	const json = R.assoc('meta', JSON.parse(/(?<=```json)([\s\S]*?)(?=```)/gi.exec(text)[0]), obj)
	if (json.meta.images && json.meta.images.gallery) {
  	return read_dir(path.join(static, json.meta.images.gallery.root))
  		.then(R.filter(R.test(/.jpg|.png|.jpeg/gi)))
			.then(images => images.map(name => path.join(json.meta.images.gallery.root, name)))
			.then(x => R.assocPath(['meta', 'images', 'gallery'], x, json))
	}
	return json
}

// Remove any JSON code blocks
const addMarkdown = (text, obj) => R.assoc('markdown', text.replace(/```json([\s\S]*?)```/, ''), obj)

// Extract info from markdown file
const parsePost = post => Promise.resolve({})
	.then(obj => addTitle(post, obj))
	.then(obj => addMeta(post, obj))
	.then(obj => addMarkdown(post, obj))
	.catch(err => console.log('There was a problem parsing post', post.slice(0, 50), err))

// Sort by date
const sortPosts = posts => {
	const unixTime = str => moment(str, 'DD-MM-YYYY').unix()
	return posts.sort((a, b) => unixTime(b.meta.date) - unixTime(a.meta.date))
}

// Read all files in folder parse them then write to posts.json file
read_dir(folder)
	.then(paths => 
		Promise.all(paths.map(file => 
			read_file(path.join(folder, file), 'utf8'))))
	.then(posts => Promise.all(posts.map(parsePost)))
	.then(sortPosts)
	.then(sortPosts)
	.then(sortPosts)
	.then(x => write_file(outFile, JSON.stringify(x, null, 2), 'utf8'))
	.catch(x => console.log('ERROR', x))