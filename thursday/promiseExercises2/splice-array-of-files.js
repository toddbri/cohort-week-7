var Promise = require('bluebird');
var fs = require('fs');
var readFile = Promise.promisify(fs.readFile);
var writeFile = Promise.promisify(fs.writeFile);
var arrFiles = ['file-1.txt', 'file-2.txt', 'file-3.txt', 'file-4.txt'];
var arrFiles = ['file-1.txt', 'file-2.txt', 'file-3.txt', 'file-4.txt','file-5.txt','file-6.txt','file-7.txt'];


function deltaMilliSeconds(){
  var now = Date.now();
  var delta = (now-time);
  // console.log('\telapsed seconds: ' + (now - time)/1000);
  time = now;
  return delta;
}

function logWithDelta(message){
  console.log(deltaMilliSeconds() +": "+ message);
}

function spliceArrayofFiles(arrFiles,outputfile){

  logWithDelta("I'm starting now");
  // fileReadPromises is a collection of promises
  var fileReadPromises = arrFiles.map(function(file) {
    logWithDelta("reading file: " + file);
    return readFile(file);
  });
  logWithDelta("execution was here");
  //this next section will only complete AFTER the fileReadPromises have completed (due to the Promise.all)
  // and will return the promised return from the writeFile
  return Promise.all(fileReadPromises)
    .then(function(arrayOfFileContents){

      var strOutput = "";
      var numFiles = arrayOfFileContents.length;
      var lineInFiles = arrayOfFileContents[1].toString().split('\n').length-1;
      for (var i=0;i < lineInFiles;i++){
        for (var j=0;j < numFiles ;j++){
          strOutput += arrayOfFileContents[j].toString().split('\n')[i] + '\n';
        }
      }
      logWithDelta('About ready to return write the file and wait for it to return a Promise');
      return writeFile(outputfile,strOutput);
    });
}
var time = Date.now();
logWithDelta("starting");
spliceArrayofFiles(arrFiles, 'output.txt')
  .then(function() {
    logWithDelta('It worked.');
  })
  .catch(function(err) {
    logWithDelta(err.message);
  });

  logWithDelta("I will show up before the log statements above me!!!");
