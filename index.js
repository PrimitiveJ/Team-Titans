const inquirer = require('inquirer');
const fs = require('fs');
const generateSite = require('./src/writeFile-copyFile');
const employee = require('./lib/employee')

const promptUser1 = () => {
    return inquirer.prompt(managerQuestions);
};

const promptMore = () => {
    return inquirer.prompt(addEmployeeQuestion)
}

const promptUser2 = () => {
    return inquirer.prompt(employeeSelectQuestion);
};

const managerQuestions = [{
      type: 'input',
      name: 'managerName',
      message: 'What is the name of the team manager? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the name of the manager!');
          return false;
        }
      }
    },

    {
        type:'input',
        name: 'managerID',
        message: 'Enter the employee ID:',
        validate: managerIDinput => {
            if (managerIDinput) {
              return true;
            } else {
              console.log('Please enter the employee ID!');
              return false;
            }
          }
    },

    {
        type:'input',
        name: 'managerEmail',
        message: 'Enter the email of the employee',
        validate: managerEmailInput => {
            if (managerEmailInput) {
              return true;
            } else {
              console.log('Please enter the employee email!');
              return false;
            }
          }
    },

    {
        type:'input',
        name: 'officeNumber',
        message: 'Please enter the office number of the manager',
        validate: officeNumberinput => {
            if (officeNumberinput) {
                return true;
            } else {
                console.log('Please enter the office number of your team manager')
            }
        },
    },  

]

const addEmployeeQuestion =[{
    type: 'confirm',
    name: 'addEmployee',
    message: 'Do you wish to add another employee?',
    validate: addEmployeeConfirm => {
        if (addEmployeeConfirm) {
            promptUser2();
        }
        else {
            return 'All Finished! Generating File.'
                 }
    }
 },]

 const employeeSelectQuestion = [{
     type:'checkbox',
     name: 'employeeSelect',
     message: 'Please select the employee class you wish to create',
     choices: {
     name:'Employee', 
     name: 'Intern',
     name: 'Engineer',
     name: 'Manager'
    },
    validate: employeeSelectQuestion => {
        if (employeeSelectQuestion = 'Employee'){
            //DO SOMETHING. Employee Question Prompt?
        }
    }
     
 }]

function writeToFile(data) {
    fs.writeFile('./index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        // when the Html is created 
        } else {
            console.log("HTML generated")
        }
    });
}

//screwy logic to fix here:
function init() {
    promptUser1()
    .then(function(data1) {
        return JSON.stringify(data1)
    })
    .catch(err => {
        console.log(err);
    }).then(
    promptMore()
    ).then(function(data2) {
        return JSON.stringify(data2)

    }).then(function(data1, data2,) {
        writeToFile(data1, data2)
        })

}

init();
