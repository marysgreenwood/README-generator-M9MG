//packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user input
//const questions = [];
inquirer.prompt ([
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

])
.then((data)=> {
    console.log (JSON.stringify(data));
    fs.writeFile ('README.md', generateMarkdown(data))
})


// function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile ('README.md')
// }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

/* 
Apache license 2.0	apache-2.0

Artistic license 2.0	artistic-2.0
Boost Software License 1.0	bsl-1.0

BSD 2-clause "Simplified" license	bsd-2-clause
BSD 3-clause "New" or "Revised" license	bsd-3-clause
BSD 3-clause Clear license	bsd-3-clause-clear
Creative Commons license family	cc
Creative Commons Zero v1.0 Universal	cc0-1.0
Creative Commons Attribution 4.0	cc-by-4.0
Creative Commons Attribution Share Alike 4.0	cc-by-sa-4.0
Educational Community License v2.0	ecl-2.0
Eclipse Public License 1.0	epl-1.0
Eclipse Public License 2.0	epl-2.0
European Union Public License 1.1	eupl-1.1
GNU Affero General Public License v3.0	agpl-3.0
GNU General Public License family	gpl
GNU General Public License v2.0	gpl-2.0

GNU General Public License v3.0	gpl-3.0

GNU Lesser General Public License family	lgpl
GNU Lesser General Public License v2.1	lgpl-2.1
GNU Lesser General Public License v3.0	lgpl-3.0
ISC	isc
LaTeX Project Public License v1.3c	lppl-1.3c
Microsoft Public License	ms-pl

MIT	mit

Mozilla Public License 2.0	mpl-2.0
Open Software License 3.0	osl-3.0
PostgreSQL License	postgresql
SIL Open Font License 1.1	ofl-1.1
University of Illinois/NCSA Open Source License	ncsa
The Unlicense	unlicense
zLib License	zlib */
