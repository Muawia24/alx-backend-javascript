export default function iterateThroughObject(reportWithIterator) {
  let employees = '';
  for (const idx in reportWithIterator) {
    employees += reportWithIterator[idx];
    if (idx < reportWithIterator.length - 1) {
      employees += ' | ';
    }
  }
  return employees;
}
