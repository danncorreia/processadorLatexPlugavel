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

app.get("/availabilityTest", async (req: Request, res: Response) => {
  await new Promise(resolve => setTimeout(resolve, 10000));

  res.send('Test completed!');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});