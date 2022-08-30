// Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
// Created an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your title!!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your Email address!!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a brief description of your project?',
        validate: descripInput => {
            if (descripInput) {
                return true;
            } else {
                console.log('Please enter a description of your project!!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you create this project?',
        validate: whyInput => {
            if (whyInput) {
                return true;
            } else {
                console.log('Please enter why you created this project!!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'use',
        message: 'Please provide instructions and/or exapmles for use.',
        validate: useInput => {
            if (useInput) {
                return true;
            } else {
                console.log('Please enter youre instructions for usage!!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How would a user install your project?',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter how a user would install your project!!');
                return false;
            }
        }
    },
    {
        type: 'lsit',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['MIT', 'Apache', 'Mozilla', 'No License']
    },
    {
        type: 'input',
        name: 'confirmContributors',
        message: 'Would you like to allow other developers to contribute to your project?',
        default: true
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please provide rules for contribution on your project.',
        when: ({ confirmContributers }) => {
            if (confirmContributers) {
                return true;
            } else {
                return false;
            }
        },
        validate: contributerInput => {
            if (contributerInput) {
                return true;
            } else {
                console.log('Please enter contibution rules!!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter how a user would test the project.',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter how a user would test your project!!');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
