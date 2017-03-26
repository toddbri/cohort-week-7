function promisifiedFunction(message){
    var promise = new Promise(function(resolve, reject){

      //setTimeout(function(){resolve("hi");},3000); //this will wait 10 seconds and then try to resolve
      resolve("Hello " + message);  // this will resolve immediately
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
