const inquirer = require("inquirer");
const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port:3306,
  user: "root",
  password: "Persephone1",
  database: "employees",
  table:"employee"
 
});

connection.connect((err) => {
    if (err) throw err;
    startPrompt();
  });
  
  
  function startPrompt() {
      inquirer.prompt([
          {
              type: "list",
              name: "option",
              message: "What would you like to do?",
              choices: ["View all employees", "View departments","View roles", "Add employees","Add departments", "Add roles", "Update employee roles"]
          }   
      ])
      .then(results => {
          console.log(results)
          if(results.option === "View all employees"){
          viewAllEmployees();    
          }else if(results.option === "View departments"){
              viewDepartments()
          }else if(results.option === "View roles"){
              viewRoles()
          }else if(results.option === "Add employees"){
              addEmployees()
          }else if(results.option === "Add departments"){
              addDepartments()
          }else if(results.option === "Add roles"){
              addRoles()
          }else if(results.option === "Update employee roles"){
              updateEmployees()
          }else {
              console.log("Something went wrong", results)
              process.exit()
          }
      }) 
  }
  
  function viewAllEmployees(){
      connection.query('select * from employee', (err, data)=>{
          if(err) throw err
          console.table(data)
          startPrompt()
      })
  }
  
  function viewDepartments(){
      connection.query('select * from department', (err, data)=>{
          if(err) throw err
          console.table(data)
          startPrompt()
      })
      
  }
  
  function viewRoles(){
      connection.query('select * from role', (err, data)=>{
          if(err) throw err
          console.table(data)
          startPrompt()
      })
  }
  
  function addDepartments(){
      inquirer.prompt([
          {
              type: "input",
              name: "name",
              message: "What is the departments name?"
          }   
      ]).then(results =>{
          connection.query('INSERT INTO department set ?', results,  (err, data)=>{
              if(err) throw err
              console.table(data)
              startPrompt()
      })
      
      })
  }
  
  
  function addEmployees(){
      inquirer.prompt([
          {
              type: "input",
              name: 'first_name',
              message: "What is your first name?"
          },
          {
              type: "input",
              name: 'last_name',
              message: "What is your last name?"
          },
          {
              type: "input",
              name: 'role_id',
              message: "What is your role with the company?"
          }         
      ]).then(results =>{
          connection.query('INSERT INTO employee set ?', results,  (err, data)=>{
              if(err) throw err
              console.table(data)
              startPrompt()
      })
      
      })
  }
  
  function addRoles(){
      inquirer.prompt([
          {
              type: "input",
              name: "title",
              message: "What is your title?"
          },
  
          {
              type: "input",
              name: "salary",
              message: "What is your salary?"
          },
  
          {
              type: "input",
              name: "department_id",
              message: "What is the department?"
          }
  
  
      ]).then(results =>{
          connection.query('INSERT INTO role set ?', results,  (err, data)=>{
              if(err) throw err
              console.table(data)
              startPrompt()
      })
      
      })
  }
  
  
  function updateEmployees() {
      inquirer.prompt([
          {
              type:"input",
              name: "employee_id",
              message: "What employee is getting a new role?"
          },
  
          {
              type:"input",
              name: "role_id",
              message: "What is your new role ID?"
          }
  
        
      ]).then(results => {
          console.log(results)
          connection.query('UPDATE employee SET role_id = ? WHERE id = ?', [results.role_id, results.employee_id], (err,data)=> {
              if(err) throw err
              console.table(data)
              startPrompt()
          } )
      })
  }