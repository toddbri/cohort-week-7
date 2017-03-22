var readline = require('readline');
var fs = require('fs');
var dns = require('dns');
var request = require('request');

var rl = readline.createInterface({input:process.stdin, output: process.stdout});

rl.question("what is the URL?",function(url){
  rl.question("What is the output file name? ", function(outputFile){
    rl.close();
    console.log("looking up IP for: " + url);
    dns.lookup(url,function(err, ip){
      if (err){
        console.log("couldn't find IP for: " + url);
        return;
      }
      console.log('In case you care the IP Address is: '+ ip);
      request.get("http://"+url,function(err,response,html){
        if (err){
          console.log("something went wrong requesting url: " + url);
          return;
        }
        fs.writeFile(outputFile,html,function(err){
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
});
