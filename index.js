//packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter any installation instructions for your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information for your project.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter contribution guidelines for your project.'
    },
    {
        type: 'input',
        name: 'tests', 
        message: 'Please enter test instructions for your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project',
        choices: [
            {
                name: 'None'
            }, 
            {
                name: 'Apache license 2.0',
            },
            {
                name: 'GNU General Public License v3.0',
            },
            {
                name: 'MIT',
            },
            {
                name: 'BSD 2-clause "Simplified" license',
            }
        ],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address'
    }

]
// .then((data)=> {
//     console.log (JSON.stringify(data));
//     fs.writeFile ('README.md', generateMarkdown(data))
// })


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile (fileName, data, (err) => {
        err ? console.error(err) : console.log('Success!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions). then ((data) => {
        writeToFile('./output/README.md', generateMarkdown(data))
    } )
}

// Function call to initialize app
init();


