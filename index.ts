import { MyBase } from "./base";
import {getArticlesFromDrive, getTexFileContent, processTexFilesInLatexFolders} from "./utils";
import express, { Express, Request, Response } from "express";
import { MongoClient, ServerApiVersion } from 'mongodb';

const app: Express = express();
const port = 3000;
const uri = "mongodb+srv://application:87zLn69k0h3rIW5J@inprola.8m0y0z3.mongodb.net/?retryWrites=true&w=majority&appName=InProLa";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.get("/toProcessArticle", async (req: Request, res: Response) => {

  getArticlesFromDrive();
  // const myBase = new MyBase({
  //   texContent: await getTexFileContent('./latex/test article/main.tex'),
  // });
  //
  // res.send(myBase.getTitleTag());
});

app.get("/introduction", async (req: Request, res: Response) => {
  const myBase = new MyBase({})

  processTexFilesInLatexFolders().then((listTexContents) => {
    listTexContents.map((texContent) => {
      const myBase = new MyBase({
        texContent: texContent,
      });
    });
  }).finally(() => {
    res.send(myBase.getIntroduction());
  });
});

app.get("/availabilityTest", async (req: Request, res: Response) => {
res.send('Test completed!');
});

app.listen(port, () => {
  run().catch(console.dir);
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
