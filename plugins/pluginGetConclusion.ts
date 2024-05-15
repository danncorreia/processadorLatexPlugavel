import { Base } from "javascript-plugin-architecture-with-typescript-definitions";
import { getTexFileContent } from "../utils";

export function getConclusion(base: Base) {
  return {
      getConclusion: () => {
        if (!base.options.texContent) return;
        let texContent = base.options.texContent;

        const firstPart = texContent.split(String.raw`\section{Conclusões e Trabalhos Futuros}`)[1]
        const conclusionText = firstPart.split(String.raw`\section`)[0]

        return base.options.mongoDBClient.db("inprola").collection("plugin_conclusao").insertOne({
            conclusionText
        })
    }
  }
}