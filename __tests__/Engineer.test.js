const Engineer = require("../lib/Engineer.js");
const answers = {
  name: "Dave",
  id: 12,
  email: "dave@yahoo.com",
  gitHub: "DaveHub",
};

// github // GitHub username
test("engineer github account name", () => {
  const engineer = new Engineer(answers);

  expect(engineer.gitHub).toBe("DaveHub");
});

// getGithub()
test("get engineer gitHub account", () => {
  const engineer = new Engineer(answers);

  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.gitHub.toString())
  );
});
// getRole() // Overridden to return 'Engineer'
test("changes role to Engineer", () => {
  const engineer = new Engineer(answers);

  expect(engineer.getRole()).toBe("Engineer");
});
