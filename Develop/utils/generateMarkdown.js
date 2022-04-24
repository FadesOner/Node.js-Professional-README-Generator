// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}
  https://github.com/${data.github}/${data.title}

  # Description

 ${data.description}

  # Installation

The following necessary dependencies must be installed to run the application properly: ${data.dependencies}
to install the dependencies you need to run this command ${data.installation}

# License

This project is licensed under the ${data.license} license. 

 # Tests
The following is needed to run the test: ${data.test}

 # Contact

This was created by https://github.com/${data.github}, if you have any enquiry do not hesitate to emailing me at: ${data.email} 
`
}

module.exports = generateMarkdown;
