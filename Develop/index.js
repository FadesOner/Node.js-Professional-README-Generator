// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatorMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your Email adress?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your Proyect name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project?"
    },
   {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "None"]
    },
    {
        type: "input",
        name: "dependencies",
        message: "What does the user need to install to run this app (ie...dependencies)?"
        
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "test",
        message: "What command are needed to run a test?",
        default: "npm test"
    },
    {
        type: "input",
        name: "repo",
        message: "What does the user need to know about using the repo?",   
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        console.log(fileName);
        console.log(data);
    if (err) {
        return console.log(err);
    } else {
        console.log("you have successfully created a readme file!")
    }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
     .then(function(data){
         writeToFile("README.md", generatorMarkdown(data));
         console.log(data)
     })
}

// Function call to initialize app
init();

