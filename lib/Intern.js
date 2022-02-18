const Employee = require("./Employee");

class Intern extends Employee {
  constructor(employee) {
    super(employee);
    // school
    this.school = employee.school;
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
