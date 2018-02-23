const markdown = require( "markdown" ).markdown;
const Feed = require('feed');
const moment = require('moment');
const posts = require('../src/static/posts.json');
const fs = require('fs');
const path = require('path');

const showdown  = require('showdown');
const converter = new showdown.Converter();

const routeTitle = title => title.replace(/\?/gi, '').split(' ').join('_');


let feed = new Feed({
  title: 'Dan Beaven\'s blog',
  description: 'This blog contains essays I have written during my (BA) Interaction Design Arts course at the London College of Communication.',
  id: 'http://example.com/',
  link: 'http://www.danbeaven.co.uk/blog',
  image: 'https://github.com/Pingid/pingid.github.io/blob/master/src/content/me.jpg?raw=true',
  favicon: 'https://raw.githubusercontent.com/Pingid/pingid.github.io/master/public/favicon.ico',
  copyright: 'All rights reserved 2018, Dan Beaven',
  updated: new Date(), // optional, default = today
  feedLinks: {
    json: 'http://www.danbeaven.co.uk/blog/feed.json',
    atom: 'http://www.danbeaven.co.uk/blog/atom.xml',
    rss2: 'http://www.danbeaven.co.uk/blog/rss2.xml',
  },
  author: {
    name: 'Dan Beaven',
    email: 'dm.beaven@gmail.com',
    link: 'http://www.danbeaven.co.uk'
  }
})

posts.forEach(post => {
  feed.addItem({
    title: post.title,
    id: routeTitle(post.title),
    link: `http://www.danbeaven.co.uk/blog/#/${routeTitle(post.title)}`,
    description: post.meta.description || '',
    content: converter.makeHtml(post.markdown),
    author: [{
      name: 'Jane Doe',
      email: 'janedoe@example.com',
      link: 'https://example.com/janedoe'
    }],
    date: new Date(moment(post.meta.date, 'DD-MM-YYYY').toISOString()),
    image: (post.meta && post.meta.thumbnail) ? post.meta.thumbnail.src : ''
  })
})

feed.addCategory('art')
feed.addCategory('design')
feed.addCategory('interaction design')

// Write Files
fs.writeFile(path.join(__dirname, '../public/rss.xml'), feed.rss2(), (err) => {
  if(err) console.log(err);
  console.log('Wrote RSS2 Feed')
})
fs.writeFile(path.join(__dirname, '../public/atom.xml'), feed.atom1(), (err) => {
  if(err) console.log(err);
  console.log('Wrote ATOM Feed')
})
fs.writeFile(path.join(__dirname, '../public/json.json'), JSON.stringify(feed.json1()), (err) => {
  if(err) console.log(err);
  console.log('Wrote JSON Feed')
})
