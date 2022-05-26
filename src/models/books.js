module.exports = (mongoose) => {
  const Books = mongoose.model(
    'books',
    mongoose.Schema(
      {
        Title: String,
        Author: String,
        Publisher: String,
        Editor: String,
        Language: String,
        Date: String,
        subject: String,
        summary: String
      }

    )
  );

  return Books;
};