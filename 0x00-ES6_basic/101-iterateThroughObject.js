export default function iterateThroughObject(reportWithIterator) {
  let employees = '';
  const reportSize = reportWithIterator.length;
  for (const name of reportWithIterator) {
    employees += name;
    if (name !== reportWithIterator[reportSize - 1]) {
      employees += ' | ';
    }
  }
  return employees;
}
