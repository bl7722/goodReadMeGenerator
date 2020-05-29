const util = require('util')
const generateMarkdown = require('./utils/generateMarkdown.js');
const generateMarkdownPromise = util.promisify(generateMarkdown)
 generateMarkdownPromise();