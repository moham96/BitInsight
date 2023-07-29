﻿const config = {
  DEFAULT_CRAWLER_OPTIONS: {
    address: "0.0.0.0",
    port: 6881,
    tableMaxSize: 256,
    dhtAnnouncingBootstrap: 1381,
    dhtAnnouncingTable: 1511,
    BEP51Mode: false,
    verticalAttackMode: false,
    verticalAttackNrNodes: 8,
    BOOTSTRAP_NODES: [
      ["router.bittorrent.com", 6881],
      ["dht.transmissionbt.com", 6881],
    ],
  },

  DEFAULT_PEER_DISCOVERY_OPTIONS: {
    port: 6880,
    timeout: 7 * 1000, //for rapid crawling put 2
    timeout_initial: 5 * 1000,
    dht: false,
  },

  DEFAULT_METADATA_FETCHER_OPTIONS: {
    timeout: 8 * 1000,
    socketTimeout: 5000,
    tracker: true,
    torcacheURL: "http://itorrents.org/torrent/",
  },

  DEFAULT_ELASTIC_SEARCH_OPTIONS: {
    connection: {
      node: "http://localhost:9200",
    },
    batchSizeDHT: 2,
    batchSizeTorrent: 2,
  },
};

module.exports = config;
