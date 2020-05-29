const fs= require('fs')
const inquirer= require('inquirer')
const axios = require('axios');
const api = {
  getUser() {

inquirer
.prompt(
  {
      type: "input",
      message: "What is your Github Username?",
      name: "github"
  }
 ).then(function(response) {
  const username = (response.github)
  let gitUrl = `https://api.github.com/users/${username}`
  

  axios.get(gitUrl)
    .then(function (response) {

     

      fs.appendFile("GeneratedREADME.md", 
`## ## Email: ${response.data.email ? response.data.email : example@email.com}
!["Id Picture"](${response.data.avatar_url})
`, 
      function(err){
        if(err){
          return console.log("Error. Retry")
      }
        else{
          return console.log("README Generated Successfully!")
      }
      });
    })
    });
  }
  };

module.exports = api;