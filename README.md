# employee-computer-list
Fetch and render data from local json server as the API

Listing Employees
In this first chapter, your task is to create a list of employees.

Practice: Small Business Workforce
Create a ~/workspace/workforce directory for this exercise.

A small software consulting business wants to keep track of its employees and the computers that they use. Each employee is assigned a computer when they join the company.

Create an API to be served with json-server and create the following resources in your database.json file. Do not build the arrays of objects in your JavaScript code.

Build arrays of objects that represent Employees, and Computers in your database.json file.
Assign every resource a unique id property.
Assign each employee a computer using a foreign key.
Here's some JSON to get you started. Add at least 4 more computers, and 4 more employees to your database. Assign each employee a different computer.

workforce/api/database.json
{
    "computers": [
        {
            "id": 1,
            "model": "Macbook Pro",
            "year": 2015
        }
    ],
    "employees": [
        {
            "id": 1,
            "firstName": "Rainu",
            "lastName": "Ittycheriah",
            "computerId": 1
        }
    ]
}
HTML Representations
Create your employee data provider, employee list, and employee components
Create your computer data provider
Use the employee and computer data in the employee list component to display the employee's name, and age. Also display the model and manufacture year for the computer she is using.
