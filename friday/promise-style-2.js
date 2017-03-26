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


var h = failIfContainsNo('Dave');

h
  .then (function(data){
    console.log(data);
    return "More Data";
  })

  .catch(function(err){
    console.log(err);
  });
