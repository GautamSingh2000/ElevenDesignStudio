import type { ReactNode } from 'react';
import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  /** Lead words; may include <br /> for forced line breaks. */
  title: ReactNode;
  /** The one accent word/phrase, rendered in Instrument Serif italic gold. */
  accent?: string;
  as?: 'h1' | 'h2';
  size?: 'h2' | 'display';
  id?: string;
  className?: string;
}

export default function SectionTitle({
  title,
  accent,
  as: Tag = 'h2',
  size = 'h2',
  id,
  className,
}: SectionTitleProps) {
  const classes = [styles['section-title'], size === 'display' && styles['section-title--display'], className]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag id={id} className={classes}>
      {title}
      {accent && (
        <>
          {' '}
          <span className={styles['section-title__accent']}>{accent}</span>
        </>
      )}
    </Tag>
  );
}
