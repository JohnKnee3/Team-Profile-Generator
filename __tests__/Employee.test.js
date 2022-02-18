const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
  const employee = new Employee("Dave", 1, "dave@yahoo.com");
  // name
  expect(employee.name).toBe("Dave");
  // id
  expect(employee.id).toEqual(expect.any(Number));
  // email
  expect(employee.email).toBe("dave@yahoo.com");
});

// getName()
test("gets employee name", () => {
  const employee = new Employee("Dave");

  expect(employee.getName()).toEqual(
    expect.stringContaining(employee.name.toString())
  );
});

// getId()
test("gets employee id number", () => {
  const employee = new Employee("Dave", 2);
  expect(employee.getId()).toEqual(expect.any(Number));
});
// getEmail()
test("get employee email", () => {
  const employee = new Employee("Dave", 3, "dave@yahoo.com");

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});

// getRole() // Returns 'Employee'
test("gets employee role", () => {
  const employee = new Employee("Dave", 1, "dave@yahoo.com");

  expect(employee.getRole()).toBe("Employee");
});
