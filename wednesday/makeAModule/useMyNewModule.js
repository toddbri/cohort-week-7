var saw = require('./saw.js');
var url = 'http://css-tricks.com';
var filename = 'css-tricks.html';
saw.sawp(url,filename,function(err){
  console.log("done");
  console.log(err);
});
