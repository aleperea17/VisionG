import { About } from "@/components/sections/About";
import { Cases } from "@/components/sections/Cases";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ForWho } from "@/components/sections/ForWho";
import { Hero } from "@/components/sections/Hero";
import { Methodology } from "@/components/sections/Methodology";
import { Pricing } from "@/components/sections/Pricing";
import { Problem } from "@/components/sections/Problem";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Solution } from "@/components/sections/Solution";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <Process />
      <ForWho />
      <Cases />
      <About />
      <Methodology />
      <FAQ />
      <Pricing />
      <FinalCTA />
      <ContactForm />
    </>
  );
}
