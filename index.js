
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
    choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'Mozilla Public License 2.0', 'The Unlicense'],
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
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(answers);
        generateReadMe(response)
     });
}

// Function call to initialize app
init();

function generateReadMe({ title, description, installation, usage, contributions, tests, license, github, email }) {
    //add the above to some html content
    const readMeString = `
    # ${answers.title}

    ## Description
    
    ${answers.description}

    ---
    
    ## Installation
    
    ${answers.installation}
    
    ---

    ## Usage
    
    ${answers.usage}
    
    ---

    ## Contribution Guidelines
    
    ${answers.contributions}

    ---

    # Tests

    ${answers.tests}

    ---
    
    ## License
    
    This project is licensed under the ${answers.license} license.

    # Questions

    If you need to reach me to ask questions, feel free to contact me on my [GitHub](https://github.com/${answers.github}) or send me an email at ${answers.email}.

    `;
//     //write that content to a file with fs
//     fs.writeFile("README.md", readMeString, (err) => err ? console.error(error) : console.log("Success!"));
}
