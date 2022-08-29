const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, email, phone, github) {
        super(name, email, phone, github);
    }
    getRole() {
        return `Engineer`
    }
}

module.exports = Engineer;