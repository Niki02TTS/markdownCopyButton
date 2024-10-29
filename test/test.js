import MarkdownIt from "markdown-it";
import markdownCopyButton from "../main.js"

export const markdownToHTML = async (markdownContent) => {
    const md = new MarkdownIt().use(markdownCopyButton, {
    });
    return md.render(markdownContent);
}