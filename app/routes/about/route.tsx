import { useEffect, useState } from "react";
import Navbar from "~/components/Navbar/Navbar";
import About from "~/components/About/About";
import Footer from "~/components/Footer/Footer";
import Popup from "~/components/Popup/Popup";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });

    AOS.refresh();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <About />
      <Footer />
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  );
};

export default AboutPage;
