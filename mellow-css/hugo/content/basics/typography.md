---
title: Typography
description: Get started with the basics of typography for body text, headings, various text decorations, and lists.
---

## Headings
All default HTML heading are available.

{{< example >}}
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
{{</ example >}}

Additionally, styles are provided to style any text as any of the 6 headings.

{{< example >}}
<p class="h1">Heading 1</p>
<p class="h2">Heading 2</p>
<p class="h3">Heading 3</p>
<p class="h4">Heading 4</p>
<p class="h5">Heading 5</p>
<p class="h6">Heading 6</p>
{{</ example >}}

## Marketing
The `.marketing-*`-heading classes are designed as an extension of the default headings. These are great for when you need a more obvious heading. Note that beyond the `font-size`-scaling from the headings, all other custom styling is lost.

{{< example >}}
<h1 class="marketing-1">Marketing 1</h1>
<h1 class="marketing-2">Marketing 2</h1>
<h1 class="marketing-3">Marketing 3</h1>
<h1 class="marketing-4">Marketing 4</h1>
<h1 class="marketing-5">Marketing 5</h1>
<h1 class="marketing-6">Marketing 6</h1>
{{</ example >}}

## Text decorations
All of the usual inline styling options are available in Mellow. They are mostly untouched given their accessibility-related purposes.

{{< example >}}
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
{{</ example >}}

## Small
The `<small>`-element and `.small`-class share their styling. Using these in any context will reduce the size of the text to 87.5% of its parent.

{{< example >}}
<h1>Heading 1 <small>Small 1</small></h1>
<h2>Heading 2 <small>Small 2</small></h2>
<h3>Heading 3 <small>Small 3</small></h3>
<h4>Heading 4 <small>Small 4</small></h4>
<h5>Heading 5 <small>Small 5</small></h5>
<h6>Heading 6 <small>Small 6</small></h6>
<p>Paragraph <small>Small paragraph</small></p>
{{</ example >}}

## Lists

### Unstyles
Often, you don't want most of a lists default styling. The `list-none`-class makes sure that any list styling is removed.

{{< example >}}
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
{{</ example >}}

### Inline
Making a horizontal menu? Showing your list in a row is a useful first step. The `list-inline`-classes help you with that.

{{< example >}}
<ul class="list-inline">
  <li>Hello list</li>
  <li>In-a-line</li>
  <li>No dots either</li>
</ul>
{{</ example >}}
