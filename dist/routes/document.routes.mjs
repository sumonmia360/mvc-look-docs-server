"use strict";
// import { docsRoutes } from "../app.mjs";
import express from "express";
import { docsUser } from "../controllers/document.controller.mjs";
const docsRoutes = express.Router();
docsRoutes.get("/user", docsUser);
export default docsRoutes;
