const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Your email is required'],
      unique: true,
    },
    username: {
      type: String,
      required: [true, 'Your username is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Your password is required'],
    },
    roles: [
      {
        type: String,
        enum: ['User', 'Admin'],
        default: 'User',
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model('User', userSchema);
