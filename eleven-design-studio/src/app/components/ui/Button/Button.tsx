import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './Button.module.css';

type Variant = 'gold' | 'glass';

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  /** Adds a trailing arrow icon. */
  arrow?: boolean;
  className?: string;
}

type AnchorProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & { href: string };
type NativeButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & { href?: undefined };

export type ButtonProps = AnchorProps | NativeButtonProps;

export default function Button(props: ButtonProps) {
  const { children, variant = 'gold', arrow = false, className, ...rest } = props;
  const classes = [styles.button, styles[`button--${variant}`], className].filter(Boolean).join(' ');
  const content = (
    <>
      {children}
      {arrow && <ArrowRight className={styles.button__arrow} strokeWidth={1.9} aria-hidden="true" />}
    </>
  );

  if (rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  const { type = 'button', ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={type} className={classes} {...buttonRest}>
      {content}
    </button>
  );
}
