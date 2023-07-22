import React from "react";
import Img from "gatsby-image";
import {
  details,
  feature,
  innerHTML,
} from "../styles/projects-details.module.css";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

const ProjectsDetails = ({ data }) => {
  const { html } = data.markdownRemark;
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <div className={details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={feature}>
          <Img fluid={featuredImg.childImageSharp.fluid} />
        </div>
        <div className={innerHTML} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
};

export default ProjectsDetails;

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        stack
        featuredImg {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`;
