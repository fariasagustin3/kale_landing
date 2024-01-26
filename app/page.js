import Hero from "./ui/hero/Hero";
import Navbar from "./ui/navbar/Navbar";
import Section1 from "./ui/section1/Section1";
import Section2 from "./ui/section2/Section2";
import Section3 from "./ui/section3/Section3";
import Section4 from "./ui/section4/Section4";
import Section5 from "./ui/section5/Section5";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </main>
  );
}
