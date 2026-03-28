# STUCET – EAPCET Papers Hub

> A free, student-built platform that organizes all EAPCET question papers by state, year, date, and shift — so students can stop searching and start preparing.

🌐 **Live Site:** [stucet.vercel.app](https://stucet.vercel.app)

---

## What is STUCET?

STUCET is a community-driven question paper hub for EAPCET (Engineering, Agriculture and Pharmacy Common Entrance Test) — covering both **Telangana (TS)** and **Andhra Pradesh (AP)** B.Tech students.

Students can browse papers by year and shift, open them directly in Google Drive, or download them as PDFs. Anyone can contribute papers they have by submitting a Drive link — submissions are stored in a live database and persist across sessions.

---

## Features

- 📂 Papers organized by **State → Year → Date → Shift**
- 🔍 Instant filter between **TS** and **AP**
- 📤 **Open in Drive** and **Download PDF** for every paper
- ➕ **Community submissions** — students can add papers via a form
- 💾 **Persistent database** — submissions saved via Supabase, survive page refreshes
- 📱 Fully **mobile responsive**

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, Vanilla JavaScript |
| Database | Supabase (PostgreSQL) |
| Hosting | Vercel |
| Fonts | Google Fonts (Syne + DM Sans) |

---

## Project Structure

```
stucet/
├── index.html       # Main page structure
├── style.css        # All styling
├── script.js        # Logic, Supabase integration, rendering
└── STUCET.png       # Logo / favicon
```

---

## How It Works

### Browsing Papers
Papers are hardcoded in `script.js` as a baseline dataset. On page load, additional community-submitted papers are fetched from Supabase and merged in automatically.

### Submitting a Paper
1. Click **"Add Papers"**
2. Fill in State, Year, Date, Shift, and Google Drive link
3. Hit **Submit** — the paper is saved to Supabase instantly
4. It appears on the site immediately and persists after refresh

### Database (Supabase)
Table: `papers`

| Column | Type |
|---|---|
| id | BIGSERIAL (Primary Key) |
| state | text |
| year | text |
| date | text |
| shift | text |
| drive_link | text |

---

## Running Locally

No build tools needed — just open `index.html` in your browser.

```bash
git clone https://github.com/your-username/stucet.git
cd stucet
# Open index.html in your browser
```

To connect your own Supabase instance, update these two lines at the top of `script.js`:

```js
const SUPABASE_URL = 'your_supabase_url';
const SUPABASE_KEY = 'your_anon_public_key';
```

---

## Contributing

This project is made for students, by students. If you have EAPCET papers not listed on the site, please submit them directly through the website!

For code contributions:
1. Fork the repo
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Open a Pull Request

---

## License

MIT License — free to use, modify, and distribute.

---

*Made with ❤️ for EAPCET students across Telangana and Andhra Pradesh.*
