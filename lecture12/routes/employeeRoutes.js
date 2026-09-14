const express = require('express');
const router = express.Router();


const { getEmployees, getEmployeeById, addEmployee, updateEmployee, deleteEmployee } = require('../controller/employeeController');



router.get('/employees', getEmployees );

//get employee by id
router.get('/employees/:Id', getEmployeeById );
//add
router.post('/employees', addEmployee );
//update
router.put('/employees/:Id', updateEmployee ); 
//delete 
router.delete('/employees/:Id', deleteEmployee );

module.exports = router;

