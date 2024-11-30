import styles from "./button.module.scss";
import { Variant } from "@types";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Text displayed inside the button */
  text?: string;

  /** Visual style of the button */
  variant?: Variant;

  /** Additional content inside the button (e.g., icons) */
  children?: React.ReactNode;

  /** Additional class names for styling */
  className?: string;
}

export const Button = ({
  text,
  variant = "primary",
  children,
  className = "",
  ...rest
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${styles[variant]} ${className}`.trim()}
      {...rest}
    >
      {text && <span>{text}</span>}
      {children}
    </button>
  );
};

export default Button;
