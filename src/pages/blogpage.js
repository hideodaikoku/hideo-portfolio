import React from "react";
import Layout from "../components/layout";
import { Link, graphql, useStaticQuery} from "gatsby";
import styles from "../styles/blogpage.module.scss";
import Head from '../components/head';

const BlogPage = () => {
    const posts = useStaticQuery(graphql`
        query{
            allMarkdownRemark{
                edges{
                  node{
                    frontmatter{
                      title
                      date
                    }
                    html
                    excerpt
                    fields {
                        slug
                    }
                  }
                }
              }
        }
    `);
    return(
        <Layout>
            <Head title="Blog"/>
            <h1>Blog</h1>
            <ul className={styles.navList}>
                {
                    posts.allMarkdownRemark.edges.map((edge)=>{
                        return(
                            <Link to={`/blog/${edge.node.fields.slug}`} className={styles.navListItem}>
                                <li className={styles.navListElement}>
                                    <h2>{edge.node.frontmatter.title}</h2>
                                    <span>{edge.node.frontmatter.date}</span>
                                </li>
                            </Link>
                        );
                    })
                }
            </ul>
        </Layout>
    )
}

export default BlogPage;