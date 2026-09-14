const expess = require('express');
const app = expess();
const PORT = 3000;  
const employees = require('./data/employeeData');
const { getEmployees, getEmployeeById, addEmployee, updateEmployee, deleteEmployee } = require('./controller/employeeController');
const employeeRoutes = require('./routes/employeeRoutes');

app.use("/", employeeRoutes);
app.use(expess.json());



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
  

