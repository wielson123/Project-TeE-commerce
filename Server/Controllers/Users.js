const { trusted } = require("mongoose");
const Users = require("../Schemas/Users");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const jwt_secret = process.env.JWT_SECRET;

// register user
const register = async (req, res) => {
  const salt = "321bla";
  const { emailaddress, password } = req.body;
  if (!emailaddress || !password) {
    return res.json({ ok: false, message: "All fields required" });
  }
  if (!validator.isEmail(emailaddress)) {
    return res.json({ ok: false, message: "invalid email" });
  }
  try {
    const user = await Users.findOne({ emailaddress });
    if (user) return res.json({ ok: false, message: "User in the DB!" });
    const hash = await argon2.hash(password, salt);
    // salt strengthens the hash, better to use some salt in your dish

    console.log("hash=>", hash);
    const newUser = {
      name,
      lastname,
      email,
      password: hash,
    };
    await Users.create(newUser);
    res.json({ ok: true, message: "Succesfully registered" });
  } catch (error) {
    console.log(error);
    res.json({ ok: false, error });
  }
};

// user loging

const login = async (req, res) => {
  const { emailaddress, password } = req.body;
  if (!emailaddress || !password) {
    return res.json({ ok: false, message: "All fields are required" });
  }
  if (!validator.isEmail(emailaddress)) {
    return res.json({ ok: false, message: "invalid email address" });
  }

  try {
    const user = await Users.findOne({ emailaddress });
    if (!user) return res.json({ ok: false, message: "invalid email address" });
    const match = await argon2.verify(user.password, password);
    if (match) {
      const token = jwt.sign({ userEmail: user.emailaddress }, jwt_secret, {
        expiresIn: "1h",
      });
      res.json({ ok: true, message: "Welcome to your dashboard", token, user });
    } else
      return res.json({ ok: false, message: "Your provided data is invalid" });
  } catch (error) {
    res.json({ ok: false, error });
  }
};

// add user

const userAdd = async (req, res) => {
  const { name, lastname, password, address, phone, emailaddress } = req.body;
  try {
    const foundEmail = await Users.findOne({ emailaddress });
    if (foundEmail) {
      res.send({
        ok: true,
        data: `User already exists.`,
      });
    } else {
      await Users.create({
        name,
        lastname,
        emailaddress,
        password,
        address,
        phone,
      });
      res.send({
        ok: true,
        data: `An account for ${name} ${lastname} has been created`,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      ok: false,
      error: "An error occurred while adding the user.",
    });
  }
};

// delete user

const userDelete = async (req, res) => {
  const { emailaddress } = req.body;
  try {
    const foundEmail = await Users.findOneAndDelete({
      emailaddress: emailaddress,
    });
    if (foundEmail) {
      res.send({
        ok: true,
        data: `User with emailaddress ${emailaddress} succesfully deleted.`,
      });
    } else {
      red.send({
        ok: true,
        data: `No user found with emailaddress: ${emailaddress}`,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  userAdd,
  userDelete,
};
