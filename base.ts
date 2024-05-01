// import the Base class
import { Base } from "javascript-plugin-architecture-with-typescript-definitions";
import { getTitleTag } from "./pluginGetTitle";
import { getIntroduction } from "./pluginGeIntroduction";

declare module "javascript-plugin-architecture-with-typescript-definitions" {
    namespace Base {
      interface Options {
        texContent?: string;
      }
    }
  }

export const MyBase = Base.withPlugins([getTitleTag, getIntroduction]);