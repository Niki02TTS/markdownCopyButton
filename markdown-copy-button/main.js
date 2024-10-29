const defaultOptions = {
    iconStyle: 'font-size: 21px; opacity: 0.4;',
    buttonStyle: 'position: absolute; top: 7.5px; right: 6px; cursor: pointer; outline: none;',
    buttonClass: '',
    imageFolder: 'image.svg',
    imageWidth: '16px',
    imageHeight: '16px'
};

export function renderButton(origRule, options) {
    options = Object.assign(defaultOptions, options);
    return `
<div style="position: relative">
    <button class="copybutton ${options.buttonClass}" style="${options.buttonStyle}" title="Copy">
        <span style="${options.iconStyle}">
            <img src="${options.imageFolder}" alt="copyIcon" width="${options.imageWidth}" height="${options.imageHeight}">
        </span>
    </button>
</div>
`;
}

export default function markdownCopyButton(md, options = {}) {
    options = { ...defaultOptions, ...options };

    const defaultFence = md.renderer.rules.fence || function(tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
    };

    // md.renderer.rules.code_block = renderButton(md.renderer.rules.code_block, options);
    // md.renderer.rules.fence = renderButton(md.renderer.rules.fence, options);
    md.renderer.rules.fence = (tokens, idx, opts, env, self) => {
        const token = tokens[idx];
        const content = token.content;
        console.log(token)
        console.log(content)
        console.log(opts)
        console.log(env)
        console.log(self)
        const buttonHTML = renderButton(options);
        const origRule = defaultFence(tokens, idx, opts, env, self);
        return buttonHTML + origRule;
    };
}