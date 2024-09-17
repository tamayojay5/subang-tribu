import { useEffect, useState } from "react";
import Navbar from "~/components/Navbar/Navbar";
import Dishes from "~/components/Dishes/Dishes";
import Footer from "~/components/Footer/Footer";
import Popup from "~/components/Popup/Popup";
import AOS from "aos";
import "aos/dist/aos.css";

const DishesPage = () => {
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
      <Dishes setShowPopup={setShowPopup} />
      <Footer />
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  );
};

export default DishesPage;
