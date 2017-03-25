var fs = require('fs');
var gm = require('gm');
var async = require('async');

function resizeImage(filename, callback) {
  gm(filename)
    .resize(240, 240)
    .write(filename, callback);
}

function createThumbnails(dir,callback){
    fs.readdir(dir, function(err, files) {
      if (err) {

        callback(err);
        return;
      }

      files = files.map(function(filename) {
        return dir + '/' + filename;
      });

      async.each(files, resizeImage, function(err) {
        if (err) {
          callback(err);
          return;
        }
        callback(null);
      });

    });
}


exports.thumbs = createThumbnails;
