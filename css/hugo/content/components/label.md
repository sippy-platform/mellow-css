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
<span class="label red">Red</span>
<span class="label orange">Orange</span>
<span class="label amber">Amber</span>
<span class="label yellow">Yellow</span>
<span class="label lime">Lime</span>
<span class="label green">Green</span>
<span class="label teal">Teal</span>
<span class="label cyan">Cyan</span>
<span class="label blue">Blue</span>
<span class="label indigo">Indigo</span>
<span class="label violet">Violet</span>
<span class="label purple">Purple</span>
<span class="label pink">Pink</span>
<span class="label rose">Rose</span>
<span class="label brown">Brown</span>
<span class="label grey">Grey</span>
{{</example>}}

### Filled variant
{{<example>}}
<span class="label label-filled red">Red</span>
<span class="label label-filled orange">Orange</span>
<span class="label label-filled amber">Amber</span>
<span class="label label-filled yellow">Yellow</span>
<span class="label label-filled lime">Lime</span>
<span class="label label-filled green">Green</span>
<span class="label label-filled teal">Teal</span>
<span class="label label-filled cyan">Cyan</span>
<span class="label label-filled blue">Blue</span>
<span class="label label-filled indigo">Indigo</span>
<span class="label label-filled violet">Violet</span>
<span class="label label-filled purple">Purple</span>
<span class="label label-filled pink">Pink</span>
<span class="label label-filled rose">Rose</span>
<span class="label label-filled brown">Brown</span>
<span class="label label-filled grey">Grey</span>
{{</example>}}

## Sizing
Badges scale with the text of their parent.

{{<example>}}
<h1>Heading 1 <span class="label rose">Label</span></h1>
<h2>Heading 2 <span class="label red">Label</span></h2>
<h3>Heading 3 <span class="label orange">Label</span></h3>
<h4>Heading 4 <span class="label amber">Label</span></h4>
<h5>Heading 5 <span class="label yellow">Label</span></h5>
<h6>Heading 6 <span class="label brown">Label</span></h6>
{{</example>}}

{{<example>}}
<h1>Heading 1 <span class="label purple rounded-pill">Label</span></h1>
<h2>Heading 2 <span class="label violet rounded-pill">Label</span></h2>
<h3>Heading 3 <span class="label indigo rounded-pill">Label</span></h3>
<h4>Heading 4 <span class="label blue rounded-pill">Label</span></h4>
<h5>Heading 5 <span class="label cyan rounded-pill">Label</span></h5>
<h6>Heading 6 <span class="label teal rounded-pill">Label</span></h6>
{{</example>}}

## Usage
### Buttons
{{<example>}}
<button type="button" class="btn btn-primary">
  Registrations <span class="label label-filled red">4</span>
</button>
{{</example>}}

### Positioning
{{<example>}}
<button type="button" class="btn btn-primary position-relative">
  Mails
  <span class="position-absolute top-0 start-100 translate-center label label-filled red rounded-pill">
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
      <span class="label label-filled blue">4</span>
    </span>
    <span class="list-item-label">This is a list item</span>
  </a>
  <a href="#" class="list-item list-item-action">
    <span class="list-item-label">This is a list item</span>
    <span class="list-item-icon-e">
      <span class="label blue">4</span>
    </span>
  </a>
  <a href="#" class="list-item list-item-action">
    <span class="list-item-icon-s">
      <span class="label blue">4</span>
    </span>
    <span class="list-item-label">This is a list item</span>
    <span class="list-item-icon-e">
      <span class="label label-filled blue">4</span>
    </span>
  </a>
</div>
{{</example>}}
