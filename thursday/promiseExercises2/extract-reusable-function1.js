

var request = require('request-promise');
var fs = require('fs-promise');

var url = 'http://css-tricks.com';
var filename = 'css-tricks.html';

function requestToFile(url,filename){
  return request(url)
    .then(function(html) {
      return fs.writeFile(filename, html);
    });
}

requestToFile(url,filename)
  .then(function(){
    console.log("all good");
  })
  .catch (function(err){
    console.log("ERROR!");
    console.log(err.message);
  });
