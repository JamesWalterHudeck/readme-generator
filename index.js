//created: 4/16/20
//Developer: James W. Hudeck

//last updated: 4/18/2020
//Developer: James W. Hudeck


const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const api = require("./utils/api");
const generateMarkdown = require("./utils/createMarkdown");

const questions = [
  
  {
    type: "input",
    name: "github",
    message: "GitHub username:",
    validate: name => {
      return name !== '';
    }
  },
  {
    type: "input",
    name: "title",
    message: "Project's name:",
    validate: name => {
      return name !== '';
    }
  },
  {
    type: "input",
    name: "description",
    message: "Description of the project:",
    validate: name => {
      return name !== '';
    }
  },
  {
    type: "list",
    name: "license",
    message: "Licenses:",
    choices: ['Apache License 2.0', 'GPL', 'MIT License', 'Mozilla Public License 2.0', 'LGPL', 'Unlicense']
  },
  {
    type: "input",
    name: "installation",
    message: "Install dependencies:",
    default: "npm i",
    validate: name => {
      return name !== '';
    }
  },
  {
    type: "input",
    name: "test",
    message: "Command to run tests:",
    default: "npm run test",
    validate: name => {
      return name !== '';
    }
  },
  {
    type: "input",
    name: "usage",
    message: "About the repo:",
    validate: name => {
      return name !== '';
    }
  },
  {
    type: "input",
    name: "contributing",
    message: "Contributing to the repo:",
    validate: name => {
      return name !== '';
    }
  }

];

function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data);
}

function init() {
  inquirer.prompt(questions).then((questionsInput) => {
    api.getUser(questionsInput.github)
      .then(function (getData) {
        writeToFile("indexREADME.md", generateMarkdown({ ...questionsInput, ...getData }));
      })
  })
}

init();
