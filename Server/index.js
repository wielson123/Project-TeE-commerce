// GENERAL CONFIG
const express = require("express");
const app = require("express")();
require("dotenv").config();
const port = process.env.PORT || 5050;

//CORS
const cors = require("cors");
app.use(cors());

//or enable it only for the specific url
app.options("/sendEmail", cors());

// allowing requests from the front-end to our server with api calls
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  next();
});

// Connecting to DB
const mongoose = require("mongoose");

//to print incoming requests from mongoose in the terminal
mongoose.set("debug", true);

async function connectingDB() {
  try {
    // inside .env file you can change the DB address from local to Atlas MongoDB

    await mongoose.connect(`${process.env.MONGO_URL}`); //
    console.log("Connected to the DB");
  } catch (error) {
    console.log("ERROR: Seems like you cannot connect to the Database!!");
  }
}
connectingDB();

// ADMINJS

// first install adminjs and the dependencies
// npm i adminjs @adminjs/express @adminjs/mongoose  tslib express-formidable express-session

// require adminjs
const AdminJS = require("adminjs");
// require express plugin
const AdminJSExpress = require("@adminjs/express");
// require mongoose adapter
AdminJS.registerAdapter(require("@adminjs/mongoose"));
// Import all the project's models
const Users = require("./Schemas/Users"); // replace this for your model
const Product = require("./Schemas/Product"); // replace this for your model
// set up options -- models to use and a route to open dashboard
const adminOptions = {
  resources: [Product, Users], // Put own schemas here
  rootPath: "/admin",
};
// initialize adminjs
const admin = new AdminJS(adminOptions);
// build admin route
const router = AdminJSExpress.buildRouter(admin);
app.use(admin.options.rootPath, router);
// end ADMINJS

//accept certain POST body types

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// redirect to routers

app.use("/users", require("./Routes/Users"));
app.use("/product", require("./Routes/Product"));
app.use("/payment", require("./Routes/payment.route.js"));
app.use("/emails", require("./Routes/email.route.js"));
// app.use("/admin", require("/Routes/admin"));
//images

const path = require("path");
app.use("/assets", express.static(path.join(__dirname, "images")));

app.listen(port, () => console.log(`server listening on ${port}`));
