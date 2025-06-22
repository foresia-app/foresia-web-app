import { Hero, Navbar, Features } from "@/components/landing-page";
import { Footer } from "@/components/landing-page/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </>
  );
} 