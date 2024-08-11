const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://ajinsanthoshb21ec1113:Ajinabia@cluster0.kitgcnl.mongodb.net/empdb?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('DB is connected');
}).catch((err) => {
  console.error('DB connection error:', err);
});

// Import your model
const Employee = require("./model"); // Adjust the path if your model is located elsewhere

// POST API to add a new employee
app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const result = await Employee.create(req.body); // Create a new employee using the Employee model
    res.status(201).send({ message: "Employee added", data: result });
  } catch (error) {
    console.error("Error adding employee:", error);
    res.status(500).send({ message: "Error adding employee", error });
  }
});

// GET API to fetch all employees
app.get("/get", async (req, res) => {
  try {
    const employees = await Employee.find(); // Fetch all employees from the 'finals' collection
    res.status(200).send(employees); // Return the fetched employees
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).send({ message: "Error fetching employees", error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});