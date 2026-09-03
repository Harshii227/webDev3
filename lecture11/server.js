const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
    console.log(req.query.name);
    console.log(req.query.age);
});
  


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
