require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const analyseQuery = require('./src/openAI/index')

const app = express();
app.use(express.json());
app.use(cors());

app.post('/message', async (req, res) => {
  console.log(req.body.text);  // Assuming the text is in the 'text' field of the request body
  let responseText = await analyseQuery(req.body.text);
  res.send(responseText);  // Simple response to acknowledge receipt
});

app.get('/test', (req, res) => {
  res.send('Test route reached.');  // Send a simple response to acknowledge request
});

app.listen(8888, () => {
    console.log(`App listening at http://localhost:${8888}`);
  });