import Hero from "./ui/hero/Hero";
import Navbar from "./ui/navbar/Navbar";
import Section1 from "./ui/section1/Section1";
import Section2 from "./ui/section2/Section2";
import Section3 from "./ui/section3/Section3";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
}
