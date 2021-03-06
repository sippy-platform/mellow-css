---
title: Typography
description: Get started with the basics of typography for body text, headings, various text decorations, and lists.
section: atoms
---

## Font families
You can use the `font-*` classes to pick 1 of 4 font families.

{{<example>}}
<p class="font-sans">This is a sans serif font</p>
<p class="font-serif">This is a serif font</p>
<p class="font-heading">This is a heading font</p>
<p class="font-mono">This is a mono font</p>
{{</example>}}

Additionally, styles are provided to style any text as any of the 6 headings.

## Headings
All default HTML heading are available.

{{<example>}}
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
{{</example>}}

Additionally, styles are provided to style any text as any of the 6 headings.

{{<example>}}
<p class="h1">Heading 1</p>
<p class="h2">Heading 2</p>
<p class="h3">Heading 3</p>
<p class="h4">Heading 4</p>
<p class="h5">Heading 5</p>
<p class="h6">Heading 6</p>
{{</example>}}

### Font sizes
The `fs-h[1-6]` classes give you the font size of the heading classes and nothing else.

{{<example>}}
<p class="fs-h1">Heading 1</p>
<p class="fs-h2">Heading 2</p>
<p class="fs-h3">Heading 3</p>
<p class="fs-h4">Heading 4</p>
<p class="fs-h5">Heading 5</p>
<p class="fs-h6">Heading 6</p>
{{</example>}}

{{<note class="orange">}}
Unlike their heading counterparts, the `fs-h` classes don't use Responsive Font Sizes and instead will always remain at their default maximum size.
{{</note>}}

## Marketing
The `marketing-*`-heading classes are designed as an extension of the default headings. These are great for when you need a more obvious heading. Note that beyond the `font-size`-scaling from the headings, all other custom styling is lost.

{{<example>}}
<h1 class="marketing-1">Marketing 1</h1>
<h1 class="marketing-2">Marketing 2</h1>
<h1 class="marketing-3">Marketing 3</h1>
<h1 class="marketing-4">Marketing 4</h1>
<h1 class="marketing-5">Marketing 5</h1>
<h1 class="marketing-6">Marketing 6</h1>
{{</example>}}

## Text decorations
All of the usual inline styling options are available in Mellow. They are mostly untouched given their accessibility-related purposes.

{{<example>}}
<p>This may not be important, but <mark>this highlighted section</mark> is.</p>
<p><del>This text has been deleted.</del></p>
<p><s>This text is wrong.</s></p>
<p><ins>This text has been added to the document.</ins></p>
<p><u>This text is underlined.</u></p>
<p><small>This text is small, and styles as .small.</small></p>
<p><strong>This text is rendered in bold.</strong></p>
<p><b>This text is rendered in bold, but visual only.</b></p>
<p><em>This text is rendered in italics.</em></p>
<p><i>This text is rendered in italics, but visual only.</i></p>
{{</example>}}

## Small
The `<small>` element and `text-small` class share their styling. Using these in any context will reduce the size of the text to 75% of its parent.

{{<example>}}
<h1>Heading 1 <small class="text-muted">Small 1</small></h1>
<h2>Heading 2 <span class="text-small text-muted">Small 2</span></h2>
<h3>Heading 3 <small class="text-muted">Small 3</small></h3>
<h4>Heading 4 <span class="text-small text-muted">Small 4</span></h4>
<h5>Heading 5 <small class="text-muted">Small 5</small></h5>
<h6>Heading 6 <span class="text-small text-muted">Small 6</span></h6>
<p>Paragraph <small class="text-muted">Small paragraph</small></p>
{{</example>}}

## Lists

### Unstyles
Often, you don't want most of a lists default styling. The `list-none` class makes sure that any list styling is removed.

{{<example>}}
<ul class="list-none">
  <li>Hello list.</li>
  <li>No padding.</li>
  <li>No dots.</li>
  <li>And yet
    <ul>
      <li>Children do still have list styling.</li>
      <li>Look at those dots go!</li>
    </ul>
  </li>
</ul>
{{</example>}}

### Inline
Making a horizontal menu? Showing your list in a row is a useful first step. The `list-inline` classes help you with that.

{{<example>}}
<ul class="list-inline">
  <li>Hello list</li>
  <li>In-a-line</li>
  <li>No dots either</li>
</ul>
{{</example>}}

## Responsive font sizes
Mellow uses responsive font sizes. This means that the size of ours fonts (heading, marketing headings, and leads) will automatically scale with the size of the viewport.

Check out the Headings and Marketing demos above and resize your window to test this.
