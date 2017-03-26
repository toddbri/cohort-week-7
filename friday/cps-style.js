function http(url, method, successCallback, errorHandler){
    setTimeout(function() {
      var data;
      if (data) {
        successCallback(data);
      } else {
        errorHandler('No Data');
      }
    }, 2000);
}


http('http://www.msn.com', 'PUT', function(data) {
  console.log(data);
}, function (err) {
  console.log(err);
});
