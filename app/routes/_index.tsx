import { useEffect, useState } from "react";
import { type MetaFunction } from "@remix-run/node";
import Hero from "~/components/Hero/Hero";
import Banner from "~/components/Banner/Banner";
import Navbar from "~/components/Navbar/Navbar";
import WhyChoose from "~/components/WhyChoose/WhyChoose";
import About from "~/components/About/About";
import Footer from "~/components/Footer/Footer";
import Popup from "~/components/Popup/Popup";
import Dishes from "~/components/Dishes/Dishes";
import AOS from "aos";
import "aos/dist/aos.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Subang Tribu" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
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
      <Hero />
      {/* <Banner /> */}
      <Dishes setShowPopup={setShowPopup} />
      <WhyChoose />
      <About />

      <Footer />
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  );
}
