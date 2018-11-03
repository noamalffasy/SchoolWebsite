const withTypescript = require("@zeit/next-typescript");
const withMDX = require("@zeit/next-mdx")({
  extension: /\.mdx?$/
});

const isProd = process.env.NODE_ENV === "production";

module.exports = withMDX(
  withTypescript({
    assetPrefix: isProd ? "https://noamalffasy.github.io/SchoolWebsite" : "",
    exportPathMap: async function(defaultPathMap) {
      return {
        "/": { page: "/" },
        "/about": { page: "/about" },
        "/events": { page: "/events" },
        "/signup": { page: "/signup" },
        "/login": { page: "/login" },
        "/forgotPassword": { page: "/forgotPassword" },
        "/quality": { page: "/quality" },
        "/highlights/special-group": {
          page: "/highlight",
          query: { id: "special-group" }
        },
        "/highlights/healthcare": {
          page: "/highlight",
          query: { id: "healthcare" }
        },
        "/highlights/cyber": { page: "/highlight", query: { id: "cyber" } },
        "/highlights/data-lookup": {
          page: "/highlight",
          query: { id: "data-lookup" }
        },
        "/highlights/teleprocessing": {
          page: "/highlight",
          query: { id: "teleprocessing" }
        },
        "/events/2018-09-23": { page: "/event", query: { id: "2018-09-23" } },
        "/events/2018-04-18": { page: "/event", query: { id: "2018-04-18" } },
        "/events/2018-04-11": { page: "/event", query: { id: "2018-04-11" } },
        "/events/2018-03-12": { page: "/event", query: { id: "2018-03-12" } },
        "/events/2018-02-06": { page: "/event", query: { id: "2018-02-06" } },
        "/events/2018-01-31-2": {
          page: "/event",
          query: { id: "2018-01-31-2" }
        },
        "/events/2018-01-31": { page: "/event", query: { id: "2018-01-31" } },
        "/events/2018-01-01": { page: "/event", query: { id: "2018-01-01" } },
        "/events/2017-12-31": { page: "/event", query: { id: "2017-12-31" } },
        "/events/2017-12-18": { page: "/event", query: { id: "2017-12-18" } },
        "/events/2017-12-14": { page: "/event", query: { id: "2017-12-14" } },
        "/events/2017-12-12": { page: "/event", query: { id: "2017-12-12" } },
        "/events/2017-12-11": { page: "/event", query: { id: "2017-12-11" } },
        "/events/2017-12-05": { page: "/event", query: { id: "2017-12-05" } },
        "/events/2017-11-30": { page: "/event", query: { id: "2017-11-30" } },
        "/events/2017-11-17": { page: "/event", query: { id: "2017-11-17" } },
        "/events/2017-11-09": { page: "/event", query: { id: "2017-11-09" } },
        "/events/2017-02-10": { page: "/event", query: { id: "2017-02-10" } },
        "/events/2016-09-22": { page: "/event", query: { id: "2016-09-22" } },
        "/events/2016-11-01": { page: "/event", query: { id: "2016-11-01" } },
        "/events/2016-09-11": { page: "/event", query: { id: "2016-09-11" } },
        "/events/2016-09-01": { page: "/event", query: { id: "2016-09-01" } }
      };
    }
  })
);
