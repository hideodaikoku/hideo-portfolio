import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import Img from 'gatsby-image';
import Head from '../components/head';

const About = () => {
    const data = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "images/me.jpg" }) {
          childImageSharp {
            fluid {
                base64
				tracedSVG
				aspectRatio
				src
				srcSet
				srcWebp
				srcSetWebp
				sizes
				originalImg
				originalName
				presentationWidth
				presentationHeight
            }
          }
        }
      }
    `);
    return(
        <Layout>
            <Head title="About"/>
            <h1>About Me</h1>
            <p>I'm a graphic designer turned web developer. I study Music Information Retrieval at Keio University.</p>
            <p>I also have a tiny little record label called Print Room Productions for indie musicians</p>
            <p>Get in touch <Link to="/contact">here</Link></p>
            <Img
                fluid={data.file.childImageSharp.fluid} 
                alt="hideo"
            />
        </Layout>
    )
}

export default About;