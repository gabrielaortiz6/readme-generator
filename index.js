
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(answers);
     });
}

// Function call to initialize app
init();


// inquirer.prompt(questions).then(response => {
//     console.log(response);
//     //use fs to write the response to a file
//     generateReadMe(response);
// });

// function generateReadMe({ title, description, installation, usage, contributions, tests, license, github, email }) {
//     //add the above to some html content
//     const readMeString = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Profile</title>
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
//         integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
//         integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
//         crossorigin="anonymous"></script>
// </head>
// <body>
//     <nav class="navbar bg-body-tertiary">
//         <div class="container-fluid">
//             <span class="navbar-brand mb-0 h1">Hello, my name is ${name}</span>
//         </div>
//     </nav>
//     <div class="container mt-5 border rounded p-5">
//         <div class="row">
//             <div class="col-md-12">I live in ${location}.</div>
//         </div>
//         <hr />
//         <div class="row">
//             <div class="col-md-12">My favorite movie is ${movie}.</div>
//         </div>
//         <hr />
//         <div class="row">
//             <div class="col-md-12">My Github username is ${github}</div>
//         </div>
//         <hr />
//         <div class="row"><a href="${linkedin}" target="_blank"><button type="button" class="btn btn-light">Check out my Linkedin
//                 Profile!</button></a></div>
//     </div>
// </body>
// </html>
// `;
//     //write that content to a file with fs
//     fs.writeFile("README.md", readMeString, (err) => err ? console.error(error) : console.log("Success!"));
// }
