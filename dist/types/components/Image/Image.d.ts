type BaseProps = {
    alt?: string;
    className?: string;
};
type ImageIdProps = {
    imageId: string;
    src?: never;
};
type SrcProps = {
    imageId?: never;
    src: string;
};
type ImageProps = BaseProps & (ImageIdProps | SrcProps);
export declare const Image: (props: ImageProps) => import("react/jsx-runtime").JSX.Element;
export {};
