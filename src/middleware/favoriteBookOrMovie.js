const db = require('../models');
const books = db.books;
const movies = db.movies;


exports.validateBookOrMovie = async (req, res, next) => {
    if (req.body.type !== 'book' && req.body.type !== 'movie') {
        res.status(400).json({ msg: 'Type must be either book or movie'});
    };
    if (req.body.type === 'book') {
        const book = await books.findOne({ _id: req.body.mediaId }, { _id: 0 });
        if (!book) {
            res.status(400).json({ msg: 'Please, check the mediaID again'});
            return;
        }
        req.object = book;
        next();
    };
    if (req.body.type === 'movie') {
        const movie = await movies.findOne({ _id: req.body.mediaId }, { _id: 0 });
        if (!movie) {
            res.status(400).json({ msg: 'Please, check the mediaID again'});
            return;
        }
        req.object = movie;
        next();
    };  
}
