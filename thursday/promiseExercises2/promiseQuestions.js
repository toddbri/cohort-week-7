
function promisifiedFunction(input){
  console.log("entering");
  var result;
  var message_postive="";
  var message_negative="";

  if (input==="good"){
    result = true;
    message_positive = "nice";
  } else {
    result = false;
    message_negative = "not good man";
  }


  var promise = new Promise(function(resolve,reject){
    if (result===true){
      resolve(message_positive);

    } else {
      reject(message_negative);
    }
  });
  return promise;
}

promisifiedFunction('good')
  .then(function(message){
    console.log(message);
  }
)
  .catch(function(err){
    console.log(err);
  }
);
