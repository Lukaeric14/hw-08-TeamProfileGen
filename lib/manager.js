const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, email,phone, office) {
    super(name, email, phone, office);
  }

  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;