const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;
app.use(morgan());

// const logMiddleware = (req, res, next) => {
//     // console.log(res.name)
//     res.name = 'John Doe';
//     console.log("Request url:", req.url, "req method:", req.method,
//         "time:", new Date().toLocalString());
       
//     // res.send("hello from middleware");

//      next();
// }

const apicheckMiddleware = (req, res, next) =>{
    if (req.query.API_KEY==="12345") {
        console.log("authenticated");
        next();
    } else {
        res.send("API invalid");
    }
};

//  app.use(logMiddleware);
app.use(apicheckMiddleware);

app.get('/', (req, res) => {
    console.log("Request name: ", res.name);
    console.log("hello world"); 
    res.send('Hello World');
});

app.get('/data', (req, res) => { 
    console.log("hello data");
    res.json({
        city:"New York",
        country:"USA",
        temp:32,
        humidity:80
    })
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
