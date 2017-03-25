var fs = require('fs-promise');

var filename = 'file1.txt';


fs.readFile(filename)
  .then(function(buffer){
    var content = buffer.toString();
    console.log(content.toUpperCase());
  })
  .catch(function(err){
    console.log('Something went wrong.');
    console.log('Because: ', err.message);
    return;
  });

/* Alternate method 1 */
fs.readFile(filename).then(itWorked).catch(itFailed);

function itWorked(buffer){
  /*    blah blah blah    */
}

function itFailed(buffer){
  /*    blah blah blah    */
}

/* Alternate method 2 */

fs.readFile(filename).then(itWorked, itFailed);
