const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    let Obj = new Engineer('ray','123','ray@ray.com','ray.github.com');

    it('Initialize', () => {
        expect(Obj).toEqual({"email": "ray@ray.com", "id": "123", "name": "ray","github":'ray.github.com'});
    });
    it('gets Github', () => {
        expect(Obj.getGithub()).toEqual('ray.github.com');
    });
    it('gets Roles', () => {
        expect(Obj.getRole()).toBe('Engineer');
    });
});