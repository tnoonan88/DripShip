const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "Valid email required!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  admin: {
    type: Boolean,
    required: true,
  },
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

// userSchema.pre("save", async function (next) {
//   if (this.isNew || this.isModified("password")) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }

//   next();
// });

userSchema.methods.isCorrectPassword = async function (password) {
  console.log(password, this.password);
  // return bcrypt.compare(password, this.password);
  return password === this.password;
};

const User = model("User", userSchema);

module.exports = User;
