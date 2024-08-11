const mongoose = require('mongoose');

// Define the schema
const employeeSchema = new mongoose.Schema({
  EmpName: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  empId: {
    type: String,
    required: true,
    unique: true,
  },
  img_url: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
  collection: 'emps' // Explicitly set the collection name to 'finals'
});

// Create the model from the schema
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;