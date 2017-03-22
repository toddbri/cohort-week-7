// function square(num) {
//   return num * num;
// }
//
// function squareRoot(num) {
//   return Math.sqrt(num);
// }

var x = 4;
var y = 3;
// var x2 = square(x);
// var y2 = square(y);
// var sum = x2 + y2;
// var answer = squareRoot(sum);
// console.log('The answer is: ' + answer);


function square(num,callbackfunction){
  callbackfunction(num*num);
}

function squareRoot(num,callbackfunction){
  callbackfunction(Math.sqrt(num));
}

function addIt(a,b,callbackfunction) {
  callbackfunction(a + b);
}

square(x,function(x2){
  square(y,function(y2){
    addIt(x2,y2,function(sum){
      squareRoot(sum,function(answer){
        console.log('The answer is: ' + answer);
      });
    });
  });
});
