function promisifiedFunction(message, timeout){
    var start = Date.now();
    var promise = new Promise(function(resolve, reject){
      timedOut = false;
      if (timeout === 0){
        resolve("work was done");
        timedOut = true;  //this will cause us to skip the while and end the promise code
      }

      while(!timedOut){
        if (((Date.now() - start)/1000) > timeout){
          reject("this is taking too long");
          timedOut = true;
        }

      }
    });
    return promise;
}


var h = promisifiedFunction('Dave', 3);

//first event handler registered
h.then(function(data){
    console.log("good news: " + data);
}, function(err){
  console.log('bad news: ' + err);
});
