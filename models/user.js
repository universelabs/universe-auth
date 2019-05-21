const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

// Define model
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: {
    type: String
  }
});

// On Save Hook, encrypt password
// Before saving this model, run this function
userSchema.pre("save", function(next) {
  // Get access to the user model
  const user = this;

  // Generate a salt. Then run callback
  bcrypt.genSalt(12, function(err, salt) {
    if (err) {
      return next(err);
    }

    // Hash (encrypt) password using the salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err);
      }

      // Overwrite plain text password with encrypted password
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) {
      return callback(err);
    }

    callback(null, isMatch);
  });
};

// Create model class
const ModelClass = mongoose.model("user", userSchema);

// Export model
module.exports = ModelClass;
