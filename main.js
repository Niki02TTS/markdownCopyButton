const defaultOptions = {
    iconStyle: 'font-size: 20px; opacity: 0.4;',
    buttonStyle: 'position: absolute; top: 4.5px; right: 6px; cursor: pointer; outline: none;',
    buttonClass: 'copyButton',
    imageFolder: 'https://cdn.jsdelivr.net/npm/@creepyniki/markdown-copy-button/assets/copy.svg',
    imageWidth: '16px',
    imageHeight: '16px'
};

function markdownCopyButton(md, options = {}) {
    options = {...defaultOptions, ...options};
    function renderButton(origRule) {
        options = Object.assign(defaultOptions, options);
        return function (tokens, idx, opts, env, self) {
            const content = tokens[idx].content;
            const origRender = origRule(tokens, idx, opts, env, self);
            if (content.length === 0) {
                return origRender;
            }
            return `
<div class="codeBlock" style="position: relative">
    ${origRender}
<script>
    alert("test");
</script>
    <script>
    console.log('test');
        function copyCode(event) {
        const button = event.currentTarget;
        const codeBlock = button.closest('.codeBlock');
        const code = codeBlock.querySelector('code');
        const text = code.innerText;
        const img = button.querySelector('img');
        const imgSRC = defaultOptions.imageFolder;

        navigator.clipboard.writeText(text).then(() => {
            button.title = 'Copied!';
            img.src = 'https://cdn.jsdelivr.net/npm/@creepyniki/markdown-copy-button/assets/copied.svg';
            setTimeout(() => {
                button.title = 'Copy';
                img.src = imgSRC;
            }, 3000);
        });
    }

   window.copyCode = copyCode;
    
</script>
    <button class="${options.buttonClass}" style="${options.buttonStyle}" title="Copy">
        <span style="${options.iconStyle}">
            <img src="${options.imageFolder}" alt="copyIcon" width="${options.imageWidth}" height="${options.imageHeight}">
        </span>
    </button>
</div>
`;
        }

    }

    md.renderer.rules.code_block = renderButton(md.renderer.rules.code_block || function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
    });

    md.renderer.rules.fence = renderButton(md.renderer.rules.fence || function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
    });
}

export default markdownCopyButton;