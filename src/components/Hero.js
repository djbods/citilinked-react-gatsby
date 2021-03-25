import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

const query = graphql`
  {
    storage: file(relativePath: { eq: "storage.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Hero = () => {
  const { storage } = useStaticQuery(query);
  return (
    <header className="hero">
      <Image fluid={storage.childImageSharp.fluid} className="hero-person" />
    </header>
  );
};

export default Hero;
