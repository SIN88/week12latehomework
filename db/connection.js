const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
 
  user: "root",
  
  password: "Persephone1",
  database: "employees"
});

connection.connect();

connection.query = inquirer.promisify(connection.query);

module.exports = connection;
