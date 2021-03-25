import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Quote from "../components/Quote";
import Calculator from "../components/Calculator";
import Testimonials from "../components/Testimonials";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      {/* <Calculator />
      <About />
      <Gallery />
      <Testimonials />
      <Quote /> */}
    </Layout>
  );
};

export default IndexPage;
