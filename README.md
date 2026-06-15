# Ben's Airbnb · Cardiff — Partnership Media Kit

A clean, professional one-page website to share **privately** with sponsorship and brand
partners. It showcases three Cardiff short-stay apartments, the audience they reach, and
the partnership packages on offer.

🔗 **Live listings**
- [City Centre Apartment](https://www.airbnb.co.uk/rooms/1129767487212928227)
- [Stylish Cardiff Stay](https://www.airbnb.co.uk/rooms/53187462)
- [Cardiff Apartment](https://www.airbnb.co.uk/rooms/30702421)

---

## How to view it

Just **double-click `index.html`** — it opens in your web browser. No installation needed.

## How to edit it (no coding required)

Open `index.html` in any text editor (Notepad works) and look for these markers:

| What you want to change | Where to look |
|---|---|
| Any **number / stat** (ratings, guest counts, occupancy) | Items tagged `data-edit` — just change the text between the tags |
| **Property names & details** | The three `<article class="prop">` blocks |
| **Add a photo** to a property | See "Adding photos" below — the grey boxes tagged `data-photo` |
| **Your email** | Search for `bpomeroy03@gmail.com` and replace it |
| **Partnership packages** | The three `<article class="pkg">` blocks |

> The figures currently on the page are sensible **placeholders**. Replace them with your real numbers when you have them.

### Adding photos

1. Save your photos into a new folder called `images` inside this project.
2. In `styles.css`, find `.prop__media` and give each card a real image, or replace the
   grey box in `index.html`. The quickest way: ask me and I'll wire your photos in for you.

---

## Hosting it online (so partners can visit a link)

This repo is set up for **GitHub Pages** (free hosting):

1. Go to the repo on GitHub → **Settings → Pages**.
2. Under *Source*, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
3. After a minute your site is live at `https://<your-username>.github.io/<repo-name>/`.

> Note: GitHub Pages sites are publicly reachable if someone has the exact link (the page also
> asks search engines not to index it). For a fully **private/password-protected** link, a host
> like **Netlify** or **Cloudflare Pages** with password protection is a better fit — just ask
> and I'll set that up.

---

## Files

| File | Purpose |
|---|---|
| `index.html` | All the page content |
| `styles.css` | The look & feel (colours, layout, fonts) |
| `script.js` | Small touches (year in footer, scroll animation) |
