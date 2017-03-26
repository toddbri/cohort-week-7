function promisifiedFunction(message){
    var promise = new Promise(function(resolve, reject){

      setTimeout(function(){resolve("hi");},10000); //this will wait 10 seconds and then try to resolve
      resolve("Hello " + message);  // this will resolve immediately
    });
    return promise;
}


var h = promisifiedFunction('Dave');

for (var i =0; i< 15;i++){
  h.then(function(data){
    console.log(data);
  });
}

var k = h.then(function(data){
    console.log(data);
    return "Frank";
  });

var j =  k.then(function(data){
    console.log(data);
    return "Mark";
  });

j.then(function(data){
  console.log(data);
});
  h.catch(function(err){
    console.log(err);
  });

setTimeout(function(){
  h.then(function(data){
    console.log(data);
  });
},5000);
