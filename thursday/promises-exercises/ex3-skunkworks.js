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

console.log(Object.keys(obj1));

console.log("then: " + obj1.then.toString());
console.log("***************");
console.log("catch: " + obj1.catch.toString());
