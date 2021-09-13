const express = require("express");
const Router = express.Router();
const Core = require("../core");
const Path = require("path");

Router.post("/convert/:type", async (req, res) => {
  const funder = req.params["type"].toLowerCase();
  const uploadedFile = await Core.receiveFile(req, res);
  const convertedFile = await Core.convert(uploadedFile, funder, res);
  const result = await Core.createPDF(convertedFile, funder);
  Core.delete(uploadedFile);
  result == "error" ? res.status(500).send("Error!") : res.send(result);
});

Router.get("/download/:filename", (req, res) => {
  const file = Path.resolve(__dirname, "..") + "/temp/" + req.params["filename"];
  res.download(file, () => {
    Core.delete(file);
  });
});

module.exports = Router;
