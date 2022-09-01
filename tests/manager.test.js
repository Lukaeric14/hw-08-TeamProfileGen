const Manager = require('../lib/manager');

test('Manager Initiation', () => {
    const manager = new Manager('Luka','LukaEric@gmail.com','213423','Room332');

    expect(manager.name).toEqual(expect.any(String));

    expect(manager.email).toEqual(expect.any(String));
    
    expect(manager.phone).toEqual(expect.any(String));

    expect(manager.office).toEqual(expect.any(String));

});
