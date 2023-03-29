
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [ 
{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
},
{
    type: 'input',
    message: 'Please enter a short description of your project',
    name: 'description',
},
{
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'installation',
},
{
    type: 'input',
    message: 'Please provide instructions and/or examples of how to use your project',
    name: 'usage',
},
{
    type: 'input',
    message: 'Please enter some contribution guidelines',
    name: 'contributions',
},
{
    type: 'input',
    message: 'Please provide test instructions for your project',
    name: 'tests',
},
{
    type: 'list',
    message: 'Please select a license ',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3'],
    name: 'license',
},
 {
    type: 'input',
    message: 'Please enter your GitHub username',
    name: 'github',
},
{
    type: 'input',
    message: 'Please enter your email address',
    name: 'email',
}];

// TODO: Create a function to write README file
// function writeToFile(fileName, response) {
  
// }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(response => {
        console.log(response);
        generateReadMe(response);
     });
}

// Function call to initialize app
init();

function generateReadMe({ title, description, installation, usage, contributions, tests, license, github, email }) {
    //add the above to some html content
    const readMeString = `
    # ${title} 

    ![GitHub license](https://img.shields.io/badge/license-${license}-lightgrey.svg)

    ## Description
    
    ${description}

    ---
    
    ## Installation
    
    ${installation}
    
    ---

    ## Usage
    
    ${usage}
    
    ---

    ## Contribution Guidelines
    
    ${contributions}

    ---

    # Tests

    ${tests}

    ---
    
    ## License
    
    This project is licensed under the ${license} license.

    # Questions

    If you need to reach me to ask questions, feel free to contact me on my [GitHub](https://github.com/${github}) or send me an email at ${email}. Put the project name in the subject line.

    `;
    //write that content to a file with fs
    fs.writeFile("README.md", readMeString, (err) => err ? console.error(error) : console.log("Success!"));
    console.log("ReadMe.md has been generated")
}
