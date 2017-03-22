var readline = require('readline');
var fs = require('fs');
var dns = require('dns');


var rl = readline.createInterface({input:process.stdin, output: process.stdout});
rl.question("What is the input file?: ",function(inputFile){
    rl.question("What is the output file name?: ", function(outputFile){
        rl.close();
        fs.readFile(inputFile,function(err, buffer){
          console.log("input file name: " + inputFile);
          if (err){
            console.log("Something went wrong reading the file");
            console.log(err.message);
            return;
          }
          var fileContents = buffer.toString();
          console.log("Input file contents: " + fileContents);
          fileContents = fileContents.toUpperCase();

          fs.writeFile(outputFile,fileContents,function(err){
            console.log("output file: " + outputFile);
            if (err){
              console.log("something went wrong writing to the file");
              console.log(err.message);
              return;
            }
              console.log("Wrote to file: " + outputFile);

          });
        });
    });

});
