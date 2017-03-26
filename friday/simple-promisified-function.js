function failIfContainsNo(message){
    var promise = new Promise(function(resolve, reject){
      if (message.indexOf('No') < 0 ){
        resolve("you have succeeded");
      } else {
        reject("I've told you not to use that word");
      }

    });
    return promise;
}


var h = failIfContainsNo('Hi Dave');

h
  .then (function(data){
    console.log(data);
    return "More Data";
  })
  .then (function(something){
    console.log(something);
  })
  .catch(function(err){
    console.log(err);
    return "you are bad, I am good";
  })
  .catch(function(err){
    console.log(err);
  });
