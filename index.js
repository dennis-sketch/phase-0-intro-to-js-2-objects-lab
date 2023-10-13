// Write your solution in this file!

const employee = {
  name: 'John Doe',
  streetAddress: '123 Main Street',
};

// Non-destructively update employee with key and value
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value,
  };
}

// Destructively update employee with key and value
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// Non-destructively delete property from employee by key
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

// Destructively delete property from employee by key
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

// Example usage:
const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Jane Doe');
console.log(updatedEmployee);

const mutatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '456 Oak Street');
console.log(mutatedEmployee);

const employeeWithoutAddress = deleteFromEmployeeByKey(employee, 'streetAddress');
console.log(employeeWithoutAddress);

const employeeWithoutName = destructivelyDeleteFromEmployeeByKey(employee, 'name');
console.log(employeeWithoutName);
