const employees = require('../data/employeeData');

const getEmployees = (req, res) => {
  res.json(employees);
}

const getEmployeeById = (req, res) => {
    const id = req.params.Id;
    const employee = employes.find(emp => emp.id == id);
    if (!employee) {
        return res.status(404).json({ error: 'Employee not found' });
    }   
    res.json(employee);
}

const addEmployee = (req, res) => {
    const newEmployee = req.body;   
    employees.push(newEmployee);
    res.status(201).json({success: true, employee});
}

const updateEmployee =  (req, res) => {
    const id = req.params.Id;
    const updatedEmployee = req.body;
    const result = employees.find(emp => emp.id == id);

    if (!result) {
        res.status(404).json({ error: 'Employee not found' });
    }
    result.name = updatedEmployee.name;
    result.salary = updatedEmployee.salary;
    result.department = updatedEmployee.department;
    res.json({success: true, employee: result});
}

const deleteEmployee = (req, res) => {
    const id = req.params.Id;
    const result = employees.find((employee) =>(employee).id == Number(id));
    if (!result) {
        res.status(404).json({ success: False, message:'Employee not found' });
    }
    employees.splice(id - 1, 1);
    res.json({ success: true, result});
}

module.exports = {
    getEmployees,
    getEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmployee
};  
