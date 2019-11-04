module.exports = {
  siteMetadata: {
    title: "Hideo Daikoku",
    author: "Hideo Neil Daikoku" 
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve : 'gatsby-source-filesystem',
      options : {
        name : 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve : 'gatsby-transformer-remark',
      options : {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options : {
                maxWidth: '750px',
                linkImagesToOriginal: false,
            }
          }
        ]
      }
    }
  ]
}
