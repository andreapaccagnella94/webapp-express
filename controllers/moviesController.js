/* connection to database */
const connection = require('../database/connection');


function index(req, res) {
    const sql = 'SELECT * FROM movies';
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        console.log(results);

        res.json({ movies: results });
    });
}

function show(req, res) {
    const sql = 'SELECT * FROM movies WHERE id = ?';
    const reviewsSql = 'SELECT * FROM reviews WHERE movie_id = ?';

    const movieId = Number(req.params.id); // Number for safety injection
    // console.log(sql, movieId);

    connection.query(sql, [movieId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        // console.log(results);

        // verify if movie exists
        if (results.length === 0) {
            return res.status(404).json({ message: 'Movie not found' })
        }

        // add second query for reviews
        connection.query(reviewsSql, [movieId], (reviewsErr, reviewsResults) => {
            if (reviewsErr) return res.status(500).json({ error: reviewsErr.message })
            // console.log(reviewsResults);

            // add const for create a object with reviews
            const thisMovie = { ...results[0], reviews: reviewsResults };
            res.json(thisMovie);

        })

    })
}

function store(req, res) {
    console.log(req.file);
    const image = 'uploads/' + req.file.originalname
    const { title, director, genre, release_year, abstract } = req.body
    const sql = 'INSERT INTO movies (title, director, genre, release_year, abstract, image) VALUES (?, ?, ?, ? ,? ,?)';
    connection.query(sql, [title, director, genre, release_year, abstract, image], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        console.log(results);
        res.status(201).json({ message: "Movie added", id: results.insertId })

    })

}

function storeReviews(req, res) {
    // console.log(req.body, req.params);
    // get movie id
    const movieId = Number(req.params.id)
    const { name, vote, text } = req.body
    console.log(movieId, name, vote, text);

    const sql = "INSERT INTO reviews (`movie_id`,`name`,`vote`,`text`) VALUES(?,?,?,?)"
    connection.query(sql, [movieId, name, vote, text], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        console.log(results);

        res.status(201).json({ message: `Review added for movie id: ${movieId}` })
    })


}




module.exports = {
    index,
    show,
    store,
    storeReviews
}