const { createServer } = require('node:http');
const countStudents = require('./3-read_file_async');
const process = require('process');

const hostname = '127.0.0.1';
const port = 1245;

const app = createServer(async (req, res) => {
	if (req.url === '/'){
	  res.statusCode = 200;
	  res.end('Hello Holberton School!');
	}
	if (req.url === '/students'){
		try{
		  res.statusCode = 200;
		  console.log('This is the list of our students');
		  const studentList = await countStudents(process.argv[2]);
		  res.end(studentList);
		} catch (err){
			res.statusCode = 500;
			res.end(err);
		}
	}
});

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
