import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="text-white mt-20">
        <div
          data-aos="fade-down"
          className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl"
        >
          <h1 className="py-10 text03xl font0bold text-yellow text-center">
            Contact Us
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <IoLocationSharp className="text-5xl" />
              </div>
              <p>Sagrada Famillia Village, Calinan, Philippines</p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <MdEmail className="text-5xl" />
              </div>
              <div>
                <p>info@test.com</p>
                <p>info-test@test.com</p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <FaPhone className="text-5xl" />
              </div>
              <div>
                <p>09123456789 - Owner</p>
                <p>09987654321 - HR</p>
                <p>09123456789 - Whatsapp</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between p-4 items-center">
            <p>@2024 JFT. All rights reserved</p>
            <div className="flex items-center flex-col">
              <a href="/">Privacy Policy</a>
              <a href="/">Terms & Conditions </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
