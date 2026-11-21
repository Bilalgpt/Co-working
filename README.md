# Hustle Hub — Co-working Space Website

Marketing website for **Hustle Hub**, a co-working space in Lahore.
Domain: **hustlehubpk.com**

Built as a fast, single-page static site (no build step, no framework). Goal of the
site: get visitors to **book a free tour**.

## Files

```
index.html        → all page content
css/styles.css    → styling (industrial-editorial, charcoal + ember theme)
js/main.js        → nav, scroll reveals, tour-form handling
```

## Preview locally

Just open `index.html` in a browser. Or run a tiny local server:

```bash
# Python
python -m http.server 8080
# then visit http://localhost:8080
```

## Things to edit (placeholders → real info)

Search and replace these in the code:

| Placeholder | Where | Change to |
|---|---|---|
| `+92 300 1234567` / `923001234567` | index.html, js/main.js | Your real phone / WhatsApp number |
| `info@hustlehubpk.com` | index.html | Your real email |
| `123 Example Road, Gulberg III, Lahore` | index.html (#location) | Your real address |
| Prices (PKR 12,000 / 20,000 / 45,000) | index.html (#pricing) | Your real rates |
| Gallery boxes | index.html (#gallery) | Real photos (`<img>`) |
| Map box | index.html (#location) | Google Maps embed iframe |
| Instagram / LinkedIn / Facebook `#` links | footer | Your social URLs |

## Make the "Book a Tour" form actually send

Right now the form opens WhatsApp with the details pre-filled. To also receive it by
email, create a free endpoint at **formspree.io** or **web3forms.com**, then in
`js/main.js` set:

```js
var FORM_ENDPOINT = "https://formspree.io/f/xxxxxx";
```

## Deploy

See the chat — recommended: push to the `Co-working` GitHub repo, deploy free on
Netlify/Vercel/GitHub Pages, then point `hustlehubpk.com` (bought on GoDaddy) at it.
