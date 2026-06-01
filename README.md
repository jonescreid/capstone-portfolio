# Carson Jones — Capstone Scholar ePortfolio

Personal ePortfolio for the USC Capstone Scholars Program.

## How to Deploy (GitHub Pages)

1. Create a new public GitHub repository named `capstone-portfolio` (or any name you prefer)
2. Upload all files in this folder to the repo root
3. Go to **Settings → Pages**
4. Under "Source", select **Deploy from a branch**
5. Select `main` branch, `/ (root)` folder → click **Save**
6. Your site will be live at: `https://yourusername.github.io/capstone-portfolio`

## Adding Your Photos

Replace the placeholder `<div class="photo-slot">` and `<div class="gallery-slot">` elements with real `<img>` tags:

```html
<!-- Before -->
<div class="photo-slot"><span>Photo</span></div>

<!-- After -->
<div class="photo-slot">
  <img src="assets/ambassador-1.jpg" alt="Ambassador tour" />
</div>
```

Put your photo files in the `assets/` folder alongside the PDFs.

## Files

- `index.html` — Page 1: About Me + Looking Ahead
- `experience.html` — Page 2: WTC, BTC, Connection
- `extras.html` — Page 3: Resume, Finance Project, Gallery
- `css/style.css` — All styles
- `js/main.js` — Scroll animations
- `assets/` — PDFs and photos
