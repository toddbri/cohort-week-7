function promisifiedFunction(message, timeout){
    var start = Date.now();
    var promise = new Promise(function(resolve, reject){
      timedOut = false;
      while(!timedOut){
        if (((Date.now() - start)/1000) > timeout){
          reject("this is taking too long");
          timedOut = true;
        }

      }
    });
    return promise;
}


var h = promisifiedFunction('Dave', 20);


h.then(function(data){
    console.log(data);
    return "Frank";
  })
  .then(function(data){
    return;
  })
  .catch(function(err){
  console.log(err);
  return null;
});

setTimeout(function(){
  h.then(function(data){
    console.log(data);
  })
      .catch(function(err){
        console.log("delayed: " + err);
      });
},10000);


// setTimeout(function(){
//   k.then(function(data){
//     console.log(data);
//   });
// },15000);
