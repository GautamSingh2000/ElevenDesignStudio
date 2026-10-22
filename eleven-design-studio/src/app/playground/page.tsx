// TEMPORARY route for checking UI primitives in isolation — delete before launch.
import type { Metadata } from 'next';
import Button from '../components/ui/Button/Button';
import Container from '../components/ui/Container/Container';
import Eyebrow from '../components/ui/Eyebrow/Eyebrow';
import GlassCard from '../components/ui/GlassCard/GlassCard';
import IconTile from '../components/ui/IconTile/IconTile';
import OutlineNumber from '../components/ui/OutlineNumber/OutlineNumber';
import SectionTitle from '../components/ui/SectionTitle/SectionTitle';
import { content } from '@/data/content';
import styles from './playground.module.css';

export const metadata: Metadata = { title: 'Playground', robots: { index: false } };

export default function Playground() {
  const { services, hero, process, about, commitment } = content;
  const goldCard = commitment.cards[1];

  return (
    <main className={styles.playground}>
      <Container className={styles.playground__stack}>
        <p className={styles.playground__label}>Container (dashed outline = content box)</p>
        <div className={styles.playground__box}>max-width var(--container-max), padding-inline var(--gutter)</div>
      </Container>

      <Container className={styles.playground__stack}>
        <p className={styles.playground__label}>Eyebrow + SectionTitle (05-services)</p>
        <div className={styles.playground__heading}>
          <Eyebrow>{services.eyebrow}</Eyebrow>
          <SectionTitle title={services.title} accent={services.titleAccent} />
        </div>
      </Container>

      <Container className={styles.playground__stack}>
        <p className={styles.playground__label}>Eyebrow centered (07-commitment)</p>
        <Eyebrow centered>{commitment.eyebrow}</Eyebrow>
      </Container>

      <Container className={styles.playground__stack}>
        <p className={styles.playground__label}>SectionTitle as=&quot;h1&quot; size=&quot;display&quot; (02-hero)</p>
        <SectionTitle
          as="h1"
          size="display"
          title={
            <>
              {hero.titleLine1}
              <br />
              {hero.titleLine2Lead}
            </>
          }
          accent={hero.titleAccent}
        />
      </Container>

      <Container className={styles.playground__stack}>
        <p className={styles.playground__label}>Button — gold / glass links (02-hero), arrow, native buttons</p>
        <div className={styles.playground__row}>
          <Button href={hero.ctaPrimary.href}>{hero.ctaPrimary.label}</Button>
          <Button href={hero.ctaSecondary.href} variant="glass">
            {hero.ctaSecondary.label}
          </Button>
        </div>
        <div className={styles.playground__row}>
          <Button href="#contact" arrow>
            Submit a Brief
          </Button>
          <Button variant="glass" arrow>
            Native &lt;button&gt;
          </Button>
          <Button type="submit">{content.contact.submit}</Button>
        </div>
      </Container>

      <Container className={styles.playground__stack}>
        <p className={styles.playground__label}>IconTile — all 10 content.json icons (05-services)</p>
        <div className={styles.playground__row}>
          {services.items.map((item) => (
            <IconTile key={item.n} icon={item.icon} />
          ))}
        </div>
      </Container>

      <Container className={styles.playground__stack}>
        <p className={styles.playground__label}>OutlineNumber — step (06-process) and point 28px (04-about)</p>
        <div className={styles.playground__row}>
          {process.steps.map((step) => (
            <OutlineNumber key={step.n}>{step.n}</OutlineNumber>
          ))}
        </div>
        <div className={styles.playground__row}>
          {about.points.map((point) => (
            <OutlineNumber key={point.n} size="point">
              {point.n}
            </OutlineNumber>
          ))}
        </div>
      </Container>

      <Container className={styles.playground__stack}>
        <p className={styles.playground__label}>GlassCard — glass (06-process step) and gold variant</p>
        <ul className={styles.playground__cards}>
          {process.steps.slice(0, 2).map((step) => (
            <GlassCard key={step.n} as="li" className={styles.playground__card}>
              <OutlineNumber>{step.n}</OutlineNumber>
              <h3 className={styles['playground__card-title']}>{step.title}</h3>
              <p className={styles['playground__card-text']}>{step.text}</p>
            </GlassCard>
          ))}
          <GlassCard as="li" variant="gold" className={styles.playground__card}>
            <IconTile icon="box" />
            <h3 className={styles['playground__card-title']}>{goldCard.title}</h3>
            <p className={styles['playground__card-text']}>{goldCard.lead}</p>
          </GlassCard>
        </ul>
      </Container>
    </main>
  );
}
