const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api', (req, res) => {
  res.json({ 
    message: "Hello from the Backend! DevOps Project is running.",
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
