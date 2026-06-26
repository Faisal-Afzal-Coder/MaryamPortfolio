import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import SuccessGallery from "@/components/SuccessGallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Online Biology & Chemistry Tutor",
  description:
    "Maryam Afzal provides concept-driven online tutoring for Biology and Chemistry across O-Level, A-Level, IGCSE, and GCSE curriculums.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Services />
        <SuccessGallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
