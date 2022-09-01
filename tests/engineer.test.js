const Engineer = require('../lib/engineer');

test('Engineer Initiation', () => {
    const engineer = new Engineer('Luka','LukaEric@gmail.com','12312','lukaeric14');

    expect(engineer.name).toEqual(expect.any(String));

    expect(engineer.email).toEqual(expect.any(String));
    
    expect(engineer.phone).toEqual(expect.any(String));

    expect(engineer.github).toEqual(expect.any(String));

});
