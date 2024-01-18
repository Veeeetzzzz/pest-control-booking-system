const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  // Define the schema for the appointment
  title: String,
  date: Date,
  // Add more fields as necessary
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
