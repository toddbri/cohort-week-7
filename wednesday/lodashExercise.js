var _ = require('lodash');

var stuff = ['a','b','c','d','e','f','g','h','i','j','k','l'];
var nums = [3,5,6,2,5,2,62,6,46,65,65,76,76,767,67,67,676];

console.log(_.shuffle(stuff));
console.log(_.shuffle(stuff));
console.log(_.shuffle(stuff));
console.log(_.shuffle(stuff));
console.log(_.shuffle(stuff));
console.log(_.shuffle(stuff));
console.log(_.shuffle(stuff));
console.log(_.shuffle(stuff));
console.log(_.shuffle(stuff));

console.log(_.sum(nums));
console.log(_.max(nums));
console.log(_.mean(nums));


var users = [
  { 'user': 'barney',  'age': 36 },
  { 'user': 'fred',    'age': 40 },
  { 'user': 'pebbles', 'age': 1 }
];

var youngest = _
  .chain(users)
  .sortBy('age')
  .map(function(o) {
    return o.user + ' is ' + o.age;
  })
  .head()
  .value();

  console.log(youngest);
