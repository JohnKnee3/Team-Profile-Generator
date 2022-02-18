const Manager = require("../lib/Manager.js");

// officeNumber
test("managers office number", () => {
  const manager = new Manager("Dave", 12, "dave@yahoo.com", 37);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});
// getRole() // Overridden to return 'Manager'
test("changes role to Manager", () => {
  const manager = new Manager("Dave", 12, "dave@yahoo.com", 37);

  expect(manager.getRole()).toBe("Manager");
});
