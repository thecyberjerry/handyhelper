"use client"
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import CEO from "./_components/CEO";
import Team from "./_components/Team";
import Filler1 from "./_components/Filler1";
import TechStack from "./_components/TechStack";
import Accordions from "./_components/Accordions";
import Counter from "./_components/Counter";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CEO />
      <Team />
      <Filler1 />
      <TechStack />
      <Accordions />
      <Counter />
    </>
  );
}