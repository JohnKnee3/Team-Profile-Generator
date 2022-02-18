const Manager = require("../lib/Manager.js");
const answers = { name: "Dave", id: 12, email: "dave@yahoo.com", office: 55 };

// officeNumber
test("managers office number", () => {
  const manager = new Manager(answers);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});
// getRole() // Overridden to return 'Manager'
test("changes role to Manager", () => {
  const manager = new Manager(answers);

  expect(manager.getRole()).toBe("Manager");
});
