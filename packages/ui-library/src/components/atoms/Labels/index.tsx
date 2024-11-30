import styles from "./label.module.scss";
import { Variant } from "@types";

interface LabelProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /** The text content to display */
  text?: string;

  /** Variant to style the text */
  variant?: Variant;

  /** Children nodes to render inside the text component */
  children?: React.ReactNode;

  /** Additional class names for styling */
  className?: string;
}

export default function Label({
  text,
  variant = "primary",
  children,
  className = "",
  ...rest
}: Readonly<LabelProps>) {
  return (
    <p
      className={`${styles.label} ${styles[variant]} ${className}`.trim()}
      {...rest}
    >
      {text}
      {children}
    </p>
  );
}
