import styles from "./badge.module.scss";
import { Variant } from "@types";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Text to display in the badge */
  text: string;

  /** Visual style of the badge */
  variant?: Variant;

  /** Additional class names for styling */
  className?: string;

  /** Accessibility label for screen readers */
  ariaLabel?: string;
}

export default function Badge({
  text,
  variant = "primary",
  className = "",
  ariaLabel,
  ...rest
}: Readonly<Partial<BadgeProps>>) {
  return (
    <span
      className={`${styles.badge} ${styles[variant]} ${className}`.trim()}
      aria-label={ariaLabel || text}
      {...rest}
    >
      {text}
    </span>
  );
}
