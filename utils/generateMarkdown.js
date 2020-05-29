const inquirer = require('inquirer');
const fs = require('fs');


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
     
## ##Description
${response.description}
     
## ##Installation
${response.install}
## ##Usage
${response.usage}
     
## ##Credits
${response.credits}
     
## ##Licenses
${response.license}
     
## ##Guide to Contributing
${response.contributing}
     
## ##Tests
${response.tests}
     
## ##Badges
${response.badges}
     
## ##Questions
     
### If you have questions, please contact the creator at:
     
`
  fs.appendFile("GeneratedREADME.md",data,function(err){

  if(err){
    throw err
}
})
//run function to get api info and display it
}).then(function(){
  api.getUser();
});
};
module.exports = generateMarkdown