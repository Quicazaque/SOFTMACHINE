import express from "express";
import { validateToken } from "../modules/authModule.js"

let router = express.Router();

//localhots:3000/Alquiler

router.get("/", (req, res) => {
  res.send("Alquiler");
});

router.get("/", (req, res) => {
  res.json(validateToken, Alquiler);
});

export default router;
