import React from "react";
import Emoji from "./emoji";
import { graphql, useStaticQuery } from 'gatsby';
import styles from '../styles/footer.module.scss';

const Footer = () =>{
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    author
                }
            }
        }
    `)
    return(
        <footer className={styles.footer}>
            <small>Created with <Emoji symbol="❤️" label="heart"/> by {data.site.siteMetadata.author} © 2019</small>
        </footer>
    )
} 

export default Footer;