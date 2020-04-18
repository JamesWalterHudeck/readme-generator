//created: 4/16/20
//Developer: James W. Hudeck

//last updated: 4/18/2020
//Developer: James W. Hudeck

function generateProjectUrl(github, title) {
  const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${kebabCaseTitle}`;
}

function renderLicenseBadge(license, github, title) {
  if (license !== "None") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
  }
  return ''
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `This project is licensed under the ${license} license.`
    )
  }
  return ''
}

function generateMarkdown(data) {
  return `

# ${data.title}

${renderLicenseBadge(data.license, data.github, data.title)}

# Table of Contents 

[Description](#Description)
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributing](#contributing)
[Tests](#tests)
[Questions](#questions)

# Description:
${data.description}

# Installation

Installation dependencies command: ${data.installation}

# Usage 
${data.usage}

# License
${renderLicenseSection(data.license)}
  
# Contributing 
${data.contributing}

# Tests
Command to run tests: ${data.test}

# Have any questions? Contact:
${data.avatar_url}
${data.email}

`;
}
module.exports = generateMarkdown;