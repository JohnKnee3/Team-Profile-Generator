const Employee = require("./Employee");

class Intern extends Employee {
  // static displayName = "Intern";
  constructor(employee) {
    super(employee);
    // school
    this.school = employee.school;
    // this.role = this.getRole();
  }

  // getSchool()
  getSchool() {
    return this.school;
  }

  // getRole() // Overridden to return 'Intern'
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
