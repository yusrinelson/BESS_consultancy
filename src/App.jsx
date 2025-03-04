import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import WhyBESS from "./components/WhyBESS";
// import Home from "./pages/Home";

export default function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Skills/>
      <WhyBESS/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}
