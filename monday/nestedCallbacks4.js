
var x = 4;
var y = 3;
var z = 1;
var time = Date.now();
// console.log("start: " + time);
function square(num,callbackfunction){
  console.log("square: " + z + ", ", num);
  z++;
  updateTime();
  setTimeout(function(){callbackfunction(num*num);},10000);

}

function addIt(a,b,callbackfunction) {
  console.log("addIt: " + z);
  z++;
  updateTime();
  setTimeout(function(){callbackfunction(a + b);},4000);
}

function squareRoot(num,callbackfunction){
  console.log("squareRoot: " + z);
  z++;
  updateTime();
  setTimeout(function(){callbackfunction(Math.sqrt(num));},3000);

}

function updateTime(){
  var now = Date.now();
  console.log('\telapsed seconds: ' + (now - time)/1000);
  time = now;
}

square(x,function(x2){
  square(y,function(y2){
    addIt(x2,y2,function(sum){
      squareRoot(sum,function(answer){
        console.log('The answer is: ' + answer);
        updateTime();
      });
    });
  });
});
