---
title: Grid
description: The grid allows you to create layouts anyway you want.
---

## Grid columns
By default, the grid will create a CSS grid with 1 column. Every element inserted as a child will take on 1 column if no other classes are given.

**Note**: the default grid utilities are all designed for grids of up to 12 columns.

{{<example class="docs-preview-grid">}}
<div class="grid grid-12">
  <div>1/12</div>
  <div>1/12</div>
  <div>1/12</div>
  <div>1/12</div>
  <div>1/12</div>
  <div>1/12</div>
  <div>1/12</div>
  <div>1/12</div>
  <div>1/12</div>
  <div>1/12</div>
  <div>1/12</div>
  <div>1/12</div>
</div>
{{</example>}}

By using the `grid-*` classes, you can tell the grid layout to change the number of columns in the grid. If no column count is defined, the grid will have only 1 column.

{{<example class="docs-preview-grid">}}
<div class="grid grid-5">
  <div class="col-2">2/5</div>
  <div class="col-2">2/5</div>
  <div class="col-1">1/5</div>
</div>
{{</example>}}

### Responsive classes
Mellow also provides support for changing the number of columns based on the viewport with with breakpoings.

{{<example class="docs-preview-grid">}}
<div class="grid grid-3 grid-md-5">
  <div class="col-1">1/3 md:1/5</div>
</div>
{{</example>}}

## Column spans
By using the `col-*` classes, you can tell a grid item to span multiple columns.

{{<example class="docs-preview-grid">}}
<div class="grid grid-12">
  <div class="col-4">1/3</div>
  <div class="col-4">1/3</div>
  <div class="col-4">1/3</div>
</div>
{{</example>}}

### Responsive classes
The grid also provides a set of responsive classes to change the column span depending on the size of the viewport.

{{<example class="docs-preview-grid">}}
<div class="grid grid-12">
  <div class="col-4 col-md-6">1/3 md:1/2</div>
  <div class="col-4 col-md-3">1/3 md:1/4</div>
  <div class="col-4 col-md-3">1/3 md:1/4</div>
</div>
{{</example>}}

## Column start position
By using the `col-start-*` classes, you can tell a grid item to to start at a certain position in the grid. When a grid item starts at a point an earlier grid item already occupies space, it will wrap into the next column.

Note that a CSS grid counts the grid lines starting at 1. The grid from the example below has 13 grid lines.

{{<example class="docs-preview-grid">}}
<div class="grid grid-12">
  <div class="col-3 col-start-4">start 4</div>
  <div class="col-2 col-start-9">start 9</div>
  <div class="col-2 col-start-8">start 8</div>
  <div class="col-1 col-start-12">start 4</div>
</div>
{{</example>}}

### Responsive classes
Once more, the start position classes also provide responsive variants.

{{<example class="docs-preview-grid">}}
<div class="grid grid-12">
  <div class="col-3 col-start-4 col-start-md-8">start 4 md:8</div>
</div>
{{</example>}}

## Wrapping
If the amount of used columns exceed the grid width, the grid will automatically wrap its contents on the next line.

{{<example class="docs-preview-grid">}}
<div class="grid grid-12">
  <div class="col-4">1/3</div>
  <div class="col-4">1/3</div>
  <div class="col-4">1/3</div>
  <div class="col-4">1/3</div>
  <div class="col-4">1/3</div>
  <div class="col-4">1/3</div>
</div>
{{</example>}}

## Gap
By default, the grid will create a gap of `1rem`. The `gap-*` classes can be used to change the size of the gap. The `gap-*`-utility classes range between 0 and 5 and generate values of `0rem`, `25rem`, `5rem`, `1rem`, `1.5rem`, and `3rem` respectivly.

{{<example class="docs-preview-grid">}}
<div class="grid grid-12 gap-0">
  <div class="col-4">1/3</div>
  <div class="col-4">1/3</div>
  <div class="col-4">1/3</div>
</div>
{{</example>}}

### Responsive classes
Like every other grid class, the `gap-*` classes are also responsive.

{{<example class="docs-preview-grid">}}
<div class="grid grid-12 gap-2 gap-md-4">
  <div class="col-4">gap 2 md:4</div>
  <div class="col-4">gap 2 md:4</div>
  <div class="col-4">gap 2 md:4</div>
</div>
{{</example>}}
