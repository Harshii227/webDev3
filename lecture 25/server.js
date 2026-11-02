const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const doctorsRoutes = require('./routes/doctors.routes.js');
const connectDB = require('./config/db.js');
const dotenv = require('dotenv');
dotenv.config();



connectDB;
app.use(doctorsRoutes);

app.use(express.json())




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})