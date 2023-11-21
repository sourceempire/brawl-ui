import { createContext, useRef } from 'react';

interface ImageCacheContextProps {
  serverUrl: string;
  children: React.ReactNode;
}

interface ImageCacheContextValue {
  cache: React.MutableRefObject<Map<string, string>>;
  serverUrl: string;
}

const ImageCacheContext = createContext<ImageCacheContextValue>({
  cache: { current: new Map() } as React.MutableRefObject<Map<string, string>>,
  serverUrl: '',
});

const ImageCacheProvider = ({ serverUrl, children }: ImageCacheContextProps) => {
  const cache = useRef<Map<string, string>>(new Map());
  return <ImageCacheContext.Provider value={{ cache, serverUrl }}>{children}</ImageCacheContext.Provider>;
};

export { ImageCacheContext, ImageCacheProvider };
