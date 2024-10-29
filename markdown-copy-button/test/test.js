import MarkdownIt from "markdown-it";
import HighlightJS from "highlight.js";
import markdownCopyButton from "../main.js"

export const markdownToHTML = async (markdownContent) => {
    const md = new MarkdownIt().use(markdownCopyButton, {
        iconStyle: 'font-size: 20px; opacity: 0.4;',
    });
    return md.render(markdownContent);
}