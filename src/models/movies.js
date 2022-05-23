module.exports = (mongoose) => {
  const Movies = mongoose.model(
    'movies',
    mongoose.Schema(
      {
        movieName: String,
        director: String,
        releaseYear: Date,
        category: String,
        cast: String,
        length: String,
        summary: String
      }

    )
  );

  return Movies;
};