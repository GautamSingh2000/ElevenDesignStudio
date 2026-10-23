import type { CSSProperties, ReactNode } from 'react';
import styles from './Marquee.module.css';

interface MarqueeProps {
  items: ReactNode[];
  /** Seconds for one full loop (one copy of the items). */
  speed?: number;
  /** Scroll left → right instead of right → left. */
  reverse?: boolean;
  /** Accessible name. Without it the marquee is decorative and hidden from assistive tech. */
  label?: string;
  className?: string;
}

/*
 * The items are rendered twice in one track; the track slides by -50% (exactly one copy)
 * and loops, so the seam is invisible. The items must be wider than the viewport in total.
 * Spacing between items comes from --marquee-gap (set it on `className`).
 */
export default function Marquee({ items, speed = 30, reverse = false, label, className }: MarqueeProps) {
  const classes = [styles.marquee, reverse && styles['marquee--reverse'], className]
    .filter(Boolean)
    .join(' ');
  const style = { '--marquee-duration': `${speed}s` } as CSSProperties;

  return (
    <div
      className={classes}
      style={style}
      {...(label ? { role: 'marquee', 'aria-label': label } : { 'aria-hidden': true })}
    >
      <div className={styles.marquee__track}>
        {[...items, ...items].map((item, i) => (
          <div
            // Static list rendered twice — index is the only stable key.
            key={i}
            className={styles.marquee__item}
            aria-hidden={label && i >= items.length ? true : undefined}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
