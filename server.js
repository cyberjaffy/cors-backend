const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// ✔️ Enable CORS (when you fix it)
app.use(cors({
  origin: 'https://happyyyy-desert-04dc06410.2.azurestaticapps.net'
}));

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Azure App Service!' });
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
