function http(url, method, successCallback, errorHandler){
  setTimeout(httpWorker,2000);

  function httpWorker(){
    var data;
    if (data) {
      successCallback(data);
    } else {
      errorHandler('No Data');
    }
  }
}

function success(data){
  console.log(data);
}

function problem(){
  console.log('No Data');
}

http('http://www.msn.com', 'PUT', success, problem);
