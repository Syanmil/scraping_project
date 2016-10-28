var fs = require('fs'),
    request = require('request'),
    cheerio = require('cheerio'),
    pageURL = 'http://output.jsbin.com/xavuga';

function scrapePage(){
  request(pageURL, function(error, response, html){
    fs.writeFile('output.json', JSON.stringify(html, null, 4), function(err){
      console.log('entire-page.html succesfully written to json html folder');
    })
    var $ = cheerio.load(html),
        $header = $('header').html(),
        $content = $('#mainContent').html(),
        $footer = $('footer').html();
    fs.writeFile('header.json', JSON.stringify($header), function(err){
      console.log('header.html successfully written');
    })
    fs.writeFile('content.json', JSON.stringify($content, null, '\n'), function(err){
      console.log('content.html successfully written');
    })
    fs.writeFile('footer.json', JSON.stringify($footer), function(err){
      console.log('footer.html successfully written');
    })
  });
}

scrapePage();
