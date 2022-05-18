---
title: Grid
description: The grid allows you to create layouts anyway you want.
section: layout
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

### Custom grid counts
While the grid classes are limited to 12, you can create grids with as much columns as you'd like by simply setting the `--columns` variable.

{{<example class="docs-preview-grid">}}
<div class="grid" style="--columns: 13">
  <div>1/13</div>
  <div>1/13</div>
  <div>1/13</div>
  <div>1/13</div>
  <div>1/13</div>
  <div>1/13</div>
  <div>1/13</div>
  <div>1/13</div>
  <div>1/13</div>
  <div>1/13</div>
  <div>1/13</div>
  <div>1/13</div>
  <div>1/13</div>
</div>
{{</example>}}

If you prefer classes, this will help you make additional classes without the need of deeper knowledge for how the grid is being defined.

{{<example class="docs-preview-grid" show_preview="false" lang="scss">}}
.grid-13 {
  --columns: 13;
}
{{</example>}}

Alternatively, you can also change the SCSS variables to make Mellow generate the full suit of classes. The grid columns and utilities can be configured separately from each other but the utility classes will follow the number of columns by default.

{{<example class="docs-preview-grid" show_preview="false" lang="scss">}}
$grid-columns: 13 !default;
$grid-utility-columns: $grid-columns !default;
{{</example>}}

This will generate the `grid-[breakpoint]-13` classes (controlled by the `$grid-columns` variable), as well as the `col-[breakpoint]-13` and `col-start-[breakpoint]-13` (controlled by the `$grid-utility-columns` variable).

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

### Full width
Imagen you have a grid with cards for which the grids column count changes based on the width of the viewport. There are grid items in there that always have to span the full width of the grid. In this scenario the `col-[breakpoints]-full` class is what you're looking for. The demo below shows how you'd do this with and without the class to show is functionality.

{{<example class="docs-preview-grid">}}
<div class="grid grid-1 grid-sm-2 grid-md-3 grid-lg-4 grid-xl-5 grid-ul-6">
  <div>Unit</div>
  <div>Unit</div>
  <div>Unit</div>
  <div>Unit</div>
  <div>Unit</div>
  <div>Unit</div>
  <div>Unit</div>
  <div class="col-full">Title</div>
  <div>Unit</div>
  <div>Unit</div>
  <div>Unit</div>
  <div>Unit</div>
  <div>Unit</div>
  <div>Unit</div>
  <div>Unit</div>
  <div class="col-sm-2 col-md-3 col-lg-4 col-xl-5 col-ul-6">Title</div>
  <div>Unit</div>
  <div>Unit</div>
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

## Order
With the order-utility classes, you can change the order in which items are inserted into the grid.

* `order-[breakpoint]-first`
* `order-[breakpoint]-[0-5]`
* `order-[breakpoint]-last`

{{<example class="docs-preview-grid">}}
<div class="grid grid-5">
  <div class="order-0">1</div>
  <div class="order-1">2</div>
  <div class="order-3">3</div>
  <div class="order-2">4</div>
  <div class="order-4">5</div>
</div>
{{</example>}}

You can use `order-first` and `order-last` to set an item to the first or last position. The `order-last` class sets the order position to `6`, so you can still overwrite this by manually setting a higher order.

{{<example class="docs-preview-grid">}}
<div class="grid grid-5 mb-3">
  <div class="order-0">1</div>
  <div class="order-1">2</div>
  <div class="order-first">3</div>
  <div class="order-2">4</div>
  <div class="order-4">5</div>
</div>
<div class="grid grid-5">
  <div class="order-0">1</div>
  <div class="order-1">2</div>
  <div class="order-last">3</div>
  <div class="order-2">4</div>
  <div class="order-4">5</div>
</div>
{{</example>}}

**Note**: by default, grid items behave as if `order: 0` has been set to them. This means that the `order`-utility classes only work relative to eachother. For example, setting `order-2` to the third item and no classes to any other column will result in the 3rd item being moved to the end of the line.

{{<example class="docs-preview-grid">}}
<div class="grid grid-5">
  <div>1</div>
  <div>2</div>
  <div class="order-2">3</div>
  <div>4</div>
  <div>5</div>
</div>
{{</example>}}
