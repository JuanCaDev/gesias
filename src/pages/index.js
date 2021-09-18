import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Header from "../components/header";
import Hero from "../components/hero";
import BenefitsSection from "../components/benefits-section";
import PriceSection from "../components/price-section";
import SEO from "../components/seo";

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

      <SEO />

      <div className="h-screen bg-opacity-50 bg-gradient-to-b from-blue-light to-white text-blue">
        <Header fluid={data.logo.childImageSharp.fluid} />
        <Hero />
      </div>

      <main className="text-blue">
        <BenefitsSection fluid={data.pc.childImageSharp.fluid} />

        <PriceSection />
      </main>
    </>
  );
};

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "logo-blue-dark.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 122, maxHeight: 60) {
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
