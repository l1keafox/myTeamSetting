let Employee = require('./Employee');
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