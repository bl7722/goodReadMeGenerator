const axios = require('axios');
const inquirer= require('inquirer')
const fs= require('fs')
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
      // handle success
     

      fs.appendFile("GeneratedREADME.md", 
`## ## Email: ${response.data.email ? response.data.email : "This user has a private email"}
!["Id Picture"](${response.data.avatar_url})
`, 
      function(err){
        if(err){
          return console.log("Error. Please retry")
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