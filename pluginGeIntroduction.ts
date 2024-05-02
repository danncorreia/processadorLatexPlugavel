import { Base } from "javascript-plugin-architecture-with-typescript-definitions";
import { getTexFileContent } from "./utils";

export function getIntroduction(base: Base) {
  return {
    getIntroduction: () => {
        if (!base.options.texContent) return;
        let texContent = base.options.texContent;

        const firstPart = texContent.split(String.raw`\section{Introduction}`)[1]
        
        return firstPart.split(String.raw`\section`)[0]
    }
  }
}