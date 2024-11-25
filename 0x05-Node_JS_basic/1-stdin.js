const process = require('process');
const displayMessage = require('./0-console');

displayMessage('Welcome to Holberton School, what is your name?');
process.stdin.on('readable', () => {
  const data = process.stdin.read();
  if (data !== null) {
    process.stdout.write(`Your name is: ${data}`);
  }
});
