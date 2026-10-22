import type { ReactNode } from 'react';
import styles from './GlassCard.module.css';

interface GlassCardProps {
  children: ReactNode;
  variant?: 'glass' | 'gold';
  as?: 'div' | 'li' | 'article';
  className?: string;
}

export default function GlassCard({ children, variant = 'glass', as: Tag = 'div', className }: GlassCardProps) {
  const classes = [styles['glass-card'], variant === 'gold' && styles['glass-card--gold'], className]
    .filter(Boolean)
    .join(' ');

  return <Tag className={classes}>{children}</Tag>;
}
