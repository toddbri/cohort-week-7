function failIfContainsNo(message){
    var promise = new Promise(function(resolve, reject){
      //this promise will immediately resolve
      console.log("I have resolved the problem, just waiting to hear back on how to let them know");
      resolve("all good");
    });
    return promise;
}

// h will be the promise returned when calling the failIfContainsNo function
var h = failIfContainsNo('No Dave');

// we will wait 5 seconds before notifying the promise (h) of how to let me know it has resolved the promise

setTimeout(function(){
  h.then(howtoresolve);
}, 10000);


function howtoresolve(data){
  console.log(data);
}
// h
//   .then (function(data){
//     console.log(data);
//     return "More Data";
//   })
//
//
//   .then (function(data){
//     console.log(data);
//     return "Even More Data";
//   })
//   .then (function(data){
//     console.log(data);
//     return "Even More Data Again";
//   })
//   .then (function(data){
//     console.log(data);
//     return null;
//   })
//   .catch(function(err){
//     console.log(err);
//   });
