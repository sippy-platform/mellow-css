---
title: Labels
description: Highlight meta data on your pages.
section: components
---

## Introduction
Labels appear as slightly smaller fonts inside a colored or bordered surface.

{{<example>}}
<span class="label">default label</span>
<span class="label label-plated">plated label</span>
<span class="label label-solid">solid label</span>
{{</example>}}

### Pill
By using the `rounded-pill` class you can make a rounded variant. The rounded variant of a pill will have more padding on the left and right side.

{{<example>}}
<span class="label rounded-pill">default label</span>
<span class="label label-plated rounded-pill">plated label</span>
<span class="label label-solid rounded-pill">solid label</span>
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

### Plated variant
{{<example>}}
<span class="label label-plated red">Red</span>
<span class="label label-plated orange">Orange</span>
<span class="label label-plated amber">Amber</span>
<span class="label label-plated yellow">Yellow</span>
<span class="label label-plated lime">Lime</span>
<span class="label label-plated green">Green</span>
<span class="label label-plated teal">Teal</span>
<span class="label label-plated cyan">Cyan</span>
<span class="label label-plated blue">Blue</span>
<span class="label label-plated indigo">Indigo</span>
<span class="label label-plated violet">Violet</span>
<span class="label label-plated purple">Purple</span>
<span class="label label-plated pink">Pink</span>
<span class="label label-plated rose">Rose</span>
<span class="label label-plated brown">Brown</span>
<span class="label label-plated grey">Grey</span>
{{</example>}}

### Solid variant
{{<example>}}
<span class="label label-solid red">Red</span>
<span class="label label-solid orange">Orange</span>
<span class="label label-solid amber">Amber</span>
<span class="label label-solid yellow">Yellow</span>
<span class="label label-solid lime">Lime</span>
<span class="label label-solid green">Green</span>
<span class="label label-solid teal">Teal</span>
<span class="label label-solid cyan">Cyan</span>
<span class="label label-solid blue">Blue</span>
<span class="label label-solid indigo">Indigo</span>
<span class="label label-solid violet">Violet</span>
<span class="label label-solid purple">Purple</span>
<span class="label label-solid pink">Pink</span>
<span class="label label-solid rose">Rose</span>
<span class="label label-solid brown">Brown</span>
<span class="label label-solid grey">Grey</span>
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
  Registrations <span class="label label-solid red">4</span>
</button>
{{</example>}}

### Positioning
{{<example>}}
<button type="button" class="btn btn-primary position-relative">
  Mails
  <span class="position-absolute top-0 start-100 translate-center label label-solid red rounded-pill">
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
      <span class="label label-solid blue">4</span>
    </span>
    <span class="list-item-label">This is a list item</span>
  </a>
  <a href="#" class="list-item list-item-action">
    <span class="list-item-label">This is a list item</span>
    <span class="list-item-icon-e">
      <span class="label label-plated blue">4</span>
    </span>
  </a>
  <a href="#" class="list-item list-item-action">
    <span class="list-item-icon-s">
      <span class="label blue">4</span>
    </span>
    <span class="list-item-label">This is a list item</span>
    <span class="list-item-icon-e">
      <span class="label label-solid blue">4</span>
    </span>
  </a>
</div>
{{</example>}}
