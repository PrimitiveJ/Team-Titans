const employee = require('./employee.js');

class intern extends employee {
    constructor (name, id, email, school){
    super(name);
    super(id);
    super(email);
    this.school = school
    }
    getSchool(){
        return this.school;
        console.log('The interns school is' + this.school)
    }
}

module.exports = engineer;