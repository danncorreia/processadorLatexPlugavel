import * as fs from "fs";

export const getTexFileContent = async (path: string) => {
    let fileContent: string;

    await fs.copyFileSync(path, `./temp/convertedTex.txt`);
    fileContent = await fs.readFileSync('./temp/convertedTex.txt', 'utf8');

    await fs.unlinkSync('./temp/convertedTex.txt');
    return fileContent;
  }