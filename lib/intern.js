const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, email,phone, school) {
        super(name, email, phone, school);
    }
    getRole() {
        return `Intern`
    }
}

module.exports = Intern;