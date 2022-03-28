---
title: Labels
description: Highlight meta data on your pages.
---

## Introduction
Labels appear as slightly smaller fonts inside a colored or bordered surface.

{{<example>}}
<span class="label">default label</span>
{{</example>}}

### Filled
{{<example>}}
<span class="label label-filled">default label</span>
{{</example>}}

### Pill
By using the `rounded-pill` class you can make a rounded variant. The rounded variant of a pill will have more padding on the left and right side.

{{<example>}}
<span class="label rounded-pill">default label</span>
<span class="label label-filled rounded-pill">default label</span>
{{</example>}}

## Colors
Like other components, the color of a label can be changed with ease:

{{<example>}}
<span class="label label-red">red</span>
<span class="label label-orange">orange</span>
<span class="label label-yellow">yellow</span>
<span class="label label-lime">lime</span>
<span class="label label-green">green</span>
<span class="label label-cyan">cyan</span>
<span class="label label-blue">blue</span>
<span class="label label-purple">purple</span>
<span class="label label-pink">pink</span>
<span class="label label-light">light</span>
<span class="label label-grey">grey</span>
<span class="label label-dark">dark</span>
{{</example>}}

### Filled variant
{{<example>}}
<span class="label label-filled label-red">red</span>
<span class="label label-filled label-orange">orange</span>
<span class="label label-filled label-yellow">yellow</span>
<span class="label label-filled label-lime">lime</span>
<span class="label label-filled label-green">green</span>
<span class="label label-filled label-cyan">cyan</span>
<span class="label label-filled label-blue">blue</span>
<span class="label label-filled label-purple">purple</span>
<span class="label label-filled label-pink">pink</span>
<span class="label label-filled label-light">light</span>
<span class="label label-filled label-grey">grey</span>
<span class="label label-filled label-dark">dark</span>
{{</example>}}

## Sizing
Badges scale with the text of their parent.

{{<example>}}
<h1>Heading 1 <span class="label label-filled label-blue">Label</span></h1>
<h2>Heading 2 <span class="label label-filled label-green">Label</span></h2>
<h3>Heading 3 <span class="label label-filled label-yellow">Label</span></h3>
<h4>Heading 4 <span class="label label-filled label-orange">Label</span></h4>
<h5>Heading 5 <span class="label label-filled label-red">Label</span></h5>
<h6>Heading 6 <span class="label label-filled label-purple">Label</span></h6>
{{</example>}}

{{<example>}}
<h1>Heading 1 <span class="label label-filled label-blue rounded-pill">Label</span></h1>
<h2>Heading 2 <span class="label label-filled label-green rounded-pill">Label</span></h2>
<h3>Heading 3 <span class="label label-filled label-yellow rounded-pill">Label</span></h3>
<h4>Heading 4 <span class="label label-filled label-orange rounded-pill">Label</span></h4>
<h5>Heading 5 <span class="label label-filled label-red rounded-pill">Label</span></h5>
<h6>Heading 6 <span class="label label-filled label-purple rounded-pill">Label</span></h6>
{{</example>}}

## Usage
### Buttons
{{<example>}}
<button type="button" class="btn btn-primary">
  Registrations <span class="label label-filled label-light">4</span>
</button>
{{</example>}}

### Positioning
{{<example>}}
<button type="button" class="btn btn-primary position-relative">
  Mails
  <span class="position-absolute top-0 start-100 translate-center label label-filled label-red rounded-pill">
    4
  </span>
</button>
{{</example>}}

### List
When using a label in a list, you can set it in any of the available locations, but we recommend using the `list-item-icon-[s|e]` class.
{{<example>}}
<div class="list list-dividers-full border">
  <a href="#" class="list-item list-item-action">
    <span class="list-item-icon-s">
      <span class="label label-filled label-blue">4</span>
    </span>
    <span class="list-item-label">This is a list item</span>
  </a>
  <a href="#" class="list-item list-item-action">
    <span class="list-item-label">This is a list item</span>
    <span class="list-item-icon-e">
      <span class="label label-filled label-blue">4</span>
    </span>
  </a>
  <a href="#" class="list-item list-item-action">
    <span class="list-item-icon-s">
      <span class="label label-filled label-blue">4</span>
    </span>
    <span class="list-item-label">This is a list item</span>
    <span class="list-item-icon-e">
      <span class="label label-filled label-blue">4</span>
    </span>
  </a>
</div>
{{</example>}}
