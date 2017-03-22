var readline = require('readline');
var dns = require('dns');

function GetAnIP(){
  var rl = readline.createInterface({input:process.stdin, output: process.stdout});
  rl.question("domain name:?",function(domainName){
    if (domainName!==""){
      rl.close();
      console.log("Looking up: " + domainName);
      dns.lookup(domainName,function(err, ip){
        if (err){
          console.log("couldn't find: " + domainName);
          GetAnIP();
        } else {
        console.log('The IP Address is: '+ ip);
        GetAnIP();
        }
      });
    } else {
      rl.close();
      return;
    }
  });
}

GetAnIP();
