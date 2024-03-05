export default function createIteratorObject(report) {
  function* employeesGenerator() {
    for (const department in report.allEmployees) {
      if (Object.prototype.hasOwnProperty.call(report.allEmployees, department)) {
        const employeesInDepartment = report.allEmployees[department];
        for (const employee of employeesInDepartment) {
          yield employee;
        }
      }
    }
  }

  return {
    [Symbol.iterator]: employeesGenerator,
  };
}
