const mongoose = require('mongoose')

const Schema = mongoose.Schema // all mongoose schema's start off the same

const userSchema = new Schema({ // this userSchema has a single field
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true, // this creates timestamps of when fields are created or modified
})

const User = mongoose.model('User', userSchema);

module.exports = User