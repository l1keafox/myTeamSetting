let Employee = require('Employee.js');
class Manager extends Employee {
    constructor(name, id, email, git, office){
        this.officeNumber = office;
        super(name, id, email, git);
    }
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;