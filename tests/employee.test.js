const employee = require("../lib/employee");

it('creates an employee object',() => {
    const Employee = new employee('James', 42069, 'hokecj@gmail.com');

    expect(Employee.name).toBe('James');
  expect(Employee.id).toEqual(expect.any(Number));
  expect(Employee.email).toEqual(expect.any(String));
}); 

//Tests getName()

it('should return the name of a created employee', () => {
    const Employee = new employee('James', 42069, 'hokecj@gmail.com');
    expect(Employee.getName()).toBe('James')
});


//Tests getId()
it('should return the ID number of a created employee', () => {
    const Employee = new employee('James', 42069, 'hokecj@gmail.com');
    expect(Employee.getId()).toBe(42069)
});

//tests getEmail()
it('should return the email of a created employee', () => {
    const Employee = new employee('James', 42069, 'hokecj@gmail.com');
    expect(Employee.getEmail()).toBe('hokecj@gmail.com')
});

//tests getRole()
it('should return the given role of the created employee', () => {
    const Employee = new employee('James', 42069, 'hokecj@gmail.com');
    expect(Employee.getRole()).toBe('Employee')
});