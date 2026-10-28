# Bidii Tea website — corrected master project

Open `index.html` using VS Code Live Server. All styling is in readable `css/style.css` and `css/responsive.css` files. No CSS is hidden in the HTML.

## Hero fixes
- The duplicated headings are removed by eliminating the screenshot-based CSS background.
- The hero uses the full-length 500 g tea pouch from `assets/images/hero/bidii-hero-product-complete.png` rather than the cropped image.
- The product is extracted from a source image with its own full pouch and tea props; the background is made transparent using a connected-background mask.
- The navigation logo is extracted as a transparent PNG from the original logo.
- The hero curve is a real SVG element; text is real selectable HTML.

## Notes
The cream field behind the printed logo on the pouch is part of the *packaging design*, not a separate pasted white rectangle. The original source pouch artwork is a concept; review it closely before printing or commercial use. Other pages remain starter placeholders. No checkout or ecommerce is implemented.

## Editing
- `index.html` hero text and content
- `css/style.css` desktop design
- `css/responsive.css` mobile/tablet layout
- `assets/images/hero/` product images
- `assets/images/brand/` brand assets

Use a hard refresh (`Ctrl+Shift+R`) after replacing your old project folder.
