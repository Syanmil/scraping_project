var fs = require('fs'),
    request = require('request'),
    cheerio = require('cheerio'),
    pageURL = 'http://output.jsbin.com/xavuga';

function scrapePage(){
  request(pageURL, functio(error, response, html){
    fs.writeFile(__dirname + '/HTML/entire-page.html', html, function(err){
      console.log('entire-page.html succesfully written to json html folder');
    })
  });
}

scrapePage();
