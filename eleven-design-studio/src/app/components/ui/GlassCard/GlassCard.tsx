import type { ReactNode } from 'react';
import styles from './GlassCard.module.css';

interface GlassCardProps {
  children: ReactNode;
  variant?: 'glass' | 'strong' | 'gold';
  as?: 'div' | 'li' | 'article';
  className?: string;
}

export default function GlassCard({ children, variant = 'glass', as: Tag = 'div', className }: GlassCardProps) {
  const classes = [styles['glass-card'], variant !== 'glass' && styles[`glass-card--${variant}`], className]
    .filter(Boolean)
    .join(' ');

  return <Tag className={classes}>{children}</Tag>;
}
