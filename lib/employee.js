class employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
      }

      getName () {
          return this.name
          console.log('Employees name is' + this.name)
      }

      getId () {
          return this.id
          console.log('The id is' + this.id)
      }

      getEmail() {
          return this.email
          console.log('Employee email is:' + this.email)
      }

      getRole() {
       return 'Employee'
    }
}
module.exports = employee