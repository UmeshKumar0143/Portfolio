import Image from "next/image";
import Navbar from "./components/Navabar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <div className=" w-full h-screen ">
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
   </div>
  );
}
