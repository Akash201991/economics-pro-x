const fs = require("fs");
const path = require("path");

function read(file) {
    return fs.readFileSync(file, "utf8");
}

/* =========================
   CSS
========================= */

const cssFiles = [
    "../css/variables.css",
    "../css/base.css",
    "../css/layout.css",
    "../css/components.css",
    "../css/responsive.css"
];

let css = "";

cssFiles.forEach(file => {
    css += "\n\n/* ===== " + path.basename(file) + " ===== */\n";
    css += read(path.join(__dirname, file));
});

/* =========================
   JavaScript
========================= */

const jsFiles = [
    "../js/app.js",
    "../js/accordion.js",
    "../js/darkmode.js",
    "../js/progress.js",
    "../js/search.js",
    "../js/toc.js",
    "../js/main.js"
];

let js = "";

jsFiles.forEach(file => {
    css += "";
    js += "\n\n/* ===== " + path.basename(file) + " ===== */\n";
    js += read(path.join(__dirname, file));
});

/* =========================
   Theme XML
========================= */

let xml = read(
    path.join(__dirname, "../theme/theme.template.xml")
);

xml = xml.replace("{{CSS}}", css);
xml = xml.replace("{{JS}}", js);

/* =========================
   Output
========================= */

const output = path.join(__dirname, "theme.xml");

fs.writeFileSync(
    output,
    xml,
    "utf8"
);

console.log("✓ Theme generated successfully.");