# Markdown Copy Button Plugin

## Functionality

This plugin adds a copy button to each code block in the markdown content. When the button is clicked, the content of the code block is copied to the clipboard.

## Installation

Install markdown-it and markdown-it-copy-button via npm:

```bash
npm install markdown-it
npm install markdown-it-copy-button
```

## Usage

```javascript
import MarkdownIt from 'markdown-it';
import markdownCopyButton from 'markdown-copy-button';

const md = new MarkdownIt().use(markdownCopyButton, {
    // Options
});
const htmlContent = md.render('## markdown content');
```
## Options
| Option         | type   | Default                                                                         | Beschreibung                         |
|----------------|--------|---------------------------------------------------------------------------------|--------------------------------------|
| `iconStyle`    | String | `'font-size: 20px; opacity: 0.4;'`                                              | style of the copy icon               |
| `buttonStyle`  | String | `'position: absolute; top: 4.5px; right: 6px; cursor: pointer; outline: none;'` | style of the copy button             |
| `buttonClass`  | String | `'copyButton'`                                                                  | class of the copy button             |
| `imageFolder`  | String | `'copy.svg'`                                                                    | path to the icon for the copy button |
| `imageWidth`   | String | `'16px'`                                                                        | width of the button element          |
| `imageHeight`  | String | `'16px'`                                                                        | height of the button element         |
                                                     