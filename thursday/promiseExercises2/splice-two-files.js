var Promise = require('bluebird');
var fs = require('fs');
var readFile = Promise.promisify(fs.readFile);
var writeFile = Promise.promisify(fs.writeFile);

function splice2(file1,file2,outputfile){
  return readFile(file1)
  .then(function(file1buffer){
    return [file1buffer, readFile(file2)];
  })
  .spread(function(file1buffer,file2buffer){
    var spliced = '';
    var arrfile1buffer  = file1buffer.toString().split("\n");
    var arrfile2buffer = file2buffer.toString().split('\n');
    for (var i=0;i<arrfile1buffer.length;i++){
      spliced += arrfile1buffer[i] + '\n' + arrfile2buffer[i] +'\n';
    }
    return writeFile(outputfile,spliced);
  });

}

splice2('file-1.txt', 'file-2.txt', 'output.txt')
  .then(function() {
    console.log('It worked.');
  })
  .catch(function(err) {
    console.log(err.message);
  });
