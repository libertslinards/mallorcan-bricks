# Mallorcan Bricks

Website for a hand-moulded brick workshop in Mallorca.

Plain HTML, CSS and JavaScript. **No build step, no npm install.** You edit a file,
you push it, the site updates.

---

## Open it on your computer

Just double-click `index.html`.

To see it exactly as it will be online, run a tiny local server instead:

```bash
npx serve .
```

Then open the address it prints (usually http://localhost:3000).

---

## Before it goes live — things to fill in

These are placeholders right now. Everything is marked so you can find it.

### 1. Your contact details — `assets/js/main.js`

The first few lines of the file:

```js
const SITE = {
  email:         "hola@mallorcanbricks.com",
  phoneDisplay:  "+34 600 000 000",
  phoneWhatsApp: "34600000000"
};
```

Change those three and the whole site updates — the contact list, the WhatsApp
button and the enquiry form all read from here.

`phoneWhatsApp` is country code + number with **no `+`, no spaces**.
So `+34 971 123 456` becomes `34971123456`.

### 2. The technical numbers — `assets/js/i18n.js`

The specifications table currently says *"To be confirmed"* on every row. **I did not
invent these numbers** — dimensions, compressive strength, water absorption and frost
resistance are real test figures and architects will rely on them, so they have to be
your actual measured values.

Find `"t.tbc": "To be confirmed"` in the file. To fill the table in properly, give each
row its own value. In `index.html` the rows look like this:

```html
<tr><th data-i18n="t.dim">Dimensions</th> <td class="tbc" data-i18n="t.tbc">To be confirmed</td></tr>
```

Change `data-i18n="t.tbc"` to a new key like `data-i18n="t.dim.v"`, then add
`"t.dim.v": "215 x 102 x 65 mm"` to all three languages in `i18n.js`, and remove
`class="tbc"` so it stops looking greyed out.

The easy ones to start with: dimensions, weight per brick, bricks per pallet, lead time.
The lab ones (compressive strength, water absorption, frost resistance) need testing —
leave them as "To be confirmed" until you have real results.

### 3. Photos — `assets/img/`

Every grey dashed box on the site shows the filename it is waiting for. Drop a photo
with that exact name into `assets/img/` and it appears. See `assets/img/README.md`
for the full list and what each shot should be.

### 4. Your domain — `robots.txt` and `sitemap.xml`

Both say `https://mallorcanbricks.com`. Change to whatever domain you buy.

---

## Editing the words

All text lives in `assets/js/i18n.js`, in three languages: `en`, `es`, `ca`.

Find the key you want, change the text between the quotes, **in all three languages**.
For example, to change the headline:

```js
"hero.title": "Hand-moulded bricks from Mallorcan clay.",   // in the en: block
"hero.title": "Ladrillos moldeados a mano...",              // in the es: block
"hero.title": "Maons emmotllats a mà...",                   // in the ca: block
```

The site picks the visitor's browser language automatically, and remembers if they
switch with the EN / ES / CA buttons.

---

## Publishing (GitHub → Cloudflare Pages)

The repo is already connected to GitHub. To publish a change:

```bash
git add -A && git commit -m "Update prices" && git push
```

Cloudflare Pages rebuilds automatically within about a minute.

### First-time Cloudflare setup

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** →
   **Create** → **Pages** → **Connect to Git**
2. Authorise GitHub and pick the `mallorcan-bricks` repo
3. Build settings — this is the important part:
   - **Framework preset:** `None`
   - **Build command:** *leave completely empty*
   - **Build output directory:** `/`
4. **Save and Deploy**

You get a free `mallorcan-bricks.pages.dev` address straight away. To use your own
domain: **Custom domains** → **Set up a domain**.

---

## The enquiry form

Right now the form opens the visitor's own email app with the message filled in. That
works everywhere and costs nothing, but some people on phones do not have an email app
set up, and you will not capture those enquiries.

When you want enquiries delivered straight to your inbox, sign up for a free form
service ([Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) both
have free tiers) and follow their instructions to point the `<form>` at their address.
The WhatsApp link is the reliable fallback in the meantime — for builders on site it is
probably the one they will actually use.

---

## Files

```
index.html              the whole page
assets/css/style.css    all styling; the colours are at the very top
assets/js/i18n.js       ALL the text, in 3 languages
assets/js/main.js       your contact details + language switching + the form
assets/img/             photos go here
_headers                security and caching rules for Cloudflare
robots.txt, sitemap.xml so Google can find the site
```
