require("dotenv").config();
const express = require("express");
const cors = require("cors");
const analyseQuery = require('./src/openAI/index')

const app = express();
app.use(express.json());
app.use(cors());

app.post('/message', async (req, res) => {
  try {
    console.log(req.body.text);  // Assuming the text is in the 'text' field of the request body
    let responseText = await analyseQuery(req.body.text);
    res.send(responseText);  // Simple response to acknowledge receipt
  } catch(error){
    console.error(error); // Log the error
    res.status(500).send('An error occurred');
  }
});

app.get('/test', (req, res) => {
  try {
    res.send('Test route reached.');  // Send a simple response to acknowledge request
  } catch(error){
    console.error(error); // Log the error
    res.status(500).send('An error occurred');
  }
});

app.listen(8888, () => {
  console.log(`App listening at http://localhost:${8888}`);
});

// Generic error handling middleware for unmatched routes or server errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('An error occurred');
});
