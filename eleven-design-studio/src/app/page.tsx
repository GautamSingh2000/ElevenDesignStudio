export default function Home() {
  return (
    <main>
      <section id="top" />
      <section id="about" />
      <section id="services" />
      <section id="process" />
      {/* Commitment: no id — it gets aria-labelledby="commit-h" on its quote in Step 10 */}
      <section id="work" />
      <section id="clients" />
      <section id="contact" />
    </main>
  );
}
