var fs = require('fs');


function readFile(filename) {
  var fn = fs.readFile;
  var p = new Promise(function(accept, reject) {
    fn(filename, function(err, buffer) {
      if (err) {
        reject(err);
      } else {
        accept(buffer);
      }
    });
  });
  return p;
}
