var x = 4;
var y = 3;
// var x2 = square(x);
// var y2 = square(y);
// var sum = x2 + y2;


function square(num,callbackfunction){
  callbackfunction(num*num);

}

square(x,function(x2){
  y = 9;
  x2 = 14;
  square(y,function(y2){

    console.log(x2 + y2);
  });

});
