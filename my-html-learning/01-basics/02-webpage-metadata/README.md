*The summary is based on the study of MDN (Mozilla Developer Network) materials*

# Web Page Metadata

- The `<head>` section is not visible to the user, but it tells the browser and search engines **how** to display the page and **what** it is. 
- Metadata is added to a page using the `<meta>` tag.

## Some meta tags:

- `<meta charset="UTF-8">` is the most important one. **Encoding**. Without it, Russian (and other) letters will turn into crabs. It must be specified first in the `<head>`.
- `<meta name="viewport" content="width=device-width, initial-scale=1">` — is the second most important. Adaptability to mobile phones. Without it, the website on the phone will be microscopic.
    - A `viewport` is a browser's "virtual window" through which it looks at your page. Without specifying this tag, the browser on the phone **pretends to have a wide screen** (≈980px) and scales the entire page to fit the small screen, making everything microscopic.
    - `width=device-width` - Tells the browser to "take the width of my screen as the real width, don't pretend to be wide."
- `<title>My page</title>` — is the title of a tab/window. Important for **SEO** and **UX**. It should be clear.
- `<meta name="description" content="...">` — A **short description** of the page. It is often shown in Google search results.
- `<link rel="icon" href="/favicon.ico" type="image/x-icon" />` - Adding a website icon that is displayed on a tab and in bookmarks.
- `<link rel="stylesheet" href="./style.css">` - Applying CSS to a page.
- `<script src="./script.js" defer></script>` - Applying JavaScript to a page.
