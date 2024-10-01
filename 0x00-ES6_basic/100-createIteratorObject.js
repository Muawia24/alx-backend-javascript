export default function createIteratorObject(report) {
  const newArr = [];
  const employees = Object.values(report.allEmployees);
  for (const employee of employees) {
    newArr.push(...employee);
  }
  return newArr;
}
