const Employee = require("./Employee");

class Engineer extends Employee {
  // static displayName = "Engineer";
  constructor(employee) {
    super(employee);

    // github // GitHub username
    this.gitHub = employee.gitHub;
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
