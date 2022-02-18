const Intern = require("../lib/Intern.js");

// school
test("interns school", () => {
  const intern = new Intern("Dave", 3, "dave@yahoo.com", "U of U");

  expect(intern.school).toBe("U of U");
});

// getSchool()
test("get schools name", () => {
  const intern = new Intern("Dave", 3, "dave@yahoo.com", "U of U");

  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});

// getRole() // Overridden to return 'Intern'
test("changes role to Intern", () => {
  const intern = new Intern("Dave", 12, "dave@yahoo.com", 37);

  expect(intern.getRole()).toBe("Intern");
});

console.log(new Intern("Mira", 12, "thepups@gmail.com", "Barkley"));
