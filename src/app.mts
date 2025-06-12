import express, { Application, NextFunction, Request, Response } from "express";
import docsRoutes from "./routes/document.routes.mjs";
const app: Application = express();
app.use(express.json());

app.use("/docs", docsRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Google docs alternative is look docs");
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    massage: "404 Page Not Found",
  });
});
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    res.status(500).json({
      massage: "Something was wrong in server",
    });
  }
});
export default app;

export { docsRoutes };
