---
title: Pagination
description: Show a series of pages for easy navigation in the pagination component.
section: components
---

## Usage
As a navigational item, the pagination is wrapped in a `nav` element and has its `role` attribute set to `navigation` as well as a `aria-label` to indicate the function of the pagination.

{{<example>}}
<nav aria-label="Pagination navigation" role="navigation">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#" aria-label="Previous"><i class="vi vi-angle-left"></i></a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-label="Next"><i class="vi vi-angle-right"></i></a></li>
  </ul>
</nav>
{{</example>}}

## States
Pagination often shows its state. By setting `active` to a `page-item`, the item becomes highlighted to indicate its status. Use `disabled` to disable an item.

Make sure to set `aria-current="page"` to the active list item for accessibility.

{{<example>}}
<nav aria-label="Pagination navigation" role="navigation">
  <ul class="pagination">
    <li class="page-item disabled"><a class="page-link" href="#" aria-label="Previous"><i class="vi vi-angle-left"></i></a></li>
    <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-label="Next"><i class="vi vi-angle-right"></i></a></li>
  </ul>
</nav>
{{</example>}}

## Color
Like many other components, you can change the color of the pagination by simply adding a color class.

{{<example>}}
<nav aria-label="Pagination navigation" role="navigation" class="mb-3">
  <ul class="pagination rose">
    <li class="page-item disabled"><a class="page-link" href="#" aria-label="Previous"><i class="vi vi-angle-left"></i></a></li>
    <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-label="Next"><i class="vi vi-angle-right"></i></a></li>
  </ul>
</nav>
<nav aria-label="Pagination navigation" role="navigation" class="mb-3">
  <ul class="pagination indigo">
    <li class="page-item disabled"><a class="page-link" href="#" aria-label="Previous"><i class="vi vi-angle-left"></i></a></li>
    <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-label="Next"><i class="vi vi-angle-right"></i></a></li>
  </ul>
</nav>
<nav aria-label="Pagination navigation" role="navigation">
  <ul class="pagination green">
    <li class="page-item disabled"><a class="page-link" href="#" aria-label="Previous"><i class="vi vi-angle-left"></i></a></li>
    <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-label="Next"><i class="vi vi-angle-right"></i></a></li>
  </ul>
</nav>
{{</example>}}

## Alignment
Aligning the pagination can be done through its parent.

{{<example>}}
<nav class="d-flex justify-content-start mb-3" aria-label="Pagination navigation" role="navigation">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#" aria-label="Previous"><i class="vi vi-angle-left"></i></a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-label="Next"><i class="vi vi-angle-right"></i></a></li>
  </ul>
</nav>
<nav class="d-flex justify-content-center mb-3" aria-label="Pagination navigation" role="navigation">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#" aria-label="Previous"><i class="vi vi-angle-left"></i></a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-label="Next"><i class="vi vi-angle-right"></i></a></li>
  </ul>
</nav> 
<nav class="d-flex justify-content-end" aria-label="Pagination navigation" role="navigation">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#" aria-label="Previous"><i class="vi vi-angle-left"></i></a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#" aria-label="Next"><i class="vi vi-angle-right"></i></a></li>
  </ul>
</nav>
{{</example>}}
