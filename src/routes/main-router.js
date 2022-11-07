import express from "express";
import { mainController } from "./main-Controller.js"


export const mainRouter = express.Router();

mainRouter.get("/", mainController.homePage)
mainRouter.get("/style.css", mainController.homePageCss)
mainRouter.get("/client.js", mainController.homePageJs)