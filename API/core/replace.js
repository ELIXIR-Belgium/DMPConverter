const data = require("../config/data");
let answers = {};

const replace = async (content, funder) => {
  const parsed = isJson(content);
  if (parsed) {
    let temp = [];
    parsed.sections.forEach((x) => {
      x.questions.forEach((y) =>
        temp.push({
          question: y.text,
          answer: y?.answer?.text ? y.answer.text.replace(/<\/?[^>]+(>|$)/g, "") : null
        })
      );
    });
    temp.forEach((x) => {
      answers[Object.keys(data.Questions).find((a) => data.Questions[a] == x.question)] = x.answer
        ? x.answer.split("\n")
        : [];
    });
  }

  let outputHtml = {},
    prevQ = "";
  outputHtml["sections"] = {};
  const root = data[funder].sections;
  for (const section in root) {
    outputHtml["sections"][section] = [];
    for (const funderQ in root[section]) {
      let Q, guide;
      if (Array.isArray(root[section][funderQ])) {
        Q = root[section][funderQ][0];
        if (root[section][funderQ].length > 1) guide = "• " + root[section][funderQ][1] + "૾";
      } else Q = root[section][funderQ];
      const ans = answers[funderQ]?.join("\n");
      if (Q == prevQ) {
        if (ans)
          lastItem(outputHtml["sections"][section]).A += guide ? guide + ans + "\n" : "\n" + ans + "\n";
      } else {
        outputHtml["sections"][section].push({
          Q: funder == "fwo" ? Q : Q.includes("**FORCE_SHOW**") ? Q.replace("**FORCE_SHOW**", "") : undefined, // Q,
          A: ans ? (guide || "") + ans + "\n" : "question not answered"
        });
      }
      prevQ = Q;
    }
  }
  outputHtml["funder"] = funder.toUpperCase();
  return outputHtml;
};
const lastItem = (array) => array[array.length - 1];

const isJson = (str) => {
  try {
    return JSON.parse(str);
  } catch (e) {
    return false;
  }
};

module.exports = replace;
