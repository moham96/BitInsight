var elasticsearch = require("@elastic/elasticsearch");
const config = require("../config");
var client = new elasticsearch.Client(
  config.DEFAULT_ELASTIC_SEARCH_OPTIONS.connection
);
client
  .deleteByQuery({ index: "torrent", query: { match_all: {} } })
  .then((res) => console.log(res));
// client
//   .bulk({
//     index: "torrent",
//     operations: [
//       { update: { _id: "b7092af2ed1775f7d4b27cc7a1a3612adb2224fd" } },
//       {
//         doc: { id: "b7092af2ed1775f7d4b27cc7a1a3612adb2224fd" },
//       },
//     ],
//   })
//   .then((res) => console.log(res.items.forEach((item) => console.log(item))));
