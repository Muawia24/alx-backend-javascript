const http = require('http');
const process = require('process');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    try {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');

      res.write('This is the list of our students\n');
      const studentList = await countStudents(process.argv[2]);
      res.end(studentList.join('\n'));
    } catch (err) {
      res.statusCode = 500;
      res.end(err);
    }
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
