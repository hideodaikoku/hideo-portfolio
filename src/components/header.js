import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import styles from "../styles/header.module.scss"

const Header = () => {
    const data = useStaticQuery(graphql`
        query{
            site {
                siteMetadata {
                    title,
                }
            }
        }
    `)
    return(
        <header className={styles.header}>
            <Link to="/" className={styles.title}>
                <h1>{data.site.siteMetadata.title}</h1>
            </Link>
            <nav>
                <ul className={styles.navList}>
                    <li>
                        <Link className={styles.navItem} activeClassName={styles.activeNavItem} to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.navItem} activeClassName={styles.activeNavItem} to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.navItem} activeClassName={styles.activeNavItem} to="/blogpage">Blog</Link>
                    </li>
                    <li>
                        <Link className={styles.navItem} activeClassName={styles.activeNavItem} to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;