const Intern = require('../lib/intern');

test('Intern Initiation', () => {
    const intern = new Intern('Luka','LukaEric@gmail.com','12312','Northwestern','test','test');

    expect(intern.name).toEqual(expect.any(String));

    expect(intern.email).toEqual(expect.any(String));
    
    expect(intern.phone).toEqual(expect.any(String));

    expect(intern.school).toEqual(expect.any(String));

});
