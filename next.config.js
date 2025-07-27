module.exports = {
  reactStrictMode: true,
  // other configs...
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/_next/static/sitemap.xml",
      },
      {
        source: "/robots.txt",
        destination: "/_next/static/robots.txt",
      },
    ];
  },
};
