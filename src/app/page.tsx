"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./_components/Navbar/Navbar";
import Hero from "./_components/Hero/Hero";
import About from "./_components/About/About";
import Skills from "./_components/Skills/Skills";
import Experience from "./_components/Experience/Experience";
import Work from "./_components/Work/Work";
import Contact from "./_components/Contact/Contact";
import "aos/dist/aos.css";
import "../app/home.css";

export default function Home() {
  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (isDark) {
      document.body.classList.add("dark");
    }

    AOS.init({
      duration: 1000,
      once : false,
      mirror : true,
      easing : "linear"
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="mt-19">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Contact />

        <p className="text-center px-20 py-6 bg-white md:text-[18px] dark:bg-main dark:text-paragraph">
          &copy;2026 | Designed and coded with ❤️️{" "}
          <span>Mohamed Abdelaziem</span>
        </p>
      </div>
    </>
  );
}
