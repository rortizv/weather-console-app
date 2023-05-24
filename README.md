# weather-console-app

This is a World Weather console app

You can:
- Check the weather for city
- List search history


To check the weather by city, this free weather API is used to fetch the data:
https://www.visualcrossing.com/weather-api


Dependencies used:

"dependencies": { "colors": "^1.4.0", "inquirer": "^8.1.2", "axios": "^1.4.0", "dotenv": "^16.0.3" }

Inquirer is an npm package defined as a collection of common interactive command line user interfaces. Makes it easier to create interactive console menus with input handling, confirm (Y/N), multi selecting and more. Check out the documentation: https://www.npmjs.com/package/inquirer

Axios is an npm package used to make http requests.

A simple JSON file is used to simulate a DB.



Steps to run the World Weather console app:

1. Clone repo: git clone https://github.com/rortizv/weather-console-app.git
2. Install dependencies:
  - npm i colors
  - npm i inquirer@8.1.2
  - npm i axios
  - npm i dotenv
3. Open terminal and type: npm start
