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
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['MIT', 'Apache', 'Mozilla', 'Boost Software', 'Eclipse', 'No License']
    },
    {
        type: 'confirm',
        name: 'confirmContributors',
        message: 'Would you like to allow other developers to contribute to your project?',
        default: true
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please provide rules for contribution on your project.',
        when: ({ confirmContributors }) => {
            console.log(confirmContributors);
            if (confirmContributors) {
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

//Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./test/generated-Readme.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File Created!!'
            });
        });
    });
};

//Function to prompt questions and store inputs
function init() {
    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
}

// Function call to initialize app
init()
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
});
