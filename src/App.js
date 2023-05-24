import React from "react";
import "../src/assets/scss/App.scss";

import HeroSection from "./componants/Hero/HeroSection";
import ChooseUs from "./componants/chooseus/ChooseUs";
import ProductSection from "./componants/bestproducts/ProductSection";
import Experience from "./componants/experience/Experience";
import MaterialSection from "./componants/material/MaterialSection";
import TestimonialSection from "./componants/Testimonial/TestimonialSection";
import CardContainer from "./componants/Testimonial/CardContainer/CardContainer";
import SliderMain from "./componants/Testimonial/slider/SliderMain";
import Footer from "./componants/common/Footer";


const App = () => {
  return (
    <>
      <HeroSection/>
      <ChooseUs/>
      <ProductSection/>
      <Experience/>
      <MaterialSection/>
      <TestimonialSection/>
     <SliderMain/>
     <Footer/>
    
    </>
  );
};

export default App;
