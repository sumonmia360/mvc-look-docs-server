import { Request, Response } from "express";

const docsUser = (req: Request, res: Response) => {
  res.send("test ting ");
};

export { docsUser };
