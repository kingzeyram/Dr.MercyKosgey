
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Whyus from "./sections/Whyus";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen  bg-[#FAF8F5]" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <Navbar />
      <main className="flex-grow  w-full pt-[80px] md:pt-[120px] lg:pt-[120px]">
        <Hero />
        <About />
        <Whyus />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App