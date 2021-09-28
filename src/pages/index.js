import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Header from "../components/header";
import Hero from "../components/hero";
import PriceSection from "../components/price-section";
import SEO from "../components/seo";
import SliderSection from "../components/slider-section";
import WeWorkSection from "../components/we-work-section";
import Footer from "../components/footer";

const IndexPage = ({ data }) => {
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

      <div
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(108, 86, 202, .3), rgba(33, 158, 188, .3), rgba(255, 255, 255, .3))",
        }}
        className="h-screen"
      >
        <Header fluid={data.logo.childImageSharp.fluid} />
        <Hero fluid={data.person.childImageSharp.fluid} />
      </div>

      <main className="text-blue">
        <SliderSection fluid={data.pc.childImageSharp.fluid} />
      
        <WeWorkSection />

        <PriceSection />

        {/* <ContactSection /> */}
        
        <Footer />
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
    },
    person: file(relativePath: { eq: "person.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 320, maxHeight: 850) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    },
    pc: file(relativePath: { eq: "pc.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 500, maxHeight: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    slider1: file(relativePath: { eq: "slider-1.png" }) {
      id
      childImageSharp {
        gatsbyImageData(
          width: 781
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;

export default IndexPage;
