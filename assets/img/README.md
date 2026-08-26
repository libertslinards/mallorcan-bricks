# Photos

Drop your photos into this folder using **exactly** these filenames. Each grey dashed
box on the website shows the filename it is waiting for, so you can always check by
looking at the page.

| Filename | The shot | Shape |
|---|---|---|
| `hero.jpg` | A single freshly moulded brick held in your hands. Close, warm light. This is the first thing anyone sees. | tall (4:5) |
| `brick-traditional.jpg` | One traditional brick on a plain background, lit from the side so the texture shows | wide (4:3) |
| `brick-thin.jpg` | Same, but the thin / Roman format | wide (4:3) |
| `brick-slip.jpg` | Same, but a brick slip — show the thinness from a slight angle | wide (4:3) |
| `brick-custom.jpg` | An old original brick next to your new copy of it. Very convincing shot. | wide (4:3) |
| `process-1-clay.jpg` | The prepared clay — a pile, a tub, hands working it | square |
| `process-2-mould.jpg` | The timber mould, sanded, being filled | square |
| `process-3-dry.jpg` | Rows of green bricks drying on boards | square |
| `process-4-fire.jpg` | The kiln, or bricks coming out of it | square |
| `gallery-1.jpg` | The best finished wall you have. Wide shot. | wide (16:10) |
| `gallery-2.jpg` | A detail — an arch, a corner, a reveal | tall (4:5) |
| `gallery-3.jpg` | Texture close-up, raking light across the face | square |
| `gallery-4.jpg` | Another project | square |
| `gallery-5.jpg` | Another project | square |
| `og-image.jpg` | The picture that shows up when someone shares the link on WhatsApp or Facebook. Use your best brick shot. **Must be 1200 x 630 pixels.** | 1200x630 |

## Making the photos work well

**Shoot in the morning or late afternoon.** Hard midday sun flattens the texture, which
is the entire thing you are selling. Low, raking light across the face of a brick is
what makes it look hand-made in a photo.

**Shrink them before uploading.** Photos straight from a phone are 4-6 MB each and will
make the site slow, which Google penalises. Aim for under 300 KB per photo, about
1600 pixels on the long edge. [Squoosh.app](https://squoosh.app) does this free in the
browser — drag the photo in, drag the quality slider to about 75, download.

**Filenames are case-sensitive** once the site is online. `Hero.JPG` will not work.
All lowercase, exactly as written above.

## Turning a placeholder into a real photo

Once the file is in this folder, open `index.html`, find the box:

```html
<figure class="hero__img ph ph--tall" data-ph="hero.jpg"></figure>
```

and replace it with:

```html
<figure class="hero__img"><img src="/assets/img/hero.jpg" alt="A freshly moulded brick"></figure>
```

Removing the `ph` class is what turns off the dashed placeholder box. Always write an
`alt` description — it helps blind visitors and it helps Google.
