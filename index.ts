import { MyBase } from "./base";
import { getTexFileContent } from "./utils";


async function init() {
  const myBase = new MyBase({
    texContent: await getTexFileContent('./latex/test article/main.tex'),
  });

  console.log('title', myBase.getTitleTag());
  console.log('introduction', myBase.getIntroduction());
}

init();