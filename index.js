const express = require('express');

const PORT = process.env.PORT || 3000;


const app = express();


app.get('/', async (req, res) => {
  res.json({
    message: "Hello tiger"
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

