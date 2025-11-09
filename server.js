const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

/* connection to database */
const connection = require('./database/connection');

// import routes
const moviesRoutes = require('./routes/movies');

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

/* add first route */
app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

/* add more routes as needed for movies */
app.use('/api/movies', moviesRoutes);

