// const express = require("express");
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from my ass");

// function handleProfile(req, res) {
//   res.send("You are on my profile");
// }

const handleProfile = (req, res) => res.send("You are on my profile");
//arrow function

// const betweenHome = (req, res, next) => {
//   console.log("Between");
//   next();
// };

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
//helmet은 보안을 위한 것
app.use(morgan("dev"));

app.get("/", handleHome);

app.get("/profile", handleProfile);
// app.use(betweenHome);
// //모든 url에 아래에 있으므로(순서 중요) 모든 url에 대한 middleware실행
app.listen(PORT, handleListening);
