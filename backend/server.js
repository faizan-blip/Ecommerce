const express = require("express");
const connectDB = require("./config/db");
const facebookRouter = require("./controllers/facebookAuth");
const authRouter = require("./controllers/googleAuth");
const passport = require("passport");
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

connectDB();
const app = express();

app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, cb) {
  cb(null, user);
});
passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

app.use("/auth/google", authRouter);
app.use("/auth/facebook", facebookRouter);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server started on port ${PORT}`));
