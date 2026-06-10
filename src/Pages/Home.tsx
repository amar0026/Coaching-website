import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";

import Footer from "../Components/Footer";
import Testimonial from "../Components/Testimonial";
import CTAStats from "../Components/Cta";
import Categories from "../Components/Categories";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Categories/>
      <CTAStats/>
      <Testimonial/>
      <Footer />
    </>
  );
};

export default Home;