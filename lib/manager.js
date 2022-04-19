const employee = require('./employee.js');

class manager extends employee {
    constructor (name, id, email, officeNumber){
    super(name, id, email)
    this.officeNumber = officeNumber;
    }
    //methods
    getOfficeNumber () {
        return this.officeNumber
    }

    getRole(){
        return 'Manager'
    }

}




module.exports = manager;
