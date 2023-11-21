import { useContext, useEffect, useState } from "react";
import { useGet } from "@sourceempire/brawl-fetch";
import { ImageCacheContext } from "../../context/ImageCacheContext";
import styles from "./Image.module.css";

import errorPlaceholder from "../../assets/images/error-placeholder.jpg";

type BaseProps = {
  alt?: string;
  className?: string;
};

type ImageIdProps = { imageId: string; src?: never };
type SrcProps = { imageId?: never; src: string };

type ImageProps = BaseProps & (ImageIdProps | SrcProps);

export const Image = (props: ImageProps) => {
  const { cache, serverUrl } = useContext(ImageCacheContext);
  const [src, setSrc] = useState<string | null>(props.src ?? null);

  const [getImage, { state }] = useGet<{ imageUrl: string }>(`${serverUrl}/image`, {
    onComplete: (data: { imageUrl: string }) => {
      if (!props.imageId) return;

      cache.current.set(props.imageId, data.imageUrl);
      setSrc(data.imageUrl);
    },
  });

  useEffect(() => {
    if (!props.imageId) return;

    const url = cache.current.get(props.imageId);
    if (url) {
      setSrc(url);
    } else {
      getImage({ params: { imageId: props.imageId } });
    }
  }, [props.imageId, cache, getImage]);

  if (state.status === "loading" || src === null) {
    return <div className={`${styles.image} ${props.className} loading-placeholder`} />;
  }

  if (state.status === "error") {
    return <img src={errorPlaceholder} alt="error" className={`${styles.image} ${props.className} error-placeholder`} />;
  }

  const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = errorPlaceholder;
    event.currentTarget.style.objectFit = "cover";
    event.currentTarget.classList.add("error-placeholder")
  };

  return <img src={src} alt={props.alt} className={`${styles.image} ${props.className}`} onError={handleError} />;
};
