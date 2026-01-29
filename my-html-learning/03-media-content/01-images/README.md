*The summary is based on the study of MDN (Mozilla Developer Network) materials*

# Working with images

## Main rules 

- **Every image needs `alt` text**: for accessibility and when image faild load.
- **Specify `width` and `height`** - prevents layout shifts, improves performance.
- **Optimaze all images** - compress, choose right format, size appropriately.
- **Use semantic HTML** - `<figure>` for images with captions, `<img>` for content.
- **Respect copyright** - only use images you have rights to. 

## A bit of theory

### How do we put an image on a webpage?

The `img` element embeds images with this key attributes:

- `src` (required): Path to image file (URL or relative path).
- `alt` (required): Text description for accessibility.
- `width`/`height`: Dimensions  in pixels (prevents layout shifts).
- `loading: "lazy"`: for below-fold images, `"eager"` for critical ones. 
- `srcset`/`sizes`: Responsive images for different screens.

### Media assets and licensing

- **Copyright**: Assume all images are copyrighted unless stated otherwise.**
- **Free sources**: Unsplash, Pexeles, Pixabay (chekc individual licenses).
- **Creative Commons**: CC0 (public domanin), CC BY (attribution required).
- **Formats**: 
    - **JPEG**: Photos (loosy, good compression).
    - **PNG**: Graphic with trancparency (lossless).
    - **WebP**: Modern format (better compression than JPEG/PNG). 
    - **SVG**: Vector graphics (scales infinitely, small file size).  
    - **AVIF**: Next-gen format (best compression, limited support).

### Annotating images with figures and figure captions

Use `<figure>` for self-contained content with optional `<figcaption>`:

```html
<figure>
  <img src="chart.jpg" alt="Sales data visualization">
  <figcaption>Figure 1: Quarterly sales growth (2024)</figcaption>
</figure>
```

- `<figure>`: Can contain images, code, diagrams, videos.
- `<figcaption>`: Must be first or last child of `<figure>`.
- **Accessibility**: Screen readers announce figure/caption relationship.

### CSS background images

For decorative images only (no semantic meaning):

```css
.hero {
  background-image: url('hero.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
```

**Key differences:**

- **HTML** `<img>`: Content, has semantic meaning, needs alt text.
- **CSS background**: Decoration, no semantic meaning, no alt needed.
- **CSS background** doesn't print by default, `<img>` does.

## Rules for work

### Accessibility rules

1. **Meaningful alt text**: Describe the image's content/function.

    - **Informative images**: alt="Golden retriever playing fetch".
    - **Decorative images**: alt="" (empty string).
    - **Functional images**: alt="Search button".

2. **Complex images**: Use `<figure>` with detailed `<figcaption>`.

3. **Text in images**: Avoid when possible; if used, repeat in alt.

### Performance rules 

- **Optimize before uploading**: Compress with Squoosh, TinyPNG.
- **Choose right format**: Photos → WebP/JPEG, graphics → SVG/PNG.
- **Responsive images**: Use `srcset` for different resolutions.
- **Lazy load**: `loading="lazy"` for images below the fold.
- **Dimensions**: Always set `width` and `height` (prevents CLS (**Cumulative Layout Shift**) -  is a metric that measures how much a page "jumps" when it loads).

### **Development rules**

- **File organization**: /images/ folder with subfolders (/icons/, /photos/).
- **Naming**: Use hyphens, descriptive names (product-hero-image.jpg).
- **Relative** paths: Use relative paths for portability.
- **Testing**: Check on different devices, with images disabled.
- **Fallbacks**: Provide fallback formats (WebP → JPEG).

### Legal rules

- **Verify license**: Read the fine print, even on "free" sites
- **Attribution**: Credit when required (usually near image)
- **Model releases**: Needed for recognizable people in commercial use
- **Documentation**: Keep records of licenses and attributions

## What to remember

```html
<!-- Essential image (with all best practices) -->
<img src="images/photo.webp"
     alt="Coffee shop interior with people working on laptops"
     width="1200"
     height="800"
     loading="lazy"
     srcset="images/photo-400.webp 400w,
             images/photo-800.webp 800w,
             images/photo-1200.webp 1200w"
     sizes="(max-width: 600px) 400px,
            (max-width: 1200px) 800px,
            1200px">

<!-- Image with caption -->
<figure>
  <img src="diagram.svg" 
       alt="Flowchart showing user registration process"
       width="800" 
       height="600">
  <figcaption>Figure 2: User registration workflow</figcaption>
</figure>

<!-- Decorative image (CSS background) -->
<div class="textured-background" 
     role="img" 
     aria-label="Subtle geometric pattern">
  <!-- Content goes here -->
</div>

<!-- Inline styles for quick prototypes only -->
<img src="temp.jpg" 
     alt="Temporary placeholder image"
     style="width: 100%; height: auto; border: 1px dashed #ccc;">
```