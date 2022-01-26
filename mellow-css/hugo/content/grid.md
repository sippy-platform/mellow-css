---
layout: single
---

# Grid system
The grid allows you to create layouts anyway you want.

## Default grid
By default, the grid will create a CSS grid with 1 column. Every element inserted as a child will take on 1 column if no other classes are given.

**Note**: the default grid utilities are all designed for grids of up to 12 columns.

{{< example >}}
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
{{</ example >}}

## Columns

By using the `grid-*`-classes, you can tell the grid layout to change the number of columns in the grid. If no column count is defined, the grid will have only 1 column.

{{< example >}}
<div class="grid grid-5">
  <div class="col-2">2/5</div>
  <div class="col-2">2/5</div>
  <div class="col-1">1/5</div>
</div>
{{</ example >}}

## Column spans

By using the `col-*`-classes, you can tell a grid item to span multiple columns.

{{< example >}}
<div class="grid grid-12">
  <div class="col-4">1/3</div>
  <div class="col-4">1/3</div>
  <div class="col-4">1/3</div>
</div>
{{</ example >}}

## Column start position

By using the `col-start-*`-classes, you can tell a grid item to to start at a certain position in the grid.

Note that a CSS grid counts the grid lines starting at 1. The grid from the example below has 13 grid lines.

{{< example >}}
<div class="grid grid-12">
  <div class="col-3 col-start-4">start 4</div>
  <div class="col-2 col-start-9">start 9</div>
</div>
{{</ example >}}

## Wrapping

If the amount of used columns exceed the grid width, the grid will automatically wrap its contents on the next line.

{{< example >}}
<div class="grid grid-12">
  <div class="col-4">1/3</div>
  <div class="col-4">1/3</div>
  <div class="col-4">1/3</div>
  <div class="col-4">1/3</div>
  <div class="col-4">1/3</div>
  <div class="col-4">1/3</div>
</div>
{{</ example >}}