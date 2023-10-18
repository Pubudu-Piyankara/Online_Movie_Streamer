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
    // const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=c1fcc16a1073776c38f907c1106c96eb&query=${query}`);
    // const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?s=${query}&apikey=c1fcc16a1073776c38f907c1106c96eb`);
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

const AuthRouter = require('./auth/router');
// const MovieRouter = require('./movie/router');
// const TvRouter = require('./tv/router');
// const GenreRouter = require('./genre/router');
// const TrendingRouter = require('./trending/router');
// const AboutRouter = require('./about/router');
// const SearchRouter = require('./search/router');

app.use('/auth', AuthRouter);
// app.use('/movie', MovieRouter);
// app.use('/tv', TvRouter);
// app.use('/genres', GenreRouter);
// app.use('/trending', TrendingRouter);
// app.use('/about', AboutRouter);
// app.use('/search', SearchRouter);
// const express = require('express');
