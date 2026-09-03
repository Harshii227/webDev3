const expess = require('express');
const app = expess();
const PORT = 3000;  

app.use(expess.json());
 
const employes = [
    { id: 1, name: 'Alex',salary: 100000, department: 'HR' },
    { id: 2, name: 'shradha',salary: 120000, department: 'IT' },
    { id: 3, name: 'Rahul',salary: 110000, department: 'Finance' },
    { id: 4, name: 'Priya',salary: 130000, department: 'Marketing' },

];

app.get('/employees', (req, res) => {
  res.json(employes);
});


app.get('/employees/:Id', (req, res) => {
    const id = req.params.Id;
    const employee = employes.find(emp => emp.id == id);
    if (!employee) {
        return res.status(404).json({ error: 'Employee not found' });
    }   
    res.json(employee);
});



app.post('/employees', (req, res) => {
    const newEmployee = req.body;   
    employes.push(newEmployee);
    res.status(201).json({success: true, employee});
});

app.put('/employees/:Id', (req, res) => {
    const id = req.params.Id;
    const updatedEmployee = req.body;
    const result = employes.find(emp => emp.id == id);

    if (!result) {
        res.status(404).json({ error: 'Employee not found' });
    }
    result.name = updatedEmployee.name;
    result.salary = updatedEmployee.salary;
    result.department = updatedEmployee.department;
    res.json({success: true, employee: result});
}); 

app.delete('/employees/:Id', (req, res) => {
    const id = req.params.Id;
    const result = employes.find((employee) =>(employee).id == Number(id));
    if (!result) {
        res.status(404).json({ success: False, message:'Employee not found' });
    }
    employes.splice(id - 1, 1);
    res.json({ success: true, result});
});

    

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
  