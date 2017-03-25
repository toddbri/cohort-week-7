var BACKSPACE = String.fromCharCode(127);


// Probably should use readline
// https://nodejs.org/api/readline.html
function getPassword(prompt, callback) {
    if (prompt) {
      process.stdout.write(prompt);
    }

    var stdin = process.stdin;
    stdin.resume();
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding('utf8');

    var password = '';
    stdin.on('data', function (ch) {
        ch = ch.toString('utf8');

        switch (ch) {
        case "\n":
        case "\r":
        case "\u0004":
            // They've finished typing their password
            process.stdout.write('\n');
            stdin.setRawMode(false);
            stdin.pause();
            callback(null, password);
            break;
        case "\u0003":
            // Ctrl-C
            // console.log('you pressed ctrl-c');
            process.stdout.write('\n');
            stdin.setRawMode(false);
            stdin.pause();
            callback(true);
            break;
        case BACKSPACE:
            password = password.slice(0, password.length - 1);
            process.stdout.clearLine();
            process.stdout.cursorTo(0);
            process.stdout.write(prompt);
            process.stdout.write(password.split('').map(function () {
              return '*';
            }).join(''));
            break;
        default:
            // More passsword characters
            process.stdout.write('*');
            password += ch;
            break;
        }
    });
}

getPassword('Password: ',function(err, result) {
  if (!err) {
    main(result);
  }
  else {
    console.log("aborted");
  }
}
);


function main(pwd){
  console.log("you typed: " + pwd);

}
