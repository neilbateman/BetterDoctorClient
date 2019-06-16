# BetterDoctorClient


#### By Neil Bateman

## Description
_This application queries the BetterDoctor API, providing doctors of a given condition within the Portland, OR area._

## Setup/Installation Requirements:

_To download the project:_

* _In your command line, type "git clone https://github.com/neilbateman/BetterDoctorClient" to clone the repository to your desktop, navigate into the new folder "BetterDoctorClient", then run "npm install"._

_To get a BetterDoctor Api Key:_

* _Visit the BetterDoctor API site at <https://developer.betterdoctor.com> and click “Get a free API key”._
* _Select the "Sign up" button, and fill out the form._
* _In the root of the BetterDoctorClient directory, create a new file called ".env". In it write a single line of code "exports.apiKey = your-api-key-here", where "your-api-key-here" is your unique api key from the BetterDoctor website._

_To run the application:_

* _From the command line and still in the BetterDoctorClient main directory, run "npm run start," and a localhost browser will appear._

## Specs

| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
|Program returns a list of doctors of a given condition in the Portland area. | Kevin Bacon pain | John Butler

    Specialty: Pulmonary Disease | Phone: 5032161234 | Accepting Patients: Yes |
| Program returns error message if API request failed | failed call | "Error: your api call failed: Bad Request." |
| Program returns error message if search returns no result | "No results for the given search." |

## Known Bugs

_No known bugs._

## Support and contact

_Contact me at neilbatman@gmail.com_

## Technologies Used

_NPM, webpack, webpack-cli, webpack-dev-server, clean-webpack-plugin, css-loader, style-loader, babel-core, jest, preset-es2015, eslint, eslint-loader, html-webpack-plugin, uglifyjs, webpack-plugin_
