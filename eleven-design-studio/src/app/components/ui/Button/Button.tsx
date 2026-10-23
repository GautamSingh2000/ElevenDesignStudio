import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./Button.module.css";

type ButtonProps = {
  label: string;
  href: string;
  /** "gold": gradient pill, ink text (primary). "glass": frosted pill, white text. */
  variant?: "gold" | "glass";
  /** Adds a trailing arrow icon. */
  arrow?: boolean;
  /** Stretch to the parent width. */
  fullWidth?: boolean;
  className?: string;
};

export default function Button({
  label,
  href,
  variant = "gold",
  arrow = false,
  fullWidth = false,
  className,
}: ButtonProps) {
  const classes = [
    styles.button,
    variant !== "gold" && styles[`button--${variant}`],
    fullWidth && styles["button--full"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link href={href} className={classes}>
      <span className={styles.button__label}>{label}</span>
      {arrow && (
        <span className={styles.button__arrow} aria-hidden="true">
          <ArrowRight className={styles.button__icon} strokeWidth={1.9} />
        </span>
      )}
    </Link>
  );
}
