import { useEffect, useState } from "react";
import Navbar from "~/components/Navbar/Navbar";
import Footer from "~/components/Footer/Footer";
import Popup from "~/components/Popup/Popup";
import AOS from "aos";
import "aos/dist/aos.css";
import { ActionFunction, json } from "@remix-run/node";
import nodemailer from "nodemailer";

export const action: ActionFunction = async ({ request }) => {
  const formData = new URLSearchParams(await request.text());
  const name = formData.get("name") || "Anonymous";
  const email = formData.get("email") || "no-reply@example.com";
  const message = formData.get("message") || "";

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: "part.time.business042299@gmail.com",
    subject: `New message from ${name}`,
    text: message || "No message content",
  };

  try {
    await transporter.sendMail(mailOptions);
    return json({ success: true });
  } catch (error) {
    console.error(request);
    return json({ success: false, error: "Failed to send email." });
  }
};

const ContactPage = () => {
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
      <Footer />
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  );
};

export default ContactPage;
