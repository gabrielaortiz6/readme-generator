
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('File was created!')
    );
}

// function saveResponsesToFile(filename, response) {
//     fs.writeFile(filename, JSON.stringify(response, null, 1), (err) => { 
//     if (err) throw err;
//     console.log('Responses saved!');
// })
// }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(response => {
        console.log(response);
        const data = JSON.stringify(response, null, 1);
        //writeToFile('response.json', data);
        const readmeContent = generateMarkdown(JSON.parse(data));
        console.log(readmeContent);
        writeToFile('README.md', readmeContent);

    })
        // .then(() => {
        //     //const responseData = require('./response.json');
        //     const readmeContent = generateReadme(responseData);
        //     writeToFile('README.md', readmeContent);
        // })
        .catch((err) => {
            console.error(err);
        });
}

// Function call to initialize app
init()