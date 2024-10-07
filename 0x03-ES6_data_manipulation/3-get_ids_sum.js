export default function getStudentIdsSum(student) {
  const sum = student.reduce(
    (accumulator, currValue) => accumulator + currValue.id,
    0,
  );

  return sum;
}
