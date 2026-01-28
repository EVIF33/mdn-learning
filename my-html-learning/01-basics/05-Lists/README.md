*The summary is based on the study of MDN (Mozilla Developer Network) materials*

# Lists in HTML

## Main rule

**Use three different lise types for different semantics:**

- `<ul>` — when order doesn't matter (bullets). 
- `<ol>` — when order matters (numbers).
- `<dl>` — for terms and definitions.

## A bit of theory

- `<ul>` = unordered list — bullet points, no specific order.
- `<ol>` = ordered list — numbered items, sequential order  .
- `<dl>` = description list — term-definition pairs.
- List items: `<li>` for ul/ol, `<dt>` and `<dd>` for dl.

## Rules for work

1. `<li>` must always be inside `<ul>` or `<ol>`.
2. You can nest lists: `<ul>` inside `<li>`.
3. `<dt>` and `<dd>` only inside `<dl>`.
4. Don't use `<br>` for lists — breaks semantics.

## What to remember

1. **Site navigation** → `<ul>` with `<li>` containing links.
2. **Instructions, recipes** → `<ol>` with sequential steps.
3. **Glossary, FAQ** → `<dl>` with `<dt>` and `<dd>`.
5. Validator will show error if `<li>` without `<ul>`/`<ol>`.
