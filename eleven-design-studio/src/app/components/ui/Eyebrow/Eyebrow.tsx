import type { ReactNode } from 'react';
import styles from './Eyebrow.module.css';

interface EyebrowProps {
  children: ReactNode;
  /** Adds the gold rule on both sides (used with centred headings). */
  centered?: boolean;
  className?: string;
}

export default function Eyebrow({ children, centered = false, className }: EyebrowProps) {
  const classes = [styles.eyebrow, centered && styles['eyebrow--centered'], className]
    .filter(Boolean)
    .join(' ');

  return (
    <p className={classes}>
      <span className={styles.eyebrow__rule} aria-hidden="true" />
      {children}
      {centered && <span className={styles.eyebrow__rule} aria-hidden="true" />}
    </p>
  );
}
