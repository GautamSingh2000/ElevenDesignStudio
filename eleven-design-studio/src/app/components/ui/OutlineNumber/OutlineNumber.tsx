import type { ReactNode } from 'react';
import styles from './OutlineNumber.module.css';

interface OutlineNumberProps {
  children: ReactNode;
  /** step = big process numbers (--fs-step-num); point = 28px about-point numbers. */
  size?: 'step' | 'point';
  className?: string;
}

export default function OutlineNumber({ children, size = 'step', className }: OutlineNumberProps) {
  const classes = [styles['outline-number'], size === 'point' && styles['outline-number--point'], className]
    .filter(Boolean)
    .join(' ');

  return <span className={classes}>{children}</span>;
}
