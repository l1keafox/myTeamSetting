let Employee = require('./Employee');
class Intern extends Employee {
    constructor(name, id, email, git, school){
        this.school = school;
        super(name, id, email, git);
    }
    getSchool(){

    }
    getRole(){
        return "Intern";
    }
}
module.exports = Intern;