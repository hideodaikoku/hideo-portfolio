import React from 'react';
import Layout from '../components/layout';
import { graphql } from "gatsby";
import styles from '../styles/blog.module.scss';
import Head from '../components/head';

export const query = graphql`
    query($slug: String!){
        markdownRemark(fields:{slug: {eq: $slug}}){
            frontmatter{
                title
                date
            }
            html
        }
    }
`

const Blog = (props) =>{
    return(
        <Layout>
            <Head title={props.data.markdownRemark.frontmatter.title}/>
            <h1 className={styles.blogTitle}>{props.data.markdownRemark.frontmatter.title}</h1>
            <span className={styles.date}>{props.data.markdownRemark.frontmatter.date}</span>
            <div dangerouslySetInnerHTML={{ __html : props.data.markdownRemark.html }}></div>
        </Layout>
    )
}

export default Blog;