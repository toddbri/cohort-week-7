

function outer(input){
    return new simpleton(input);



    function simpleton(input){

      var dangly = input;

      // setTimeout(this.then,5000).bind(this);


      this.then = function (cb){
        if (dangly==='good'){
        setTimeout(cb,5000);
      }
      };
      this.catch = function (cb){
        if (dangly != "good"){
          cb();
        }

      };
    }
}


var s = outer("good");
var q = outer("two");

s.then(function(){
  console.log("then");
});

s.catch(function(){
  console.log("catch");
});

outer("three").then(function(){console.log("third");});
