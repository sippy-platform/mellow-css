---
title: Pagination
description: Show a series of pages for easy navigation in the pagination component.
---

## Usage
As a navigational item, the pagination is wrapped in a `nav` element and has its `role` attribute set to `navigation` as well as a `aria-label` to indicate the function of the pagination.

{{<example>}}
<nav aria-label="Pagination navigation" role="navigation">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
{{</example>}}

## States
Pagination often shows its state. By setting `active` to a `page-item`, the item becomes highlighted to indicate its status. Use `disabled` to disable an item.

Make sure to set `aria-current="page"` to the active list item for accessibility.

{{<example>}}
<nav aria-label="Pagination navigation" role="navigation">
  <ul class="pagination">
    <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
{{</example>}}

## Alignment
The `pagination` class makes the list a flex box element, as a result, you can align the pagination with the flex utilities.

{{<example>}}
<nav aria-label="Pagination navigation" role="navigation" class="mb-3">
  <ul class="pagination justify-content-start">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
<nav aria-label="Pagination navigation" role="navigation" class="mb-3">
  <ul class="pagination justify-content-center">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav> 
<nav aria-label="Pagination navigation" role="navigation">
  <ul class="pagination justify-content-end">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
{{</example>}}