# HTML Tables: Accessibility Features

## Main rule

**Every table must be accessible to screen readers.** Use semantic structure and proper attributes so visually impaired users can understand table data.

## A bit of theory

### Why tables need special accessibility?

Screen readers announce tables differently:
- **Without accessibility:** "Table with 3 rows and 4 columns" (useless).
- **With accessibility:** "Month column, January row, Sales cell: $5000".

### Key accessibility concepts:

- **Caption:** Table title/description (announced first).
- **Scope:** Defines if header is for row (`scope="row"`) or column (`scope="col"`).
- **Headers/id:** Links data cells to their headers in complex tables.
- **Semantic sections:** `<thead>`, `<tbody>`, `<tfoot>` provide context.

## Rules for work

### Always add `<caption>`

```html
<table>
  <caption>Monthly Sales Report for Q1 2024</caption>
  <!-- Screen reader: "Table: Monthly Sales Report for Q1 2024" -->
  ...
</table>
```

**Rules for captions:**

- Place immediately after `<table>`.
- Keep concise but descriptive.
- Required for complex tables.
- Optional for simple data tables.

### Complex tables: Use id and headers
For tables with multiple header levels or irregular structure:

```html
<table>
  <caption>Project Schedule with Milestones</caption>
  
  <tr>
    <th id="project">Project</th>
    <th id="phase" colspan="2">Phase</th>
    <th id="deadline">Deadline</th>
  </tr>
  
  <tr>
    <th id="webapp" rowspan="2">Web App</th>
    <th id="design" headers="webapp">Design</th>
    <td headers="webapp design">Mockups</td>
    <td headers="webapp design">Mar 15</td>
  </tr>
  
  <tr>
    <!-- project header inherited from rowspan above -->
    <th id="dev" headers="webapp">Development</th>
    <td headers="webapp dev">Frontend</td>
    <td headers="webapp dev">Apr 20</td>
  </tr>
</table>
```

**How id/headers works:**

- Give each `<th>` a unique id.
- In `<td>`, add `headers="id1 id2 id3"`.
- **Screen reader reads**: "Web App, Design, Mockups: Mar 15".

## What to remember

```html
<!-- Complete accessible table example -->
<table>
  <caption>Quarterly Financial Results (in thousands)</caption>
  
  <thead>
    <tr>
      <th scope="col">Quarter</th>
      <th scope="col" id="revenue">Revenue</th>
      <th scope="col" id="expenses">Expenses</th>
      <th scope="col" id="profit">Profit</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <th scope="row" id="q1">Q1</th>
      <td headers="revenue q1">$1,200</td>
      <td headers="expenses q1">$800</td>
      <td headers="profit q1">$400</td>
    </tr>
    <tr>
      <th scope="row" id="q2">Q2</th>
      <td headers="revenue q2">$1,500</td>
      <td headers="expenses q2">$900</td>
      <td headers="profit q2">$600</td>
    </tr>
  </tbody>
  
  <tfoot>
    <tr>
      <th scope="row">Total</th>
      <td>$2,700</td>
      <td>$1,700</td>
      <td>$1,000</td>
    </tr>
  </tfoot>
</table>
```

## Best practices summary

- **Caption first** - Always provide context.
- **Scope always** - Every `<th>` needs scope.
- **Headers for complexity** - Use id/headers for multi-level.
- **Sections for structure** - `<thead>`, `<tbody>`, `<tfoot>`.
- **Test with real screen reader** - Emulators miss nuances.
- **Consider alternatives** - For very complex data, maybe a list or chart is better.