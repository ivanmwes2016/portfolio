import About from "@/components/About";
import { Hero } from "@/components/Hero";
import { Layout } from "@/components/layout/Layout";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <Layout title="Home">
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Resume />
      </section>
    </Layout>
  );
}
