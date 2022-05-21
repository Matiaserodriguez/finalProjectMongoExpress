module.exports = (mongoose) => {
    const Users = mongoose.model(
      'users',
      mongoose.Schema(
        {
            firstName: String,
            lastName: String,
            email: String,
            picture: String,
            locale: String,
          },
          { 
            timestamps: true,
            versionKey: false 
          }
      )
    );
  
    return Users;
  };
  