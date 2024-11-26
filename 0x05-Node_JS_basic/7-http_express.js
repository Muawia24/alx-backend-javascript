const express = require('express');
const process = require('process');
const countStudents = require('./3-read_file_async');

const port = 1245;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const studentList = await countStudents(process.argv[2]);
    res.send(`This is the list of our students\n${studentList.join('\n')}`);
  } catch (err) {
    res.status(500).send(`Error: ${err.message}`);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
