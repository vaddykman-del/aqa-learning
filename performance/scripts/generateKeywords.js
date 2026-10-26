const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "data");
fs.mkdirSync(outDir, { recursive: true });

const rows = [];
for (let i = 1; i <= 500; i++) {
  rows.push(`valueA${i},valueB${i}`);
}

fs.writeFileSync(path.join(outDir, "keywords.csv"), rows.join("\n"));
console.log(`Wrote ${rows.length} rows`);
