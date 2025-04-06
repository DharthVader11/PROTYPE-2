// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost/symptomsDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Define the schema for symptoms, diseases, and remedies
const symptomSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const remedySchema = new mongoose.Schema({
  symptomId: mongoose.Schema.Types.ObjectId,
  remedyName: String,
  remedyDescription: String,
});

const Symptom = mongoose.model('Symptom', symptomSchema);
const Remedy = mongoose.model('Remedy', remedySchema);

// API Endpoint to get remedies by symptom
app.get('/api/remedies/:symptom', async (req, res) => {
  const symptomName = req.params.symptom;

  // Find the symptom
  const symptom = await Symptom.findOne({ name: symptomName });

  if (!symptom) {
    return res.status(404).send('Symptom not found');
  }

  // Find remedies related to the symptom
  const remedies = await Remedy.find({ symptomId: symptom._id });

  return res.json(remedies);
});

// API Endpoint to add a new symptom
app.post('/api/symptoms', async (req, res) => {
  const { name, description } = req.body;
  const newSymptom = new Symptom({ name, description });
  await newSymptom.save();
  res.status(201).send('Symptom added');
});

// API Endpoint to add a new remedy
app.post('/api/remedies', async (req, res) => {
  const { symptomName, remedyName, remedyDescription } = req.body;
  
  // Find the symptom
  const symptom = await Symptom.findOne({ name: symptomName });
  if (!symptom) {
    return res.status(404).send('Symptom not found');
  }
  
  const newRemedy = new Remedy({ symptomId: symptom._id, remedyName, remedyDescription });
  await newRemedy.save();
  res.status(201).send('Remedy added');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
