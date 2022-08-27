const Employee = require('../lib/Employee');

describe('Employee', () => {
    let Obj = new Employee('ray','123','ray@ray.com');

    it('Initialize', () => {
        expect(Obj).toEqual({"email": "ray@ray.com", "id": "123", "name": "ray"});
    });
    it('gets Name', () => {
        expect(Obj.getName()).toBe('ray');
    });
    it('gets Ids', () => {
        expect(Obj.getId()).toBe('123');
    });
    it('gets Emails', () => {
        expect(Obj.getEmail()).toBe('ray@ray.com');
    });
    it('gets Roles', () => {
   //     let Obj = new Employee('ray','123','ray@ray.com');
        expect(Obj.getRole()).toBe('Employee');
    });
});