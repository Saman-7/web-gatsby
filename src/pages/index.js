import * as React from "react";
import Layout from "../components/Layout";
import "../styles/global.css";
import { header, btn } from "../styles/home.module.css";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

const Home = ({ data }) => {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className={btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        {/* <img src="/banner.png" alt="site banner" style={{ maxWidth: "100%" }} /> */}
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  );
};

export default Home;

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
