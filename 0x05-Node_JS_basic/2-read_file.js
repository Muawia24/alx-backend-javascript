const fs = require('fs');

function countStudents(file) {
  const students = {};
  const fields = {};
  let count = 0;
  try {
    const lines = fs.readFileSync(file, 'utf-8').split('\n');

    for (let i = 0; i < lines.length; i += 1) {
      if (lines[i]) {
        count += 1;
        const line = lines[i].split(',');

        if (Object.prototype.hasOwnProperty.call(students, line[3])) {
          students[line[3]].push(line[0]);
        } else {
          students[line[3]] = [line[0]];
        }
        if (Object.prototype.hasOwnProperty.call(fields, line[3])) {
          fields[line[3]] += 1;
        } else {
          fields[line[3]] = 1;
        }
      }
    }

    console.log(`Number of students: ${count - 1}`);

    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
      }
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
