# Professor Zain ul Abidin: website

Plain HTML/CSS/JS, no build step. Built with the ScrollCraft skill (`.claude/skills/scroll-craft`).
Open `index.html`, or serve the folder: `python3 -m http.server`.

Pages: `index`, `about`, `consultation`, `classes`, `fees`, `contact`, `book`.

## Booking (Cal.com)
Edit the one line in `assets/config.js`:

```js
const BOOKING_LINK = "PASTE_CALCOM_LINK_HERE";
```

In Cal.com create ONE event type with multiple durations (30, 45, 60 min) and connect Google Calendar. Cal.com then emails a confirmation to both the professor and the booker. Until the link is set, `book.html` shows "Booking link abhi add hona baqi hai" and the duration and price picker still works. Payment is not collected on the site; add Stripe inside Cal.com if wanted.

## Dummy content
Every placeholder is marked with a `data-dummy` attribute. Find them all with:

```bash
grep -n "data-dummy" *.html
```

Header, footer and the ornament sprite are repeated in each page, so a change to the navigation needs the same edit in all seven files.
