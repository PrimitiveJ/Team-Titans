const inquirer = require('inquirer');
const fs = require('fs');
const writeFile = require('./src/writeFile-copyFile');
const employee = require('./lib/employee')
const manager = require('./lib/manager')
const intern = require('./lib/intern')
const engineer = require('./lib/engineer')
const generateteam = require('./src/pagetemplate')

// Array to hold questions 
const newstaffData = [];

// Array object questions asked in CLI to user
const questions = async () => {
  const answers = await inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the name of the employee you wish to add",
        name: "name",
      },
      {
        type: "input",
        message: "Enter the id number of the employee you wish to add",
        name: "id",
      },
      {
        type: "input",
        message: "Enter the email of the employee you wish to add:",
        name: "email",
      },
      {
        type: "list",
        message: "Enter the role of the employee you wish to add:",
        name: "role",
        choices: ["Engineer", "Intern", "Manager", "Employee"],
      },
    ])


    
    //  console.log(answers);
      // if statement of manager role
      if (answers.role === "Manager") {
        const managerAns = await inquirer
          .prompt([
            {
              type: "input",
              message: "Enter the office number of this manager",
              name: "officeNumber",
            },
          ])
          const newManager = new manager(
            answers.name,
            answers.id,
            answers.email,
            managerAns.officeNumber
          );
          newstaffData.push(newManager);
          
        // if statement for engineer role
      } else if (answers.role === "Engineer") {
        const githubAns = await inquirer
          .prompt([
            {
              type: "input",
              message: "Enter the github user name associated with the Engineer:",
              name: "github",
            }
          ])
            const newEngineer = new engineer(
              answers.name,
              answers.id,
              answers.email,
              githubAns.github
            );
            newstaffData.push(newEngineer);
          
       // if statement for the employee role
      } else if (answers.role === 'Employee') {
          const newEmployee = new employee(
              answers.name,
              answers.id,
              answers.email,
              answers.role
          );
          newstaffData.push(newEmployee)
      }
       // if statement for intern role
      else if (answers.role === "Intern") {
        const internAns = await inquirer
          .prompt([
            {
              type: "input",
              message: "Enter the school of the intern:",
              name: "school",
            },
          ])
          
          const newIntern = new intern(
            answers.name,
            answers.id,
            answers.email,
            internAns.school
          );
          newstaffData.push(newIntern);          
      } 

}; 
//end of questions/prompts

async function promptQuestions() {
  await questions()
    
  
  const addMemberAns = await inquirer
    .prompt([
      {
        name:'addMember',
        type: 'list',
        choices: ['Add a new employee', 'Finalize team', 'Quit'],
        message: "Select an option to continue:"
      }
    ])


    if (addMemberAns.addMember === 'Add a new employee') {
      return promptQuestions()
    } if (addMemberAns.addMember === 'quit'){
        const confirmQuit = await inquirer.prompt([{
            name: 'confirmExit',
            type: 'confirm',
            message: 'Are you sure you wish to exit the application?'
        }, 
        ])
            if (confirmQuit.answers === true) {
            return ''  
            } else {
                promptQuestions();
            }
        
    } else {
    return createTeam();
    }
}  

promptQuestions();

function createTeam () {
  console.log("new employee", newstaffData)
  fs.writeFileSync(
    "./dist/index.html",
    generateteam(newstaffData),
     "utf-8"
  );
}