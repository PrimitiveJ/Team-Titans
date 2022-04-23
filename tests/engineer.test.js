const engineer = require('../lib/engineer')


//describes getGithub function
it('should return the Github of a created employee', () => {
    const Engineer = new engineer('James', 42069, 'hokecj@gmail.com', 'primitiveJ');
    expect(Engineer.getGithub()).toBe('primitiveJ')
});