import MarkdownIt from "markdown-it";
import HighlightJS from "highlight.js";

export const markdownToHTML= async (markdownContent) => {
    const md = new MarkdownIt({
            highlight: function (str, lang) {
                if (lang && HighlightJS.getLanguage(lang)) {
                    try {
                        return '<pre><code class="hljs">' +
                            HighlightJS.highlight(str, { language: lang, ignoreIllegals: true }).value +
                            '</code></pre>';
                    } catch (__) { }
                } else {
                    try {
                        return '<pre><code class="hljs">' +
                            HighlightJS.highlightAuto(str).value +
                            '</code></pre>';
                    } catch (__) { }
                }
                return '<pre><code class="hljs">' + md.utils.escapeHtml(str) + '</code></pre>';
            }
    });
    return md.render(markdownContent);
}