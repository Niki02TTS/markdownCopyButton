interface CopyButtonOptions {
    iconStyle?: string;
    buttonStyle?: string;
    buttonClass?: string;
    imageFolder?: string;
    imageWidth?: string;
    imageHeight?: string;
}

declare function markdownCopyButton(md: any, options?: CopyButtonOptions): void;

export default markdownCopyButton;