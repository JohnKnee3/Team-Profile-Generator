const Intern = require("../lib/Intern.js");
const answers = {
  name: "Dave",
  id: 12,
  email: "dave@yahoo.com",
  school: "U of U",
};

// school
test("interns school", () => {
  const intern = new Intern(answers);

  expect(intern.school).toBe("U of U");
});

// getSchool()
test("get schools name", () => {
  const intern = new Intern(answers);

  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});

// getRole() // Overridden to return 'Intern'
test("changes role to Intern", () => {
  const intern = new Intern(answers);

  expect(intern.getRole()).toBe("Intern");
});
