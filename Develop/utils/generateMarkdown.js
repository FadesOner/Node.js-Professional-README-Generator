// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![image](https://img.shields.io/badge/License-${license}-yellow)`
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title 

  # ${data.title} 
  https://github.com/${data.github}/${data.title}

  # Description

 ${data.description}

  # Installation

The following necessary dependencies must be installed to run the application properly: ${data.dependencies}
to install the dependencies you need to run this command ${data.installation}

# License   ${renderLicenseBadge(data.license)} 

This project is licensed under the ${data.license} license. 

 # Tests
The following is needed to run the test: ${data.test}

 # Contact

This was created by https://github.com/${data.github}, if you have any enquiry do not hesitate to emailing me at: ${data.email} 
`
}

module.exports = generateMarkdown;
