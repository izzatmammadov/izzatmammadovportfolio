import About from "@/shared/components/About";
import Carousel from "@/shared/components/Carousel";
import Contact from "@/shared/components/Contact";
import Experience from "@/shared/components/Experience";
import Footer from "@/shared/components/Footer";
import Header from "@/shared/components/Header";
import Scroll from "@/shared/components/Scroll";

export default function Home() {
  return (
    <>
      <Scroll />
      <Header />
      <About />
      <Carousel />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
