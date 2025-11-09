const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

/* connection to database */
const connection = require('./database/connection');

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

/* add first route */
app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

/* add more routes as needed for movies */
app.get('/api/movies', (req, res) => {

    const sql = 'SELECT * FROM movies';
    connection.query(sql, (err, results) => {
        if (err) res.status(500).json({ error: err.message });

        console.log(results);

        res.json({ movies: results });
    });
})

app.get('/api/movies/:id', (req, res) => {

    const sql = 'SELECT * FROM movies WHERE id = ?';
    const reviewsSql = 'SELECT * FROM reviews WHERE movie_id = ?';

    const movieId = Number(req.params.id); // Number for safety injection
    console.log(sql, movieId);

    connection.query(sql, [movieId], (err, results) => {
        if (err) res.status(500).json({ error: err.message });
        console.log(results);

        // verify if movie exists
        if (results.length === 0) {
            res.status(404).json({ message: 'Movie not found' })
        }

        // add second query for reviews
        connection.query(reviewsSql, [movieId], (reviewsErr, reviewsResults) => {
            if (reviewsErr) res.status(500).json({ error: reviewsErr.message })
            console.log(reviewsResults);

            // add const for create a object with reviews
            const thisMovie = { ...results[0], reviews: reviewsResults };
            res.json(thisMovie);

        })



    })

})