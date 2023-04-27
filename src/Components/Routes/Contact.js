import React from "react";
import Header from "../Header";
import ContactImg from "../../assets/contactus.jpg";
import Footer from "../Footer";
import FrontPage from "../FrontPage";
import ContactForm from "../ContactForm";

function Contact() {
  return (
    <>
      <Header />
      <FrontPage
        cName="he import AboutImg
    "
        heroImg={ContactImg}
        title="contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;
