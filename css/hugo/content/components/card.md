---
title: Cards
description: Cards can help you structure the content on your page.
---

Cards provide you with an simple to use container for your layouts with custom styling for headings, footer, titles, buttons and more.

## Basic card
Cards are designed as simple containers, a basic `card` is built with flexbox and its position set to `relative` to provide you with easy control over alignment and positioning of its contents.

{{<example>}}
<div class="card" style="max-width: 260px">
  <div class="card-body">
    <h5 class="card-title">Heading 5</h5>
    <p>Hello world, this is a short text to show what a card can do in Mellow.</p>
  </div>
</div>
{{</example>}}

## Contents
Cards provide built-in support for a set of various content types, including headings, titles, footers, images, body, and more.

### Body
The `card-body` gives you a simple utility to space out the distance between the card's border and its content.

{{<example>}}
<div class="card">
  <div class="card-body">
    Hello world, this is a short text to show what a card can do in Mellow.
  </div>
</div>
{{</example>}}

### Title and text
Titles are given some card-specific styling by adding `card-title` to any heading-tag. For other content, no extra classes are needed, the margin of the last child in a `card-body` will by default be set to 0.

{{<example>}}
<div class="card" style="max-width: 260px">
  <div class="card-body">
    <h4 class="card-title">Heading 4</h4>
    <p>Hello world, this is a short text to show what a card can do in Mellow.</p>
  </div>
</div>
{{</example>}}

### Links
Multiple links in a card? The `card-link` class applies some extra margin to them to space them out and make them look better.

{{<example>}}
<div class="card" style="max-width: 260px">
  <div class="card-body">
    <p>Hello world, this is a short text to show what a card can do in Mellow.</p>
    <a href="#" class="card-link">Infinity</a>
    <a href="#" class="card-link">Beyond</a>
  </div>
</div>
{{</example>}}


### Headers and footers
The `card-header` and `card-footer` class adds a border and more spacing to your headers.

{{<example>}}
<div class="card" style="max-width: 260px">
  <div class="card-header">
    Hello Card
  </div>
  <div class="card-body">
    <p>Hello world, this is a short text to show what a card can do in Mellow.</p>
    <a href="#" class="card-link">Infinity</a>
    <a href="#" class="card-link">Beyond</a>
  </div>
</div>
{{</example>}}

You can also use heading tags to make your `card-header` pop more:

{{<example>}}
<div class="card" style="max-width: 260px">
  <h5 class="card-header">
    Hello Card
  </h5>
  <div class="card-body">
    <p>Hello world, this is a short text to show what a card can do in Mellow.</p>
    <a href="#" class="card-link">Infinity</a>
    <a href="#" class="card-link">Beyond</a>
  </div>
</div>
{{</example>}}

{{<example>}}
<div class="card" style="max-width: 260px">
  <div class="card-body">
    <p>Hello world, this is a short text to show what a card can do in Mellow.</p>
    <a href="#" class="card-link">Infinity</a>
    <a href="#" class="card-link">Beyond</a>
  </div>
  <div class="card-footer">
    Bye Card
  </div>
</div>
{{</example>}}

## Alignment
Like all other components, the card component can be manipulated with the text alignment utilities.

{{<example>}}
<div class="grid grid-1 grid-md-2 grid-xxl-3">
  <div class="card text-start">
    <div class="card-body">
      <h5 class="card-title">Heading 5</h5>
      <p>Hello world, this is a short text to show what a card can do in Mellow.</p>
      <a href="#" class="btn btn-default">Button</a>
    </div>
  </div>
  <div class="card text-center">
    <div class="card-body">
      <h5 class="card-title">Heading 5</h5>
      <p>Hello world, this is a short text to show what a card can do in Mellow.</p>
      <a href="#" class="btn btn-default">Button</a>
    </div>
  </div>
  <div class="card text-end">
    <div class="card-body">
      <h5 class="card-title">Heading 5</h5>
      <p>Hello world, this is a short text to show what a card can do in Mellow.</p>
      <a href="#" class="btn btn-default">Button</a>
    </div>
  </div>
</div>
{{</example>}}

## Size
Card by default take as much width as is available to them.

### Grid
An easy way to manipulate the width of a card in a responsive setting is by inserting them into a grid.

{{<example>}}
<div class="grid grid-1 grid-md-2">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Heading 5</h5>
      <p>Hello world, this is a short text to show what a card can do in Mellow.</p>
      <a href="#" class="btn btn-default">Button</a>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Heading 5</h5>
      <p>Hello world, this is a short text to show what a card can do in Mellow.</p>
      <a href="#" class="btn btn-default">Button</a>
    </div>
  </div>
</div>
{{</example>}}

### Utilities
Alternatively, you can use the utility classes.

{{<example>}}
<div class="card w-50">
  <div class="card-body">
    <h5 class="card-title">Heading 5</h5>
    <p>Hello world, this is a short text to show what a card can do in Mellow.</p>
    <a href="#" class="btn btn-default">Button</a>
  </div>
</div>
<div class="card w-25">
  <div class="card-body">
    <h5 class="card-title">Heading 5</h5>
    <p>Hello world, this is a short text to show what a card can do in Mellow.</p>
    <a href="#" class="btn btn-default">Button</a>
  </div>
</div>
{{</example>}}

### (Inline) CSS
Or you can use inline CSS, our "[Basic card](/components/card/#basic-card)" example uses this approach.
