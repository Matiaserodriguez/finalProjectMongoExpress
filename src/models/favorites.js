module.exports = (mongoose) => {
  const favorites = mongoose.model(
    'favorites',
    mongoose.Schema(
      {
        userEmail: String,
        type: String,
        media: Object,
        mediaId: String
      },
      { 
        versionKey: false 
      }
    )
  );

  return favorites;
};