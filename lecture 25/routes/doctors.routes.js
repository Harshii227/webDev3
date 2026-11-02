const express = require('express');
const router = express.Router();
const { getDoctors, getDoctorById, createDoctor, updateDoctor, deleteDoctor } = require('../controller/doctors.controller.js');

router.get('/api/doctors', getDoctors);

router.get('/api/doctors/:id', getDoctorById );

router.post("/api/doctors", createDoctor);

router.put("/api/doctors/:id", updateDoctor);

router.delete("/api/doctors/:id", deleteDoctor);

module.exports = router;


