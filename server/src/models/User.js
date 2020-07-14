/*
  eslint-disable no-underscore-dangle
*/
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const {
  sign,
} = require('jsonwebtoken');

const {
  jwt,
} = require('../config');

const {
  Schema,
} = mongoose;

const {
  JWT_SECRET,
  JWT_REFRESH_TOKEN_EXPIRY,
  JWT_ACCESS_TOKEN_EXPIRY,
  JWT_ISSUER,
} = jwt;

const UserSchema = new Schema({
  name: {
    type: String,
    minlength: [3, 'Name is too short!'],
    required: false,
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    lowercase: true,
    unique: true,
    index: true,
    trim: true,
    minlength: [8, 'Username is too short!'],
    maxlength: [120, 'Username is too long!'],
  },
  email: {
    type: String,
    required: [true, 'Email is required!'],
    lowercase: true,
    unique: true,
    index: true,
    trim: true,
    minlength: [10, 'Email is too short!'],
    maxlength: [120, 'Email is too long!'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    trim: true,
    minlength: [8, 'Password is too short!'],
  },
  mobile: {
    type: String,
    trim: true,
    minlength: [10, 'Mobile is too short!'],
    maxlength: [15, 'Mobile number is too long!'],
    required: false,
  },
  dob: {
    type: Date,
  },
  doj: {
    type: Date,
    default: Date.now,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isUserVerified: {
    type: Boolean,
    default: false,
    select: false,
  },
  isUserArchived: {
    type: Boolean,
    default: false,
    select: false,
  },
}, {
  strict: true,
  timestamps: true,
});

UserSchema.pre('save', async function hashPassword(next) {
  try {
    if (this.isModified('password') || this.isNew) {
      const hashedPassword = await bcrypt.hash(this.password, 15);
      this.password = hashedPassword;
      return next();
    }
    return true;
  } catch (err) {
    console.error(err);
    throw err;
  }
});

UserSchema.methods.createRefreshToken = function createRefreshToken() {
  try {
    const payload = {
      id: this._id,
      username: this.username,
      email: this.email,
      isAdmin: this.isAdmin,
    };
    const token = sign(payload, JWT_SECRET, {
      algorithm: 'HS512',
      expiresIn: JWT_REFRESH_TOKEN_EXPIRY,
      issuer: JWT_ISSUER,
    });
    return token;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

UserSchema.methods.createAccessToken = function createAccessToken() {
  try {
    const payload = {
      id: this._id,
      username: this.username,
      email: this.email,
      isAdmin: this.isAdmin,
    };
    const token = sign(payload, JWT_SECRET, {
      algorithm: 'HS512',
      expiresIn: JWT_ACCESS_TOKEN_EXPIRY,
      issuer: JWT_ISSUER,
    });
    return token;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

UserSchema.methods.formattedUserObj = function formattedUserObj() {
  const obj = this.toObject({
    virtuals: true,
  });
  const {
    _id,
    password,
    isUserArchived,
    isUserVerified,
    __v,
    ...rest
  } = obj;
  const formattedObj = {
    ...rest,
  };
  return formattedObj;
};

module.exports = mongoose.model('User', UserSchema);
