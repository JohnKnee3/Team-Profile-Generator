const Engineer = require("../lib/Engineer.js");

// github // GitHub username
test("engineer github account name", () => {
  const engineer = new Engineer("Dave", 3, "dave@yahoo.com", "DaveHub");

  expect(engineer.gitHub).toBe("DaveHub");
});

// getGithub()
test("get engineer gitHub account", () => {
  const engineer = new Engineer("Dave", 3, "dave@yahoo.com", "DaveHub");

  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.gitHub.toString())
  );
});
// getRole() // Overridden to return 'Engineer'
test("changes role to Engineer", () => {
  const engineer = new Engineer("Dave", 12, "dave@yahoo.com", 37);

  expect(engineer.getRole()).toBe("Engineer");
});
