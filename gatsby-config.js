
module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-strapi",
      // options: {
      //   apiURL: "http://localhost:1337",
      //   contentTypes: ["category", "user"],
      //   singleTypes: ["test-type"],
      //   queryLimit: 1000,
      // },

      options: {
        apiURL: "https://oii-demobackend.tk",
        contentTypes: ["user"],
        singleTypes: ["homepage", "navigation", "site-setting"],
        queryLimit: 1000,
      },

    },
  ],  
};
