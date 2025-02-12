import About from "@/shared/components/About";
import Carousel from "@/shared/components/Carousel";
import Contact from "@/shared/components/Contact";
import Experience from "@/shared/components/Experience";
import Footer from "@/shared/components/Footer";
import Header from "@/shared/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Carousel />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
