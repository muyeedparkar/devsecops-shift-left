const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('DevSecOps Shift-Left Pipeline Active');
});

app.get('/health', (req, res) => {
  res.json({ status: 'UP', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});