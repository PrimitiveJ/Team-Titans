const intern = require('../lib/intern.js')
//class for intern (extends employee)

it('should return the school of a created intern', () => {
    const Intern = new intern('James', 42069, 'hokecj@gmail.com', 'University of Lolz');
    expect(Intern.getSchool()).toBe('University of Lolz')
});