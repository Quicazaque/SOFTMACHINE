import express from "express";
import login from "../controllers/loginController.js"

const loginRouter = express.Router();

//  localhots:3000
loginRouter.post("/", login);

export default loginRouter;