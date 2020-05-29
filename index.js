const fs = require("fs");
const util = require("util");
const questions = require("./utils/inquirer-questions")
const api = require("./utils/api")
const markdown = require("./utils/generateMarkdown");

// promisify file writing - makes it easier to write out

const writeFileAsync = util.promisify(fs.writeFile);

async function init() {
    try {
        // prompting user for data
        const data = await questions.promptUser();
       
        // pulling data from api 
        const apiCall = await api.getUser(data.username);
       
       // combining both arrays into one array using a spread operator
        const combinedData = {...data,...apiCall};

        // using combined array to fill out readme
        const readme = markdown.generateMarkdown(combinedData);
    
        await writeFileAsync("READMETEST.md", readme);
        
    } catch(err) {
        console.log(err);
    } finally {
        console.log("Successfully wrote to READMETEST.md");
    }
}
    
init();