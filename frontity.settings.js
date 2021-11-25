const settings = {
  name: "my-first-frontity-project",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "KSU Bioinformatics Lab",
      description: "AI/ML Lab @ Kennesaw State University",
    },
  },
  packages: [
    {
      name: "@frontity/twentytwenty-theme",
      state: {
        theme: {
          menu: [
            ["News", "/news"],
            ["Research", "/research/"],
            ["People", "/people/"],
            ["Publications", "/publications/"],
            ["Supplements", "/supplements/"],
            ["Software", "/software/"],
            ["Positions", "/positions/"],
            ["Galleries", "/galleries/"],
            ["Contact", "/contact/"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://test.frontity.org",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
