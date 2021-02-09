# spell-sheet-scribe
Spell Sheet Scribe is a program for generating a visually appealing spell-card sheet
for a tabletop role playing game. As of this version that game is Pathfinder specifically,
but it could be enhanced to support others or to behave more generically.

## Running SSS
You can run Spell Sheet Scribe with the following command:

```
$ node index.js /path/to/spells.json
```

To see a generic sample spell sheet, run this command:

```
$ npm run start
```

## Defining spells.json
Your `spells.json` file will be parsed and rendered into pretty HTML. The structure of the file is as follows:

```
{
  "casterLevel": 1,
  "castingAttributeMod": 2,
  "spellLevels": [
    "level": 1,
    "totalUses": "4",
    "spells": [
      {
        "name": "Spell Name",
        "school": // one of "abjuration", "conjuration", "divination", "enchantment", "evocation", "illusion", "necromancy", "transmutation",
        "castingInfo": {
          "castingTime": "text description of casting time",
          "components": "text description of components"
        },
        "effectInfo": {
          "range": "text description of spell range",
          "target": "optional, text description of target"
          "effect": "optional, text description of effect",
          "duration": "text description of duration",
          "savingThrow": "text description of saving throw"
        },
        "description": "A description of the spell. **Supports Markdown!**. Use \n for line breaks."
      }
    ]
  ]
}
```
