function promisifiedFunction(message){
    var promise = new Promise(function(resolve, reject){
      while(true){}
    });
    return promise;
}


var h = promisifiedFunction('Dave');


h.then(function(data){
    console.log(data);
    return "Frank";
  });


setTimeout(function(){
  h.then(function(data){
    console.log(data);
  });
},10000);


// setTimeout(function(){
//   k.then(function(data){
//     console.log(data);
//   });
// },15000);
