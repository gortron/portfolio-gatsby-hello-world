require("dotenv").config({
  path: ".env",
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `gordy-portfolio`,
        accessToken: `${process.env.PRISMIC_KEY}`,
        schemas: {
          project: require("./src/schemas/project.json"),
        },
        // linkResolver: ({ node, key, value }) => project => `/${project.uid}`,
      },
    },
  ],
}
