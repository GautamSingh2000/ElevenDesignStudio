import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../ui/Button/Button';
import GlassCard from '../ui/GlassCard/GlassCard';
import IconTile from '../ui/IconTile/IconTile';
import SectionTitle from '../ui/SectionTitle/SectionTitle';
import { content } from '@/data/content';
import styles from './Hero.module.css';

export interface HeroSlide {
  eyebrow: string;
  titleLine1: string;
  titleLine2Lead: string;
  titleAccent: string;
  lead: string;
  image: string;
}

const { hero } = content;
const firstSlide: HeroSlide = {
  eyebrow: hero.eyebrow,
  titleLine1: hero.titleLine1,
  titleLine2Lead: hero.titleLine2Lead,
  titleAccent: hero.titleAccent,
  lead: hero.lead,
  image: hero.image,
};
// Step 16 replaces these copies with 3 real slides (different headline/lead).
const defaultSlides: HeroSlide[] = Array.from({ length: hero.slides }, () => firstSlide);

const pad = (n: number) => String(n).padStart(2, '0');

interface HeroProps {
  slides?: HeroSlide[];
}

export default function Hero({ slides = defaultSlides }: HeroProps) {
  // Only the first slide renders for now; the counter, dots and controls already read slides.length.
  const active = 0;
  const slide = slides[active];
  const { statCard, featureCard, ctaPrimary, ctaSecondary } = hero;

  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <Image src={slide.image} alt="" fill priority sizes="100vw" className={styles.hero__image} />
      <div className={styles.hero__overlay} aria-hidden="true" />
      <div className={styles.hero__fade} aria-hidden="true" />
      <div className={styles.hero__glow} aria-hidden="true" />

      <div className={styles.hero__inner}>
        <div className={styles.hero__copy}>
          <p className={styles.hero__eyebrow}>
            <span className={styles['hero__eyebrow-dot']} aria-hidden="true" />
            {slide.eyebrow}
          </p>
          <SectionTitle
            as="h1"
            size="display"
            id="hero-title"
            title={
              <>
                {slide.titleLine1}
                <br />
                {slide.titleLine2Lead}
              </>
            }
            accent={slide.titleAccent}
          />
          <p className={styles.hero__lead}>{slide.lead}</p>
          <div className={styles.hero__ctas}>
            <Button label={ctaPrimary.label} href={ctaPrimary.href} className={styles.hero__cta} />
            <Button
              label={ctaSecondary.label}
              href={ctaSecondary.href}
              variant="glass"
              className={styles.hero__cta}
            />
          </div>
          {/* Visual only until Step 16 turns the dots into labelled buttons. */}
          <div className={styles.hero__dots} aria-hidden="true">
            {slides.map((_, i) => (
              <span
                key={i}
                className={[styles.hero__dot, i === active && styles['hero__dot--active']].filter(Boolean).join(' ')}
              />
            ))}
          </div>
        </div>

        <div className={styles.hero__aside}>
          <span className={styles.hero__ring} aria-hidden="true" />

          <GlassCard variant="strong" className={styles.hero__stat}>
            <div className={styles['hero__stat-head']}>
              <p className={styles['hero__stat-label']}>{statCard.label}</p>
              <span className={styles.hero__badge}>{statCard.badge}</span>
            </div>
            <p className={styles['hero__stat-value']}>
              {statCard.value}
              <span className={styles['hero__stat-suffix']}>{statCard.suffix}</span>
            </p>
            <div className={styles.hero__avatars} aria-hidden="true">
              {statCard.initials.map((initials) => (
                <span key={initials} className={styles.hero__avatar}>
                  {initials}
                </span>
              ))}
            </div>
          </GlassCard>

          <div className={styles.hero__feature}>
            <IconTile icon="box" />
            <div>
              <p className={styles['hero__feature-title']}>{featureCard.title}</p>
              <p className={styles['hero__feature-text']}>{featureCard.text}</p>
            </div>
          </div>

          {/* Step 16 wires prev/next to the slider state. */}
          <div className={styles.hero__controls}>
            <button type="button" className={styles.hero__arrow} aria-label="Previous slide">
              <ChevronLeft className={styles['hero__arrow-icon']} strokeWidth={1.9} aria-hidden="true" />
            </button>
            <button
              type="button"
              className={`${styles.hero__arrow} ${styles['hero__arrow--next']}`}
              aria-label="Next slide"
            >
              <ChevronRight className={styles['hero__arrow-icon']} strokeWidth={1.9} aria-hidden="true" />
            </button>
            <p className={styles.hero__counter}>
              {pad(active + 1)} <span className={styles['hero__counter-total']}>/ {pad(slides.length)}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
