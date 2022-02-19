class Employee {
  constructor(employee) {
    // name
    this.name = employee.name;
    // id
    this.id = employee.id;
    // email
    this.email = employee.email;
  }

  // getName()
  getName() {
    return this.name;
  }
  // getId()
  getId() {
    return this.id;
  }

  // getEmail()
  getEmail() {
    return this.email;
  }

  // getRole() // Returns 'Employee'
  getRole() {
    // return "Employee";
    return "Employee";
  }
}
module.exports = Employee;
