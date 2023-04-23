import React from "react";

import Navbar from "../Nabar";
import Footer from "../Footer";
import HeroImg2 from "../HeroImg2";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="ABOUT."
        text="Some of
      my most recent works"
      />
      <Footer />
    </div>
  );
};

export default About;
