module.exports = (mongoose) => {
  const favorites = mongoose.model(
    'favorites',
    mongoose.Schema(
      {
        userEmail: String,
        type: String,
        media: [Array],
        mediaId: String
      }

    )
  );

  return favorites;
};