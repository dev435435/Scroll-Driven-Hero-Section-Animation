import Hero from "../components/Hero";

export default function Page() {
  return (
    <main>
      <Hero />
      <footer className="px-[6vw] py-16 text-sm text-ink/70">
        Built with Next.js, Tailwind CSS and GSAP ScrollTrigger.
      </footer>
    </main>
  );
}
