import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Treatments } from "@/components/treatments";
import { Team } from "@/components/team";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Treatments />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
