class Employee {

    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    };

    getName() {
        return this.name;
    };

    getEmail() {
        return this.email
    };

    getRole() {
        return "Employee";
    };
};

module.exports = Employee;