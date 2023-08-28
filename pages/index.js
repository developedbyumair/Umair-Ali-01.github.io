import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import Home from "@/src/components/Home";
import Portfolio from "@/src/components/Portfolio";
import Services from "@/src/components/Services";
import Skill from "@/src/components/Skill";
import Testimonial from "@/src/components/Testimonial";
import ImageView from "@/src/components/popup/ImageView";

const Index = () => {
  return (
    <>
      <ImageView />
      {/* Header */}
      <Header />
      {/* Main */}
      <main className="wrapper">
        {/* Home Section */}
        <Home />
        {/* Services Section */}
        <Services />
        {/* Skill Section */}
        <Skill />
        {/* Work Section */}
        <Portfolio />
        {/* testimonial Section */}
        <Testimonial />
        {/* Contact Section */}
        <Contact />
        {/* Effect */}
        <div className="right-effects" />
        <div className="left-effects" />
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
};
export default Index;
