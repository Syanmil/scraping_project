var fs = require('fs'),
    request = require('request'),
    cheerio = require('cheerio'),
    pageURL = 'http://output.jsbin.com/xavuga';

function scrapePage(){
  request(pageURL, function(error, response, html){
    fs.writeFile('output.json', JSON.stringify(html, null, 4), function(err){
      console.log('entire-page.html succesfully written to json html folder');
    })
  });
}

scrapePage();
