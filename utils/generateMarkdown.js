// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //![License](https://img.shields.io/badge/license-${data.license}-lightgrey.svg)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

    ## Description 
    ${data.description}

    ## Table of Contents
    - Installation
    -Usage
    -Contribution Guidelines
    -License
    -Testing
    -Questions

    
    ## Installation  
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Contribution Guidelines
    ${data.contributions}

    ## Tests
    ${data.tests}
    
    ## License
    This project is licensed under the ${data.license} license.

    ## Questions
    If you need to reach me to ask questions, feel free to contact me on my [GitHub](https://github.com/${data.github}) or send me an email at ${data.email}. Put the project name in the subject line.`;
}

module.exports = generateMarkdown;
