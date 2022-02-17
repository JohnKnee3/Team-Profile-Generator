const Employee = require("../lib/Employee.js");

// name
test("creates an employee object", () => {
  const employee = new Employee("Dave");

  expect(employee.name).toBe("Dave");
});
// id

// email

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'
