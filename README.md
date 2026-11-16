# Bible Explorer

An interactive guide to the 66 books of the Protestant Bible: how they fit together, the overarching story, the themes that run through it, maps of where things happened, and the full text with search.

## What's inside

- **Overview:** the Bible's structure, how its length is split, and how other canons compare
- **Library:** all 66 books grouped by section, each with a summary, key figures, era, themes and a map
- **Storyline:** 11 eras from creation to the early church, each with an interactive map and routes
- **Themes:** 9 threads traced from the Old Testament to the New
- **Read:** every chapter in the Berean Standard Bible (BSB) or King James Version (KJV)
- **Search:** keyword search across all 31,102 verses, with a chart of where a word appears

The maps zoom (− / +), drag to pan, and show numbered places with notes.

## Run it locally

The site loads its Bible text and modules over HTTP, so opening `index.html` directly from disk won't work. From this folder, run:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Publish with GitHub Pages

1. Push these files to the root of the repository's `main` branch.
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and `/ (root)`. Save.
4. After a minute or two the site is live at `https://<your-username>.github.io/<repo-name>/`.

The site has no build step and no server code. It's plain static files.

## Files

| Path | What it is |
|---|---|
| `index.html` | Page shell, fonts and base styles |
| `app.js` | All content data (books, eras, themes, places) and the app logic |
| `data/bsb.json`, `data/kjv.json` | Bible text: an array of 66 books → chapters → verse strings |
| `assets/basemap.svg` | The illustrated base map |
| `vendor/` | Preact and htm, the small UI libraries the app uses, with their licenses |

To change book summaries, eras, themes or map places, edit the data near the top of `app.js` (`ROWS`, `ERAS`, `THEMES`, `PLACES`, `BOOK_MAPS`, `ERA_MAPS`).

## Credits and licenses

- **Berean Standard Bible:** public domain. Text via the [scrollmapper/bible_databases](https://github.com/scrollmapper/bible_databases) project.
- **King James Version (1769):** public domain. Same source.
- **Base map:** built from [Natural Earth](https://www.naturalearthdata.com/) data (public domain).
- **Preact:** MIT License. **htm:** Apache License 2.0. Copies of both are in `vendor/`.
- **Fonts:** Fraunces and Inter, loaded from Google Fonts (SIL Open Font License).

Map locations are approximate. Some, such as Eden, the land of Uz and the Exodus route, are traditional or uncertain and are labeled that way. Routes are drawn as straight lines between stops.
