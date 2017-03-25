var fs = require('fs-promise');

var filename = 'file1.txt';
var outputFilename = 'file1-ouput.txt';

// fs.readFile(filename, function(err, buffer) {
//   if (err) {
//     console.log('Something went wrong.');
//     console.log('Because: ', err.message);
//     return;
//   }
//
//   fs.writeFile(outputFilename, content.toUpperCase(), function(err) {
//     if (err) {
//       console.log('Something went wrong.');
//       console.log('Because: ', err.message);
//       return;
//     }
//   });
// });


fs.readFile(filename)
  .then(function(buffer){
    var content = buffer.toString();
    content = content.toUpperCase();
    return fs.writeFile(outputFilename, content);
  })
  .catch(function(err){
    console.log('Something went wrong.');
    console.log('Because: ', err.message);
    return;
  });
