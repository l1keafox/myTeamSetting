const Manager = require('../lib/Manager');

describe('Manager', () => {
    let Obj = new Manager('ray','123','ray@ray.com','5000');

    it('Initialize', () => {
        expect(Obj).toEqual({"email": "ray@ray.com", "id": "123", "name": "ray", "officeNumber":"5000"});
    });

    it('gets Roles', () => {
        expect(Obj.getRole()).toBe('Manager');
    });
});