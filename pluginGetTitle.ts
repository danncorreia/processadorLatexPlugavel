import { Base } from "javascript-plugin-architecture-with-typescript-definitions";

export function getTitleTag(base: Base) {
  return {
    getTitleTag: () => {
      if (!base.options.texContent) return;
      let texContent = base.options.texContent;

      const firstPart = texContent.split(String.raw`\title{`)[1]
      
      return firstPart.split('}')[0]
    }
  }
}