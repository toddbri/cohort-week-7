var readline = require('readline');
var fs = require('fs');
var rl = readline.createInterface({input:process.stdin, output: process.stdout});

rl.question("what is the filename?",function(fileName){
  rl.close();
  console.log("reading file: " + fileName);
  fs.readFile(fileName,function(err, buffer){
    if (err){
      console.log("say WHAT?");
      console.log(err.message);
      return;
    }
    var fileContents = buffer.toString();
    fileContents = fileContents.toUpperCase();
  console.log(fileContents);

  });
});
