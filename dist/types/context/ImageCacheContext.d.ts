/// <reference types="react" />
interface ImageCacheContextProps {
    serverUrl: string;
    children: React.ReactNode;
}
interface ImageCacheContextValue {
    cache: React.MutableRefObject<Map<string, string>>;
    serverUrl: string;
}
declare const ImageCacheContext: import("react").Context<ImageCacheContextValue>;
declare const ImageCacheProvider: ({ serverUrl, children }: ImageCacheContextProps) => import("react/jsx-runtime").JSX.Element;
export { ImageCacheContext, ImageCacheProvider };
