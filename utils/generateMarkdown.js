// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {

    case 'MIT' :
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  
      case 'Apache-2.0':
        return `![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  
      case 'GPLv3' :
        return `![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)`;
  
      case 'BSD-3-Clause' :
        return `![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
  
      default:
        return ''
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'GPLv3'){
    return `https://www.gnu.org/licenses/gpl-3.0`
  } else if (license !== 'None') {
    return `https://opensource.org/licenses/${license}`;
  }
  return '';
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `This project is licensed under the ${license} license.`;
  }
  return '';
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.tests}

## License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Questions
Github: https://github.com/${data.github}
Email: ${data.email}

`;
}

module.exports = generateMarkdown;