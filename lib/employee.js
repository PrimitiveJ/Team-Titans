class employee {
    constructor(name, id, email, className) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.className = 'employee';
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
          if (this.className = employee) {
              return 'employee'
          }
          if (this.className = manager) {
              return 'manager'
          }
          if (this.className = engineer) {
              return 'engineer'
          }
          if (this.className = intern) {
              return 'intern'
          }
          else {
              return 'Failed to get role, something went wrong'
              console.log('Failed to get role, something is broken, chief.')
          }
          
      }
}
module.exports = employee