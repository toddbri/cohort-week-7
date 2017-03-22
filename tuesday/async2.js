/* You can use fs.readdir function to list all the files that exist in a directory.
Write a program to resize all .png files within a directory into 240x240 thumbnails.
Hint: you can use the downloadAndCreateThumbnail function you made. */

var fs = require('fs');
var async = require('async');
var path = require('path').dirname(require.main.filename);

console.log(path);

fs.readdir(path,transform);


function transform(err,filesIFound){
  console.log("files I found: " + filesIFound);
  if (err){
    console.log(err.message);
  } else {
    async.each(filesIFound,resizeImage,function(err){
        if (err) {
          console.log("there was an error:");
          console.log(err.message);
        } else {
          console.log("done for real");
        }

    });
  }
}
var counter = 0;
function resizeImage(input, callback){
  // console.log(callback.toString());
  var fn = input.split(".")[0];
  var ext = input.split('.')[1];
  if (ext === "png"){
    var fs = require('fs');
    var gm = require('gm').subClass({imageMagick: true});
    fs.readFile(fn +'.png',function(err, buffer){
      if (err){
        callback(err);
        return;
      }
      var image = gm(buffer);
      image.resizeExact(240,240);
      console.log(fn);
      image.write( fn + "-240X240.png", function(err) {
          if (err) {
            callback(err);
            return;
          } else {
            console.log('no problem with writing the new file: ' + counter);
          }
          // callback(null);
      });
    });
  }
  console.log("I've been here ", counter , " times.");
  counter ++;
  callback(null);
}
