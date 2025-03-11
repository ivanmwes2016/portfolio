import About from "@/components/About";
import Hero from "@/components/Hero";
import Layout from "@/components/layout/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <section id="hero">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
    </Layout>
  );
}
