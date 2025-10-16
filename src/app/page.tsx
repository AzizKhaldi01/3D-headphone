"use client"
import { Container } from "@/components/ui/Container";
import { Intro } from "@/components/ui/Intro";
import ClientScroll from "@/components/ClientScroll";
import ScrollingCube from "@/components/ScrollingCube";
import { Testimonials } from "@/components/ui/Testimonials";

export default function Home() {
  return (
    <main>
      <Intro />
      <ScrollingCube />
      <Testimonials />
    </main>
  );
}
