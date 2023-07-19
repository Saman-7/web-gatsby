import * as React from "react";
import Layout from "../components/Layout";
import "../styles/global.css";
import { header, btn } from "../styles/home.module.css";
import { Link } from "@reach/router";

const Home = () => {
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
        <img src="/banner.png" alt="site banner" style={{ maxWidth: "100%" }} />
      </section>
    </Layout>
  );
};

export default Home;
