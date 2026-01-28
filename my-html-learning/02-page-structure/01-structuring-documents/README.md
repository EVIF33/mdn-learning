# Structuring HTML Documents

## Main rule

**Semantics over visuals.** Use proper tags for structure — it helps SEO, accessibility, and future changes.

## A bit of theory

HTML5 introduced semantic tags that describe the ROLE of content:

- `<header>` — header (of site or section)
- `<nav>` — navigation
- `<main>` — main content (one per page!)
- `<article>` — independent content (post, article)
- `<section>` — thematic content group
- `<aside>` — sidebar, additional info
- `<footer>` — footer

## Rules for work

1. **Order matters:** header → nav → main → aside → footer
2. **Only one `<main>`** per page
3. **Use h1-h6** for headings inside sections
4. **Don't use `<div>`** if there's a semantic tag

## What to remember

```html
<!doctype html>
<html>
<head>...</head>
<body>
  <header>Logo, menu</header>
  <nav>Navigation links</nav>
  <main>
    <article>Blog post</article>
    <section>Post group</section>
  </main>
  <aside>Ads, widgets</aside>
  <footer>Contacts, copyright</footer>
</body>
</html>
```