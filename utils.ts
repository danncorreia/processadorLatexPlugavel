import * as fs from "fs"
import * as path from 'path';
import { google } from "googleapis";
import { GoogleAuth } from "google-auth-library";

export const getTexFileContent = async (path: string) => {
    let fileContent: string;

    if (!await fs.existsSync('./temp')) await fs.mkdirSync('./temp');

    await fs.copyFileSync(path, `./temp/convertedTex.txt`);
    fileContent = await fs.readFileSync('./temp/convertedTex.txt', 'utf8');

    await fs.unlinkSync('./temp/convertedTex.txt');
    return fileContent;
}

export const processTexFilesInLatexFolders = async () => {
    const files = []
    const latexDir = './latex';
    const directories = fs.readdirSync(latexDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    for (const dir of directories) {
        const texContent = await getTexFileContent(path.join(latexDir, dir, 'main.tex'));
        files.push(texContent);
    }

    return files;
}

export const getArticlesFromDrive = async () => {
    const auth = new GoogleAuth({
        scopes: 'https://www.googleapis.com/auth/drive',
    });
    const service = google.drive({version: 'v3', auth});

    const fileId = "1ZfRaMkRKFhMgBlF_s5ruZgA2yffV7Ncw";
    try {
        const file = await service.files.get({
            fileId: fileId,
            alt: 'media',
        });
        console.log(file.status);
        return file.status;
    } catch (err) {
        // TODO(developer) - Handle error
        throw err;
    }
}
