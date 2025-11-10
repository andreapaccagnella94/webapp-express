const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
// import routes
const moviesRoutes = require('./routes/movies');
// import error handling middleware
const serverError = require('./middleware/serverError');
const notFound = require('./middleware/notFound');

// import a static asset middleware
app.use(express.static('public'));
// import json middleware for body parsing for send a reviews later
app.use(express.json());

// import cors middleware policy for frontend
app.use(cors({ origin: "http://localhost:5173" }));


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

/* add first route */
app.get('/', (req, res) => {
    // test server error handling
    // app.dsvdsfnvo();
    res.json({ message: 'Hello, World!' });
});

/* add routes for movies */
app.use('/api/movies', moviesRoutes);


// add error handling middleware
app.use(serverError);

// add error 404 middleware
app.use(notFound);

