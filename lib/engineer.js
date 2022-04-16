const employee = require('./employee.js');

class engineer extends employee {
    constructor (name, id, email, github, className){
    super(name);
    super(id);
    super(email);
    this.github = github
    this.className = 'engineer'
    }

    getGithub(){
        return this.github
        console.log('The users github is' + this.github)
    }
}

module.exports = engineer;
