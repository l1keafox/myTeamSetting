let Employee = require('Employee.js');
class Engineer extends Employee {
    constructor(name, id, email, git, github){
        super(name, id, email, git);
    }
    getGithub(){
        
    }
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;