import mongoose, { SchemaTypes } from "mongoose";
const { Schema, model, models } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    cart: [
      {
        product: {
          type: SchemaTypes.ObjectId,
          ref: 'Product',
          required: true,
          unique: true
        },
        quantity: {
          type: Number,
          default: 1,
          required: true
        },
        size: {
          type: String
        }
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
    }
  }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

userSchema.methods.isCorrectPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = models.User || model("User", userSchema);

export default User;
