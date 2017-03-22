// var async = require('async');
//
// var array = [1,2,3,4,5];
// var counter = 0;
// async.each(array,childFunction,function(err){
//   if (err){
//     console.log("there was a problem");
//   } else {
//     console.log("I can go to sleep now, I've heard from all my kids");
//   }
// });
//
// function childFunction(x,callback){
//   counter ++;
//   if (counter ===3){
//     console.log("throwing a fake error");
//     fakeError = new Error([99,"Not a real error"]);
//     callback(fakeError);
//   } else {
//     // callback(null);
//   }
//
// }
/*-----------------------------------*/

// var async = require('async');
// var array = [1,2,3,4,5];
// async.each(array,childFunction,function(err){
//   if (err){
//     console.log("there was a problem");
//   } else {
//     console.log("I can go to sleep now, I've heard from all my kids");
//   }
//
// });
//
// function childFunction(x,callback){
//     console.log(x);
//     callback(null);
// }


var async = require('async');
var array = [1,2,3,4,5];
var counter = 0;
async.each(array,childFunction,function(err){
  if (err){
    console.log("there was a problem");
    console.log(err.message);
  } else {
    console.log("I can go to sleep now, I've heard from all my kids");
  }
});

function childFunction(x,callback){
  counter ++;
  if (counter !=3 && counter !=4){
    callback(null);
  }
  if (counter === 4){
    var fakeError = new Error(["Not a real error"]);
    callback(fakeError);
  }
}


// var async = require('async');
// var array = [1,2,3,4,5];
// async.each(array,childFunction,function(err){
//   if (err){
//     console.log("there was a problem");
//     console.log(err.message);
//   } else {
//     console.log("I can go to sleep now, I've heard from all my kids");
//   }
// });
//
// function childFunction(x,callback){
//   callback(null);
//   callback(null);
// }
