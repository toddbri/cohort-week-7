function failIfContainsNo(message){
    var promise = new Promise(function(resolve, reject){
      //this promise will immediately resolve

      resolve("all good");
      resolve('still good');
    });
    return promise;
}

// h will be the promise returned when calling the failIfContainsNo function
var h = failIfContainsNo('No Dave');

h.then(function(data){
  console.log(data);
});
