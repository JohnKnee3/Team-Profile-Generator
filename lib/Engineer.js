const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);

    // github // GitHub username
    this.gitHub = gitHub;
  }

  // getGithub()
  getGithub() {
    return this.gitHub;
  }

  // getRole() // Overridden to return 'Engineer'
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
