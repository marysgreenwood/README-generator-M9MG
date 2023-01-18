// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

##Installation
${data.installation}

##Usage
${data.usage}

##Contribution guidelines
${data.contribution}

##Test instructions
${data.tests}

##License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

##Questions
Github: https://github.com/${data.github}
Email: ${data.email}

`;
}

module.exports = generateMarkdown;