# Spod Dukly – sprievodca v čase

Single-page bilingual (SK/EN) website for Marián Derco's guided tours of
north-eastern Slovakia — the Dukla Pass, wooden churches, the Valley of Death
and the land of the Rusyns.

Built with Jekyll, hosted for free on GitHub Pages.

- Slovak (default): `/`
- English: `/en/`

## Design

Derived from the Derco Brand Kit:

| Token | Value | Use |
|-------|-------|-----|
| Terracotta | `#c16932` | primary — links, buttons, wordmark |
| Gold | `#d1aa52` | accents, CTA buttons, section underlines |
| Forest green | `#3F625E` | dark sections (contact), footer |
| Brown | `#6F4E37` | secondary text accents |
| Cream | `#faf7f2` | page background |

Fonts (Google Fonts substitutes for the commercial brand fonts):
**Lora** (headings ≈ ITC Cheltenham), **Montserrat** (body ≈ TT Hovs),
**Dancing Script** (decorative, an actual brand-kit font).

## Editing content

| What | Where |
|------|-------|
| Contact e-mail, phone, address | `_config.yml` (look for `TODO`) |
| Tours (both languages) | `_data/tours.yml` |
| UI labels + About text | `_data/i18n/sk.yml`, `_data/i18n/en.yml` |
| Page structure | `_includes/homepage.html` |
| Colors & styles | `assets/css/main.css` |
| Photos | `assets/images/photos/` |
| Contact form | replace `YOUR_FORM_ID` in `_includes/homepage.html` with a [Formspree](https://formspree.io) form ID |

## Local development

```bash
gem install jekyll
JEKYLL_NO_BUNDLER_REQUIRE=true jekyll serve --baseurl ""
```

Open http://localhost:4000.

## Deployment

Pushing to `main` triggers a GitHub Pages rebuild automatically
(Settings → Pages → Deploy from branch → `main` / root).
