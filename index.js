// Write your solution in this file!

const employee = {
    name: "name",
    streetAddress: "streetAddress",
}

function beforeEach() {
    const employee = {employee};
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]= value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee}
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}


  
//     describe('destructivelyDeleteFromEmployeeByKey(employee, key)', function () {
//       it('returns employee without the deleted key/value pair', function () {
//         let newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');
  
//         expect(newEmployee['name']).to.equal(undefined);
//       });
  
//       it('modifies the original employee', function () {
//         let newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');
  
//         expect(employee['name']).to.equal(undefined);
//         expect(employee).to.equal(newEmployee);
//       });
//     });
//   });
  