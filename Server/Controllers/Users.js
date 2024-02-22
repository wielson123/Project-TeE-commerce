const { trusted } = require("mongoose");
const User = require("../Schemas/Users");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const jwt_secret = process.env.JWT_SECRET;

// verify token
const verify_token = (req, res) => {
  console.log(req.headers.authorization);
  const token = req.headers.authorization;
  jwt.verify(token, jwt_secret, (err, succ) => {
    err
      ? res.json({ ok: false, message: "Token is corrupted" })
      : res.json({ ok: true, succ });
  });
};

const register = async (req, res) => {
  // this salt can be truly random with one of available npm packages
  const salt = "321dsa";
  const { emailaddress, password } = req.body;
  if (!emailaddress || !password) {
    return res.json({ ok: false, message: "All fields required" });
  }

  if (!validator.isEmail(emailaddress)) {
    return res.json({ ok: false, message: "Invalid email" });
  }
  try {
    const user = await User.findOne({ emailaddress });
    if (user) return res.json({ ok: false, message: "User exists!" });
    const hash = await argon2.hash(password, salt);
    console.log("hash ==>", hash);
    const newUser = {
      emailaddress,
      password: hash,
    };
    await User.create(newUser);
    res.json({ ok: true, message: "Successfully registered" });
  } catch (error) {
    console.log(error);
    res.json({ ok: false, error });
  }
};

const login = async (req, res) => {
  const { emailaddress, password } = req.body;
  if (!emailaddress || !password) {
    return res.json({ ok: false, message: "All fields are required" });
  }
  if (!validator.isEmail(emailaddress)) {
    return res.json({ ok: false, message: "Invalid email provided" });
  }
  try {
    const user = await User.findOne({ emailaddress });
    if (!user) return res.json({ ok: false, message: "Invalid user provided" });
    const match = await argon2.verify(user.password, password);
    if (match) {
      // once user is verified and confirmed we send back the token to keep in localStorage in the client and in this token we can add some data -- payload -- to retrieve from the token in the client and see, for example, which user is logged in exactly. The payload would be the first argument in .sign() method. In the following example we are sending an object with key userEmail and the value of email coming from the "user" found in line 47
      const token = jwt.sign({ userEmail: user.emailaddress }, jwt_secret, {
        expiresIn: "1",
      }); //{expiresIn:'365d'}
      // after we send the payload to the client you can see how to get it in the client's Login component inside handleSubmit function
      res.json({ ok: true, message: "welcome back", token, user });
    } else return res.json({ ok: false, message: "Invalid data provided" });
  } catch (error) {
    res.json({ ok: false, error });
  }
};

// add user
const userAdd = async (req, res) => {
  const { firstname, lastname, password, address, phone, emailaddress } =
    req.body;
  try {
    const foundEmail = await User.findOne({ emailaddress });
    if (foundEmail) {
      res.send({
        ok: true,
        data: `User already exists.`,
      });
    } else {
      await User.create({
        firstname,
        lastname,
        emailaddress,
        password,
        address,
        phone,
      });
      res.send({
        ok: true,
        data: `An account for ${firstname} ${lastname} has been created`,
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
    const foundEmail = await User.findOneAndDelete({
      emailaddress: emailaddress,
    });
    if (foundEmail) {
      res.send({
        ok: true,
        data: `User with emailaddress ${emailaddress} successfully deleted.`,
      });
    } else {
      res.send({
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
  register,
  login,
  verify_token,
};
