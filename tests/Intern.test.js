const Intern = require('../lib/Intern');

describe('Intern', () => {
    let Obj = new Intern('ray','123','ray@ray.com',"DU");

    it('Initialize', () => {
        expect(Obj).toEqual({"school": "ray@ray.com", "id": "123", "name": "ray","school": "DU"});
    });
    it('gets School', () => {
        expect(Obj.getSchool).toBe('DU');
    });
    it('gets Roles', () => {
        expect(Obj.getRole()).toBe('Intern');
    });
});