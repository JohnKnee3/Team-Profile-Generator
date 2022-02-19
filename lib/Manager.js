const Employee = require("./Employee");

class Manager extends Employee {
  // static displayName = "Manager";
  constructor(employee) {
    super(employee);

    //     officeNumber
    this.officeNumber = employee.office;
  }

  // getRole() // Overridden to return 'Manager'
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
