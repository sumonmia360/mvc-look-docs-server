"use strict";
import express from "express";
import docsRoutes from "./routes/document.routes.mjs";
const app = express();
app.use(express.json());
app.use("/docs", docsRoutes);
app.get("/", (req, res) => {
    res.send("Welcome to the Google docs alternative is look docs");
});
app.use((req, res, next) => {
    res.status(404).json({
        massage: "404 Page Not Found",
    });
});
app.use((error, req, res, next) => {
    if (error) {
        res.status(500).json({
            massage: "Something was wrong in server",
        });
    }
});
export default app;
export { docsRoutes };
