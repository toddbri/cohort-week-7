var request = require('request-promise');
var fs = require('fs-promise');

var url = 'https://en.wikipedia.org/wiki/Futures_and_promises';
var filename = 'output.html';

// request.get(url, function(err, response, html) {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   fs.writeFile(filename, html, function(err) {
//     if (err) {
//
//     }
//     console.log('It worked');
//   });
// });


var obj1 = request.get(url);

var obj2 = obj1.then(function(html){
    return fs.writeFile(filename, html);
  });

var obj3 = obj2.then(function(){
    console.log('It worked');
    return;
  });

var obj4 = obj3.catch(function(err){
    console.log(err.message);
    return;
  });
