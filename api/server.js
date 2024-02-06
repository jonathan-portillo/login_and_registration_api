const express = require("express");
const server = express();
const cors = require("cors");

server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.json({ api: "Our  login API is up and running" });
});

module.exports = server;
