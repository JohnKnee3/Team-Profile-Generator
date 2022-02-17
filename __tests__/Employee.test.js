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

// getEmail()

// getRole() // Returns 'Employee'

console.log(new Employee("Mira", 12, "thepups@gmail.com"));
