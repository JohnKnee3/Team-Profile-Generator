const Employee = require("../lib/Employee.js");
const answers = { name: "Dave", id: 12, email: "dave@yahoo.com" };

test("creates an employee object", () => {
  const employee = new Employee(answers);
  // name
  expect(employee.name).toBe("Dave");
  // id
  expect(employee.id).toEqual(expect.any(Number));
  // email
  expect(employee.email).toBe("dave@yahoo.com");
});

// getName()
test("gets employee name", () => {
  const employee = new Employee(answers);

  expect(employee.getName()).toEqual(
    expect.stringContaining(employee.name.toString())
  );
});

// getId()
test("gets employee id number", () => {
  const employee = new Employee(answers);
  expect(employee.getId()).toEqual(expect.any(Number));
});
// getEmail()
test("get employee email", () => {
  const employee = new Employee(answers);

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});

// getRole() // Returns 'Employee'
test("gets employee role", () => {
  const employee = new Employee(answers);

  expect(employee.getRole()).toBe("Employee");
});
