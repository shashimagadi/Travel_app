import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/9.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        // heroImg="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
      />
      <Footer />
    </>
  );
}

export default Service;
