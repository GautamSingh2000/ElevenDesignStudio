'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, X } from 'lucide-react';
import Button from '../ui/Button/Button';
import { content } from '@/data/content';
import styles from './NavBar.module.css';

// Not in content.json — label/target from BUILD_PLAN Step 4.
const CTA = { label: 'Submit a Brief', href: '#contact' };
const DRAWER_ID = 'navbar-drawer';

export default function NavBar() {
  const { site, nav } = content;
  const [open, setOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    drawerRef.current?.querySelector('a')?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setOpen(false);
      burgerRef.current?.focus();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className={styles.navbar}>
      <div className={styles.navbar__bar}>
        <a href="#top" className={styles.navbar__logo} aria-label={`${site.name} — home`}>
          <Image
            src={site.logoLight}
            alt={site.name}
            width={708}
            height={252}
            priority
            className={styles['navbar__logo-img']}
          />
        </a>

        <nav className={styles.navbar__nav} aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.navbar__link}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.navbar__actions}>
          <Button label={CTA.label} href={CTA.href} size="sm" />
          <button
            ref={burgerRef}
            type="button"
            className={styles.navbar__burger}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls={DRAWER_ID}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X className={styles['navbar__burger-icon']} strokeWidth={1.9} aria-hidden="true" />
            ) : (
              <svg
                className={`${styles['navbar__burger-icon']} ${styles['navbar__burger-lines']}`}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M4 8h16M10 16h10" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Sibling of the bar, not a child: nested backdrop-filters only blur inside their parent. */}
      <nav
          ref={drawerRef}
        id={DRAWER_ID}
        className={[styles.navbar__drawer, open && styles['navbar__drawer--open']].filter(Boolean).join(' ')}
        aria-label="Menu"
      >
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={styles['navbar__drawer-link']}
            onClick={() => setOpen(false)}
          >
            <span className={styles['navbar__drawer-number']}>{item.n}</span>
            <span className={styles['navbar__drawer-label']}>{item.label}</span>
            <ArrowRight className={styles['navbar__drawer-arrow']} strokeWidth={1.9} aria-hidden="true" />
          </a>
        ))}
      </nav>
    </header>
  );
}
