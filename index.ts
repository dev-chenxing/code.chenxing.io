const fs = require("fs");

const readme = require("./generateReadme.ts");
const indexHtml = require("./generateHtml.ts");

const content = require("./content.json");

fs.writeFileSync("README.md", readme(content));
fs.writeFileSync("index.html", indexHtml(content));
