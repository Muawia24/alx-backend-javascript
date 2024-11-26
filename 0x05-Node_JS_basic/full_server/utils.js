const fs = require('fs');

async function readDatabase(filePath) {
  const students = {};
  const fields = {};
  let count = 0;

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.split('\n');

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
        const studentsCount = count - 1;
        resolve({ students, fields, studentsCount });
      }
    });
  });
}

module.exports = readDatabase;
