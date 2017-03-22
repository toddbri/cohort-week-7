var filenames = [
  '1.txt',
  '2.txt',
  '3.txt',
  '4.txt',
  '5.txt',
  '6.txt',
  '7.txt',
  '8.txt',
  '9.txt',
  '10.txt'
];

var fs = require('fs');
var async = require('async');
async.each(filenames, createFile ,function(err){
  if (err){
    console.log(err.message);
  } else {

  }

});

function createFile(fileName,callback){
  console.log("creating file: " + fileName);
  fs.writeFile(fileName, "Hello World!", function(err) {
    if (err) {
      callback(err);
    }
    callback(null);
  });

}
