import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import ProductsGrids from "../components/productsgrids";
import TestimonialSection from "../components/TestimonialSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/footer";
export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <ProductsGrids />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
