const fs = require('fs');

const express = require('express');
const app = express();
const port = 1110;

if (process.argv.length !== 3) {
    console.log ('Must provide an argument path to spell list JSON file');
    process.exit(1);
}
const spellListPath = process.argv[2];
const spellList = JSON.parse(fs.readFileSync(spellListPath));

app.get('/', (req, res) => {
  res.send(JSON.stringify(spellList));
})

app.listen(port, () => {
  console.log(`spell-sheet-scribe listening on port ${port}`)
})
