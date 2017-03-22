var readline = require('readline');
var fs = require('fs');
var dns = require('dns');
var request = require('request');
var gm = require('gm').subClass({imageMagick: true});
var imageURL = "https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png";

var options = {
  url: 'http://example.com/example.png',
  encoding: null
};
request(options, function(err, response, imageData) {
  // save image data and resize
});



console.log('downloading the source image');
request({url: imageURL, encoding: null},function(err,response,dataReturned){
  if (err){
    console.log("something went wrong requesting url: " + url);
    return;
  }
  var rl = readline.createInterface({input:process.stdin, output: process.stdout});
  rl.question("Name of file to save original image to?: ",function(outputFile){
      fs.writeFile(outputFile,dataReturned,function(err){
        console.log("output file: " + outputFile);
        if (err){
          console.log("something went wrong writing to the file");
          console.log(err.message);
          return;
        }
          console.log("Wrote to file: " + outputFile);
          console.log("Now I'll try to resize it");
          var image = gm(dataReturned);
          image.resizeExact(240,240);
          rl.question("Name of file resized image file?: ",function(resizedFileName){
            rl.close();
            image.write(resizedFileName,function(err){
              if (err){
                console.log("something went wrong trying to save resized file");
                console.log(err.message);
                return;
              }
              console.log("done!");
            });
          });
      });
  });
});
