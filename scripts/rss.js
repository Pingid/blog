const RSS = require('rss');
const moment = require('moment');
const posts = require('../src/static/posts.json');
const fs = require('fs');
const path = require('path');

const routeTitle = title => title.replace(/\?/gi, '').split(' ').join('_');

/* lets create an rss feed */
var feed = new RSS({
    title: 'Dan Beaven',
    description: 'This blog contains essays I have written during my (BA) Interaction Design Arts course at the London College of Communication.',
    feed_url: 'http://danbeaven.co.uk/blog/rss.xml',
    site_url: 'http://danbeaven.co.uk/blog',
    image_url: '',
    docs: 'http://example.com/rss/docs.html',
    managingEditor: 'Dan Beaven',
    webMaster: 'Dan Beaven',
    copyright: '2018 Dan Beaven',
    language: 'en',
    categories: ['art','design','Interaction design'],
    pubDate: 'May 20, 2012 04:00:00 GMT',
    ttl: '60',
});

/* loop over data and add to feed */
posts.forEach(x => {
  feed.item({
    title:  x.title,
    description: x.meta.description || '',
    url: `'http://danbeaven.co.uk/blog/#/${routeTitle(x.title)}'`, // link to the item
    categories: ['art','design'], // optional - array of item categories
    date: moment(x.meta.date, 'DD-MM-YYYY').toISOString(), // any format that js Date can parse.
    // enclosure: {url:'...', file:'path-to-file'}, // optional enclosure
});
})


// cache the xml to send to clients
var xml = feed.xml();

fs.writeFile(path.join(__dirname, '../build/atom.xml'), xml, (err) => {
  if(err) console.log(err);
  console.log('done')
})
fs.writeFile(path.join(__dirname, '../public/atom.xml'), xml, (err) => {
  if(err) console.log(err);
  console.log('done')
})


