import React from "react";
import Layout from "../components/Layout";
import { about } from "../styles/about.module.css";

const About = () => {
  return (
    <Layout>
      <div className={about}>
        <h1>The fastest frontend</h1>
        <h1>for the modern web</h1>
        <p>
          With Gatsby 3.0 for React, create blazing fast web experiences that
          integrate your favorite services and content. Build e-commerce sites,
          landing pages, blogs and more in minutes.
        </p>
        <h1>Develop, Build, Preview, Deploy.</h1>
        <h1>In the time it takes to create a mock up.</h1>
        <p>
          Go from idea to production in literal minutes with a 10x developer
          experience. Gatsby is built on popular, proven tech like React and
          GraphQL, has loads of tutorials and starter templates, and over 2500
          plugins that can help integrate all of your favorite web services.
        </p>
        <h1>Gatsby is unbelievably fast & smooth.</h1>
        <h1>Everything just feels...there.</h1>
        <p>
          Gatsby loads only critical 1 parts of the page, exactly when the
          visitor needs it, and not a second sooner. Once loaded, Gatsby
          prefetches resources 2 for other pages so that clicking on the site
          feels buttery smooth and responsive. Everything is statically
          generated at runtime - so your site loads as fast as possible.
        </p>
      </div>
    </Layout>
  );
};

export default About;
