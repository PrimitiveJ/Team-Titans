const employee = require('./employee.js');

class manager extends employee {
    constructor (name, id, email, officeNumber){
    super(name);
    super(id);
    super(email);
    this.officeNumber = officeNumber;
    }
}

module.exports = manager;
