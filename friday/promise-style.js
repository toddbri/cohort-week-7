function http(url, method){
    var promise = new Promise(function(resolve, reject){
      setTimeout(function() {
        var data = "Got Data";
        if (data) {
          resolve(data);
        } else {
          reject('No Data');
        }
      }, 2000);

    });
    return promise;
}


http('http://www.msn.com', 'PUT')
  .then (function(data){
    console.log(data);
    return "More Data";
  })
  .then (function(data){
    console.log(data);
    return "Even More Data";
  })
  .then (function(data){
    console.log(data);
    return "Even More Data Again";
  })
  .then (function(data){
    console.log(data);
    return null;
  })
  .catch(function(err){
    console.log(err);
  });
