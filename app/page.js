import Hero from "./ui/hero/Hero";
import Navbar from "./ui/navbar/Navbar";
import Presupuestos from "./ui/presupuestos/Presupuestos";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Presupuestos />
    </main>
  );
}
