const markdown = require( "markdown" ).markdown;
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
    feed_url: 'http://wwww.danbeaven.co.uk/blog/feed.xml',
    site_url: 'http://wwww.danbeaven.co.uk/blog',
    image_url: '',
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
    guid: routeTitle(x.title), 
    title:  x.title,
    description: x.meta.description || '',
    url: `http://wwww.danbeaven.co.uk/blog/#/${routeTitle(x.title)}`, // link to the item
    categories: ['art','design'], // optional - array of item categories
    date: moment(x.meta.date, 'DD-MM-YYYY').toISOString(), // any format that js Date can parse.
    // enclosure: {url:'...', file:'path-to-file'}, // optional enclosure
  });
})

const xml = feed.xml();

const JSONFeed = {
  version: 'https://jsonfeed.org/version/1',
  user_comment: 'This blog contains essays I have written during my (BA) Interaction Design Arts course at the London College of Communication.',
  title: 'Dan Beaven\'s blog',
  home_page_url: 'http://wwww.danbeaven.co.uk/blog/',
  feed_url: 'http://wwww.danbeaven.co.uk/blog/feed.json',
  author: {
      name: 'Dan Beaven',
      url: 'http://wwww.danbeaven.co.uk',
  },
  items: posts.map(x => ({
    id: routeTitle(x.title),
    title: x.title,
    summary: x.meta.description || '',
    url: `http://wwww.danbeaven.co.uk/blog/#/${routeTitle(x.title)}`,
    image: (x.images && x.images.thumbnail.src) ? x.images.thumbnail.src: '',
    date_published: moment(x.meta.date, 'DD-MM-YYYY').toISOString(),
    author: 'Dan Beaven',
    tags: ['art','design'],
    content_html: markdown.toHTML(x.markdown)
  }))
}

// Write Files
fs.writeFile(path.join(__dirname, '../public/feed.json'), JSON.stringify(JSONFeed), (err) => {
  if(err) console.log(err);
  console.log('Wrote JSON Feed')
})
fs.writeFile(path.join(__dirname, '../public/feed.xml'), xml, (err) => {
  if(err) console.log(err);
  console.log('Wrote RSS Feed')
})


