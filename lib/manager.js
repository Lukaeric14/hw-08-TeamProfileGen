const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, email, phone, office) {
    super(name, email, phone);
    this.office = office;
  }

  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;