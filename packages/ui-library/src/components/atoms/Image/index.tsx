import { useState } from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Source URL of the image */
  src: string;

  /** Fallback URL if the image fails to load */
  fallbackSrc: string;

  /** Additional class names for styling */
  className?: string;
}

export default function Image({
  src,
  fallbackSrc,
  className = "",
  alt = "",
  ...rest
}: Readonly<ImageProps>) {
  const [currentSrc, setCurrentSrc] = useState<string>(src);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    }
  };
  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={handleError}
      {...rest}
    />
  );
}