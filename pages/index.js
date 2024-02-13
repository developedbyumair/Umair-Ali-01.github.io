import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import Home from "@/src/components/Home";
import Portfolio from "@/src/components/Portfolio";
import Services from "@/src/components/Services";
import Skill from "@/src/components/Skill";

const Index = () => {
  return (
    <>
      {/* <ImageView /> */}
      {/* Header */}
      {/* Main */}
      <main className="wrapper">
        <Header />
        {/* Home Section */}
        <Home />
        {/* Services Section */}
        <Services />
        {/* Skill Section */}
        <Skill />
        {/* Work Section */}
        {/* <Portfolio /> */}
        {/* testimonial Section */}
        {/* <Testimonial /> */}
        {/* Contact Section */}
        <Contact />
        <Footer />
      </main>
    </>
  );
};
export default Index;
