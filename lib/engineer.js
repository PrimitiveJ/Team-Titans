const employee = require('./employee.js');

class engineer extends employee {
    constructor (name, id, email, github){
    super(name, id, email);
    this.github = github
    }

    getGithub(){
        return this.github
        console.log('The users github is' + this.github)
    }

    getRole() {
        return 'Engineer'
     }
}

module.exports = engineer;
