const fs = require("fs");
const Path = require("path");
const tempPath = Path.resolve(__dirname, "..") + "/temp/";
const PDF = require("pdf-creator-node");
const Handlebars = require("handlebars");
const util = require("util");
const formidable = require("formidable");
const readFile = util.promisify(fs.readFile);
const replace = require("./replace");
const provideTemplate = (funder) => {
  return fs.readFileSync(Path.resolve(__dirname, "..") + `/templates/default.html`, "utf8");
};

Handlebars.registerHelper("breaklines", function (text) {
  text = Handlebars.Utils.escapeExpression(text);
  text = text.replace(/•/g, "<a>• ");
  text = text.replace(/૾/g, "</a> ");
  text = text.replace(/(\r\n|\n|\r)/gm, "<br>");
  return new Handlebars.SafeString(text);
});

const Core = {
  read: (file) => {
    return readFile(file, "utf8");
  },
  createPDF: async (content, funder) => {
    try {
      // const data = await Core.read(file)
      const options = { format: "A4", orientation: "portrait", border: "10mm" };
      const name = "Converted_" + Core.randomName();
      const doc = {
        html: provideTemplate(funder),
        data: { data: content },
        path: `${tempPath}${name}.pdf`,
      };
      await PDF.create(doc, options);
      return name;
    } catch (err) {
      console.log(err);
      return "error";
    }
  },
  receiveFile: async (req, res) => {
    return new Promise((resolve, reject) => {
      const form = new formidable.IncomingForm();
      form.parse(req);
      form.on("fileBegin", function (name, file) {
        file.path = tempPath + file.name.substr(0, file.name.lastIndexOf(".")) + ".txt";
      });
      form.on("file", function (name, file) {
        resolve(file.path);
      });
    });
  },
  convert: async (file, funder, res) => {
    const content = await Core.read(file);

    switch (funder) {
      case "fwo": {
        return replace(content, "fwo");
      }
      case "erc": {
        return replace(content, "erc");
      }
      case "h2020": {
        return replace(content, "h2020");
      }
      default:
        res.send("Funder not fount!");
    }
  },
  randomName: () => {
    return Math.random().toString(36).substring(7);
  },
};

module.exports = Core;
