function square(num) {
  return num * num;
}

// var squared = square(5);

function printIt(answer){
  console.log("the answer is: ", answer);
}

function square(num, callback){
  console.log("you want me to square: ", num);
  callback(num * num);
}


square(5,printIt);
