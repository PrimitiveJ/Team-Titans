const manager = require('../lib/manager.js')

it('should return the office number of a created manager', () => {
    const Manager = new manager('James', 42069, 'hokecj@gmail.com', '300b');
    expect(Manager.getOfficeNumber()).toBe('300b')
});