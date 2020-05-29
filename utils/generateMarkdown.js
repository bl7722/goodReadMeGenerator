const inquirer = require('inquirer');
const fs = require('fs');
var api= require('./api.js');
function generateMarkdown() {
inquirer
  .prompt([
    {
      type: "input",
      message: "Project badge (minimum 1)",
      name: "badge"
    },
    {
      type: "input",
      message: "Project title?",
      name: "title"
    },
    {
      type: "input",
      message: "Describe your project",
      name: "description"
    },
    {
      type: "input",
      message: "Table of Contents",
      name: "toc"
    },
    {
      type: "input",
      message: "How to Install?",
      name: "install"
    },
    {
      type: "input",
      message: "Used for?",
      name: "usage"
    },
    {
      type: "input",
      message: "Licenses?",
      name: "license"
    },
    {
      type: "input",
      message: "How to contribute?",
      name: "contribute"
    },
    {
      type: "input",
      message: "How to Test?",
      name: "tests"
    },
    {
      type: "input",
      message: "Questions?",
      name: "questions"
    },
    

  ]).then(function(response){
     const data= `
# ${response.title}
     
## ##Badges
${response.badge}

## ##Description
${response.description}

## ##Table of Contents
${response.toc}
     
## ##Installation
${response.install}

## ##Usage
${response.usage}
     
## ##Licenses
${response.license}
     
## ## Contributing
${response.contribute}
     
## ##Tests
${response.tests}
     
## ##Questions
${response.questions}
### Send Questions to:
     
`
  fs.appendFile("GeneratedREADME.md",data,function(err){

  if(err){
    throw err
}
})

}).then(function(){
  api.getUser();
});
};
module.exports = generateMarkdown