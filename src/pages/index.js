import React from "react"
import { Link,graphql, useStaticQuery }  from "gatsby"
import Layout from "../components/layout";
import Img from 'gatsby-image';
import styles from '../styles/index.module.scss';
import Head from '../components/head';

const Index = () => {
    const data = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "images/zepeto.png" }) {
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
            <Head title="Home"/>
            <h1>Create something. Everyday</h1>
            <h2>Data Visualization, Music Information Retrieval, Full Stack Web Development</h2>
            <div >
              <Img className={styles.imageDiv} 
                  fluid={data.file.childImageSharp.fluid} 
                  alt="hideo"
              />
            </div>
            <p>Want to collaborate? Get in touch <Link to="/contact">here</Link></p>
        </Layout>
    )
}

export default Index