import { Base } from "javascript-plugin-architecture-with-typescript-definitions";
import { getTexFileContent } from "../utils";

export function getSummary(base: Base) {
    return {
        getSummary: () => {
            if (!base.options.texContent) return;
            let texContent = base.options.texContent;

            const firstPart = texContent.split(String.raw`\begin{resumo} `)[1]
            const summaryText = firstPart.split(String.raw`\end{resumo}`)[0]

            return base.options.mongoDBClient.db("InProLa").collection("plugin_resumo").insertOne({
                summaryText
            })
        }
    }
}