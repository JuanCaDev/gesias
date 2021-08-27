import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Header from "../components/header";
import Hero from "../components/hero";
import BenefitsSection from "../components/benefits-section";
import PriceSection from "../components/price-section";

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="bg-blue-400 bg-opacity-50">
        <Header />
        <Hero fluid={data.hero.childImageSharp.fluid} />
      </div>

      <main>
        <BenefitsSection fluid={data.pc.childImageSharp.fluid} />

        <PriceSection />
      </main>
    </>
  );
};

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "hero.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 700, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pc: file(relativePath: { eq: "pc.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
