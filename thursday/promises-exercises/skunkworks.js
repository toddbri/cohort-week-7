// function rejectOddsDoubleEvens(input) {
//
//     if (input%2===0){
//        return {then: function(callback) {
//             var value = input;
//             callback(value);
//             return this;
//           },
//           catch: function(callback){
//             var value = input * 2;
//             callback(value);
//             return this;
//           }
//         };
//     } else {
//
//
//     }
//
//
// }

function rejectOddsDoubleEvens(input) {

  return {then: function(){return this;},
          catch: function(callback){
            callback(6);
            return this;
          }
        };

}


rejectOddsDoubleEvens(2)
.then(function(value) {
  console.log('I like: ' + value);
})
.catch(function(value){
  console.log('I reject: ' + value);

});
