*The summary is based on the study of MDN (Mozilla Developer Network) materials*

# Creating Hyperlinks

## Main rule

**Never write "click here"**. Every link should clearly indicate where it leads.

## A bit of theory

### What is a hyperlink?

A hyperlink (`<a>` element) connect web pages. It's the fundamental building block of the web that creates connections between resuorces.

### Anatomy of link

```html
<a href="https://somepage.com" target="_blank" rel="noopener" title="description of the link what it does and where it leads">
```
- href (required): - Destination URL.
- Link text: Should be describe the destination.
- Attributes: Optional modifiers.

### URL and path types

1. Absolute URL: Full address.
    - https://somepage.com/page.html
2. Relative URL: Relative to current page.
    - ../folder/file.html (up one level).
    - ./script.js (same folder).
    - source/img.jpg
3. Root-relative: From site root.
    - /my-html-learning/02-page-structure/02-creating-links/README.md
4. Anchor: Same page navigation.
    - #section-id

### Link types

- External links: To other websites.
- Internal links: Within your site.
- Email links: mailto:email@example.com.
- Telephone links: tel:+1234567890
- Download links: With `download` attribute.

## Rules for work

- Descriptive text: "Read our privacy policy" not "click here".
- External links: Always add `rel="noopener noreferrer"` with `target="_blank"`.
- Navigation: Use semantic `<nav>` with `<ul><li>` structure.
- Accessibility: 
    - Add title for complex links.
    - Use `area-label` if text isn't descriptive enough.
    - `area-current="page"` for current page nav.
- Security: Never use `javascript:` in href.

## What to remember

**Links should work without CSS and make sense when read aloud.**

```html
<!-- Good link -->
<a href="/contact" title="Contact our support team">
  Contact Support
</a>

<!-- External link (safe) -->
<a href="https://external.com" 
   target="_blank" 
   rel="noopener noreferrer">
   External Resource
</a>

<!-- Email with subject/body -->
<a href="mailto:help@company.com?subject=Support&body=Hello,">
  Email Support
</a>

<!-- Navigation menu -->
<nav aria-label="Main">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>

<!-- Download link -->
<a href="/files/report.pdf" download="annual-report.pdf">
  Download Report
</a>
```