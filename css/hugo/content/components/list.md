---
title: List
description: The list is a versatile and powerful component to showcase information, provide quick access to actions.
---

## Basic list
{{<example>}}
<ul class="list mb-3">
  <li class="list-item">This is an item</li>
  <li class="list-item">This is also an item</li>
</ul>

<ul class="list border">
  <li class="list-item">This is an item</li>
  <li class="list-item">This is also an item</li>
</ul>
{{</example>}}

## Dividers
### Global
Lists provide a few divider styles including the default `list-dividers` and `list-dividers-full` styles. These dividers are created by adding a `::before` element.

{{<example>}}
<ul class="list list-dividers border mb-3">
  <li class="list-item">This is an item</li>
  <li class="list-item">This is also an item</li>
  <li class="list-item">Yet another item</li>
</ul>
<ul class="list list-dividers-full border">
  <li class="list-item">This is an item</li>
  <li class="list-item">This is also an item</li>
  <li class="list-item">Yet another item</li>
</ul>
{{</example>}}

### Per item
If you rather have more fine-grainded control over where dividers appear, you can also use the individual classes.

{{<example>}}
<ul class="list border mb-3">
  <li class="list-item">This is an item</li>
  <li class="list-divider"></li>
  <li class="list-item">This is also an item</li>
  <li class="list-divider"></li>
  <li class="list-item">Yet another item</li>
</ul>
<ul class="list border">
  <li class="list-item">This is an item</li>
  <li class="list-divider-full"></li>
  <li class="list-item">This is also an item</li>
  <li class="list-divider-full"></li>
  <li class="list-item">Yet another item</li>
</ul>
{{</example>}}

## Actions
Need an interactive list, add the `list-item-action` class to your items.

{{<example>}}
<div class="list mb-3">
  <a href="#" class="list-item list-item-action">This is an item</a>
  <a href="#" class="list-item list-item-action">This is also an item</a>
  <a href="#" class="list-item list-item-action">Yet another item</a>
</div>
<div class="list list-dividers">
  <a href="#" class="list-item list-item-action">This is an item</a>
  <a href="#" class="list-item list-item-action">This is also an item</a>
  <a href="#" class="list-item list-item-action">Yet another item</a>
</div>
{{</example>}}

### Active
When adding the `active` class, Mellow will show an active indicator and background for the item.

{{<example>}}
<div class="list mb-3">
  <a href="#" class="list-item list-item-action">This is an item</a>
  <a href="#" class="list-item list-item-action active">This is also an item</a>
  <a href="#" class="list-item list-item-action">Yet another item</a>
</div>
{{</example>}}

### Danger
If an action requires more attention from the user because it is destructive (or any other reason) you can add the `list-item-danger` class to it.

{{<example>}}
<div class="list">
  <a href="#" class="list-item list-item-action">This is an item</a>
  <a href="#" class="list-item list-item-action">This is also an item</a>
  <a href="#" class="list-item list-item-action list-item-danger">Delete everything</a>
</div>
{{</example>}}
