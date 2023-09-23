const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Replace with your MongoDB connection string
const mongoURI = 'YOUR_MONGODB_CONNECTION_STRING';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Define a route to fetch movies from OMDB API
app.get('/api/movies', async (req, res) => {
  try {
    const { query } = req.query;
    const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=679cbfc1`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
