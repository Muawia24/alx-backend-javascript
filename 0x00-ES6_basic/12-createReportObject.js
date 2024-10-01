export default function createReportObject(employeesList) {
  const allCompany = {
    allEmployees: employeesList,
    getNumberOfDepartments: (employeesList) => Object.keys(employeesList).length,
  };
  return allCompany;
}
