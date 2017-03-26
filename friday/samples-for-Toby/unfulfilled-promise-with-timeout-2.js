//in this example the promise is not rejected until it reaches the supplied timeout
// one resolve handler is registered immediately and a second resolve handler is registered
// 10 seconds later. The second .catch is not resolved until 10 seconds after the timeout.
// I would expect it to be immediately after the timeout assuming the timeout was > 10 seconds.

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
