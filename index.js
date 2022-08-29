const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const createTeam = require('./createTeam')
const currentTeam = [];

const managerQuestions = () => {
    inquirer.prompt([{
          type: 'input',
          name: 'manager',
          message: "Manager Name:"
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: "Manager Email:"
        },
        {
          type: 'input',
          name: 'managerNumber',
          message: 'Manager Phone Number:'
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: 'Manager Office Number:'
          },
      ])
      .then((data) => {
        const newManager = new Manager(
          data.manager,
          data.managerEmail,
          data.managerNumber,
          data.managerOffice
        );
        return employeeQuestions(), currentTeam.push(newManager);
      });
  };
  
  const employeeQuestions = () => {
    inquirer.prompt([{
          type: 'list',
          name: 'anotherEmployee',
          message: 'Another Employee:',
          choices: ['Engineer', 'Intern', 'None'],
        },
      ])
      .then((data) => {
        if (data.anotherEmployee === 'Engineer') {
            const engineerQuestions = () => {
                inquirer.prompt([{
                      type: 'input',
                      name: 'engineer',
                      message: "Engineer Name:"
                    },
                    {
                      type: 'input',
                      name: 'engineerEmail',
                      message: "Engineer Email:"
                    },
                    {
                      type: 'input',
                      name: 'engineerNumber',
                      message: 'Engineer Phone Number:'
                    },
                    {
                        type: 'input',
                        name: 'engineerGithub',
                        message: 'Engineer Github:'
                      },
                  ])
                  .then((data) => {
                    const newEngineer = new Engineer(
                      data.engineer,
                      data.engineerEmail,
                      data.engineerNumber,
                      data.engineerGithub,
                    );
                    return employeeQuestions(), currentTeam.push(newEngineer);
                  });
              };
              console.log(data);
              engineerQuestions();
        }
        if (data.anotherEmployee === 'Intern') {
            const internQuestions = () => {
                inquirer.prompt([{
                      type: 'input',
                      name: 'intern',
                      message: "Intern Name:"
                    },
                    {
                      type: 'input',
                      name: 'internEmail',
                      message: "Intern Email:"
                    },
                    {
                      type: 'input',
                      name: 'InternNumber',
                      message: 'Intern Phone Number:'
                    },
                    {
                        type: 'input',
                        name: 'InternSchool',
                        message: 'Intern School:'
                      },
                  ])
                  .then((data) => {
                    const newIntern = new Intern(
                      data.intern,
                      data.internEmail,
                      data.internNumber,
                      data.InternNumber
                    );
                    return employeeQuestions(), currentTeam.push(newIntern);
                  });
              };
              console.log(data);
              internQuestions();
        }
        if (data.anotherEmployee === 'None') {
          return createTeam(currentTeam);
        }
      });
  };

  managerQuestions();
