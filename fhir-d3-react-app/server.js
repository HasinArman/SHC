// // server.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = process.env.PORT || 3001;

// // Serve the React app
// app.use(express.static('build'));

// // Parse JSON in the request body
// app.use(bodyParser.json());

// // API endpoint to convert CSV to FHIR
// app.post('/api/convert', (req, res) => {
//   // Add your CSV to FHIR conversion logic here
//   // You can use a library like 'pandas' in Python for this
// });

// // API endpoint to retrieve FHIR-encoded data
// app.get('/api/data', (req, res) => {
//   // Read FHIR-encoded data (modify this part based on your actual data)
//   const data = require('./data.json');
//   res.json(data);
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// server.js
const express = require('express');
const bodyParser = require('body-parser');
const csvtojson = require('csvtojson');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('build'));
app.use(bodyParser.json());

// API endpoint to convert CSV to FHIR
app.post('/api/convert', async (req, res) => {
  try {
    const csvData = req.body.csvData;

    // Convert CSV to JSON
    const jsonData = await csvtojson().fromString(csvData);

    // Convert JSON to FHIR (simplified example)
    const fhirData = jsonData.map(record => ({
      resourceType: 'Patient',
      name: [{
        family: record.familyName,
        given: [record.givenName]
      }],
      gender: record.gender,
      age: record.age,
      // Add more attributes as needed
    }));

    res.json({ success: true, fhirData });
  } catch (error) {
    console.error('Error converting CSV to FHIR:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// API endpoint to retrieve FHIR-encoded data
app.get('/api/data', (req, res) => {
  // Read FHIR-encoded data (modify this part based on your actual data)
  const data = require('./data.json');
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
