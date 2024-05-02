import { MyBase } from "./base";
import { getTexFileContent } from "./utils";
import express, { Express, Request, Response } from "express";
const app: Express = express();
const port = 3000;

app.get("/title", async (req: Request, res: Response) => {
  const myBase = new MyBase({
    texContent: await getTexFileContent('./latex/test article/main.tex'),
  });

  res.send(myBase.getTitleTag());
});

app.get("/introduction", async (req: Request, res: Response) => {
  const myBase = new MyBase({
    texContent: await getTexFileContent('./latex/test article/main.tex'),
  });

  res.send(myBase.getIntroduction());
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});