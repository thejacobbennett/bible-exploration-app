# Explore Your Bible

An interactive guide to the Bible at [exploreyourbible.com](https://exploreyourbible.com): how its books fit together, the overarching story, the themes that run through it, maps of where things happened, how Christian traditions read and live it, and the full text with search. It is organized around the 66 books of the Protestant Bible and also includes the Catholic and Orthodox books, clearly marked.

## What's inside

- **Overview:** the Bible's structure, how its length is split, how the parts fit together, the period between the testaments, and how other traditions arrange Scripture
- **Library:** every book, shelved by type or arranged as the Jewish Tanakh, Catholic or Eastern Orthodox Bible, each with a summary, key figures, era, themes and a map
- **Story:** the storyline (nine movements across eleven eras, with maps and routes) and a zoomable timeline from creation to today
- **Themes:** threads traced from the Old Testament to the New
- **Traditions:** beliefs of nine Christian traditions compared (Venn diagram, side by side, by tradition), theological frameworks, and everyday practices with their biblical basis
- **Read:** every chapter in the Berean Standard Bible (BSB) or King James Version (KJV), plus the Catholic and Orthodox books, with a chapter outline, people, places and a journey map for each chapter
- **Search:** keyword search across every verse, and "Where to turn": passages for grief, anxiety, temptation, work and other seasons of life

Pages can be read aloud, any section can be opened full screen, maps zoom with + / − or a pinch, and the browser's Back button returns to the previous view.

## Run it locally

The site loads its Bible text and modules over HTTP, so opening `index.html` directly from disk won't work. From this folder, run:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Publishing

The site is published with GitHub Pages from the root of the `main` branch, using the custom domain in `CNAME`. Every push to `main` republishes it within a minute or two. There is no build step and no server code; it's plain static files.

## Files

| Path | What it is |
|---|---|
| `index.html` | Page shell, fonts and base styles |
| `app.js` | All content (books, eras, themes, traditions, timeline, topics) and the app logic |
| `bsb.json`, `kjv.json` | Bible text: 66 books → chapters → verse strings |
| `apoc.json` | Text of the Catholic and Orthodox books |
| `chapters.json` | Events, people and places for each chapter |
| `henry.json` | Chapter outlines |
| `basemap.svg` | The base map |
| `preact.module.js`, `htm.module.js` | The small UI libraries the app uses, with their licenses |

## Credits and licenses

- **Berean Standard Bible:** public domain. Text via the [scrollmapper/bible_databases](https://github.com/scrollmapper/bible_databases) project.
- **King James Version (1769) and Apocrypha:** public domain.
- **Chapter events, people and places:** [Theographic Bible Metadata](https://github.com/robertrouse/theographic-bible-metadata), CC BY-SA 4.0.
- **Chapter outlines:** Matthew Henry's Concise Commentary (1706), public domain, via [lyteword/mhenry-concise](https://github.com/lyteword/mhenry-concise) (CC0). A few outlines were written for this site where Henry has none.
- **Base map:** built from [Natural Earth](https://www.naturalearthdata.com/) data (public domain).
- **Preact:** MIT License. **htm:** Apache License 2.0.
- **Fonts:** Fraunces and Inter, loaded from Google Fonts (SIL Open Font License).

Map locations are approximate. Some, such as Eden, the land of Uz and the Exodus route, are traditional or uncertain and are labeled that way.
