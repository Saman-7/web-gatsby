import React from "react";
import Layout from "../../components/Layout";
import { portfolio, projects } from "../../styles/projects.module.css";
import { Link, graphql } from "gatsby";

const Projects = ({ data }) => {
  console.log(data);

  const projectsData = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;

  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Website l've Created</h3>
        <div className={projects}>
          {projectsData.map((project) => (
            <Link to={project.frontmatter.slug} key={project.id}>
              <div>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like What You See? Email me at: {contact}</p>
      </div>
    </Layout>
  );
};

export default Projects;

// export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          stack
          slug
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;
