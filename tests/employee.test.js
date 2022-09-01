const Employee = require('../lib/Employee');

test('Employee Initiation', () => {
    const employee = new Employee('Luka','LukaEric@gmail.com','12312');

    expect(employee.name).toEqual(expect.any(String));

    expect(employee.email).toEqual(expect.any(String));
    
    expect(employee.phone).toEqual(expect.any(String));

});
