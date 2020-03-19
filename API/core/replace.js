const data = require('../config/data')
const startLine = 16
const charCount = 50
let answers = {}
let answerSealed = true
const replace = async (content, funder) => {
    let sealingTexts = await extractSealing(content)
    for (const key in data.Questions) {
        answers[key] = []
    }
    const lines = content.split('\n');
    let key = ''
    for (let i = startLine; i < lines.length - 1; i++) {
        for (const q in data.Questions) {
            if (lines[i].substring(0, charCount).trim() == data.Questions[q].substring(0, charCount).trim()) {
                // Start of answer
                key = q
                answerSealed = false;
                i++
                break;
            }
        }
        if (!answerSealed) {
            if (sealingTexts.includes(lines[i])) {
                answerSealed = true;
            }
            else {
                // Continue adding lines as answer until next question
                if (lines[i].trim()) answers[key].push(lines[i].trim())
            }
        }
    }
    let outputHtml = {}, prevQ = ''
    outputHtml["sections"] = {}
    const root = data[funder].sections
    for (const section in root) {
        let newSection = unCamelCase(section)
        outputHtml["sections"][newSection] = []
        for (const question in root[section]) {
            let Q, guide;
            if (Array.isArray(root[section][question])) {
                Q = root[section][question][0]
                guide = root[section][question][1]
            }
            else
                Q = root[section][question]

            if (Q == prevQ) {
                lastItem(outputHtml["sections"][newSection]).A += '\n' + answers[question].toString()
            }
            else {
                outputHtml["sections"][newSection].push({
                    "Q": Q,
                    "A": guide ? guide + '\n' + answers[question].toString() : answers[question].toString()
                })
            }
            prevQ = Q
        }
    }
    outputHtml["funder"] = funder.toUpperCase()
    return outputHtml
}
const lastItem = array => {
    return array[array.length - 1]
}
const extractSealing = content => {
    let sealingTexts = []
    const lines = content.split('\n');
    let prevLine = ''
    for (const l in lines) {
        if (lines[l].includes("====") || lines[l].includes("----")) {
            sealingTexts.push(prevLine)
            sealingTexts.push(lines[l])
        }
        else
            prevLine = lines[l]
    }
    return sealingTexts
}

const unCamelCase = str => {
    return str.replace(/([A-Z])/g, ' $1')
        .replace(/^./, function (str) { return str.toUpperCase(); })
}

module.exports = replace