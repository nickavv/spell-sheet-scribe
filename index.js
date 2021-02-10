const fs = require('fs');
const express = require('express');
const path = require('path');
const exphbs  = require('express-handlebars');

const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();

const app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname,'/public/')))

const port = 1110;

if (process.argv.length !== 3) {
    console.log ('Must provide an argument path to spell list JSON file');
    process.exit(1);
}
const spellListPath = process.argv[2];
const spellList = processSpellList(JSON.parse(fs.readFileSync(spellListPath)));

app.get('/', (req, res) => {
  res.render('spells', spellList);
})

app.listen(port, () => {
  console.log(`spell-sheet-scribe listening on port ${port}`)
})

function processSpellList(spellListJson) {
    for (let spellLevel of spellListJson.spellLevels) {
        if (spellLevel.level !== null) {
            spellLevel.saveDc = 10 + spellLevel.level + spellListJson.castingAttributeMod;
        }
        for (let spell of spellLevel.spells) {
            spell.description = md.render(spell.description);
        }
    }
    return spellListJson;
}
