const process = require('process');
const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2]).then(({ students, fields, studentsCount }) => {
      response.write(`Number of students: ${studentsCount}\n`);
      const studentInField = [];
      for (const [key, value] of Object.entries(fields)) {
        if (key !== 'field') {
          studentInField.push(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
        }
      }
      response.write(`This is the list of our students\n${studentInField.join('\n')}`);
      response.status(200).end();
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    const field = request.params.major;

    readDatabase(process.argv[2]).then(({ students }) => {
      if (!students[field]) {
        response.status(500).send('Major parameter must be CS or SWE');
      }
      response.send(`List: ${students[field].join(', ')}`);
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }
}

module.exports = StudentsController;
