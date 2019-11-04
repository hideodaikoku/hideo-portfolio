import React from "react";
import Layout from "../components/layout";
import Head from '../components/head';

const Contact = () => {
    return(
        <Layout>
            <Head title="Contact"/>
            <h1>Get in touch.</h1>
            <p>You can follow me on twitter <a href="http://twitter.com./hideodaikoku" rel="noopener noreferrer" target="_blank">@hideodaikoku</a></p>
            <p>Email inquiries can be sent to info [at] hideodaikoku.com </p>
        </Layout>
    )
}

export default Contact;