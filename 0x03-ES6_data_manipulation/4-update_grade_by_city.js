export default function updateStudentGradeByCity(listObjs, city, newGrades) {
  if (typeof listObjs !== 'object') {
    return [];
  }

  const student = listObjs.filter((obj) => obj.location === city);

  const studentGrad = student.map((student) => {
    for (const gradeObj of newGrades) {
      if (student.id === gradeObj.studentId) {
        student.grade = gradeObj.grade; // eslint-disable-line no-param-reassign
      }
      if (student.grade === undefined) {
        student.grade = 'N/A'; // eslint-disable-line no-param-reassign
      }
    }
    return student;
  });
  return studentGrad;
}
