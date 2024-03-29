---
title: List
description: The list is a versatile and powerful component to showcase information, provide quick access to actions.
section: components
---

## About
A list is made out of its parent container with the `list` class and its individual items with the `list-item` class. The `list-item` creates a grid within the list item on which the leading action and icon, label, and trailing action and icon are positioned.

## Basic list
A basic list contains only a label.

{{<example>}}
<ul class="list mb-3">
  <li class="list-item"><span class="list-item-label">This is a list item</span></li>
  <li class="list-item">
    <span class="list-item-label">This is also a list item</span>
    <span class="list-item-description">This is the description</span>
  </li>
</ul>

<ul class="list border">
  <li class="list-item"><span class="list-item-label">This is a list item</span></li>
  <li class="list-item">
    <span class="list-item-label">This is also a list item</span>
    <span class="list-item-description">This is the description</span>
  </li>
</ul>
{{</example>}}

### `nav` example
You can also make this with the `nav` element.

{{<example>}}
<nav class="list">
  <div class="list-item"><span class="list-item-label">This is a list item</span></div>
  <div class="list-item"><span class="list-item-label">This is also a list item</span></div>
</nav>
{{</example>}}

## Dividers
### Global borders
Lists provide a few divider styles including the default `list-dividers` and `list-dividers-full` styles. These dividers are created by adding a `::before` element. Unlike many implementations you see of styles like this, we actually still use the `border` property instead of creating a `1px` high element and giving it a background.

{{<example>}}
<ul class="list list-dividers border mb-3">
  <li class="list-item"><span class="list-item-label">This is a list item</span></li>
  <li class="list-item">
    <span class="list-item-label">This is also a list item</span>
    <span class="list-item-description">This is the description</span>
  </li>
  <li class="list-item"><span class="list-item-label">Yet another item</span></li>
</ul>
<ul class="list list-dividers-full border">
  <li class="list-item"><span class="list-item-label">This is a list item</span></li>
  <li class="list-item">
    <span class="list-item-label">This is also a list item</span>
    <span class="list-item-description">This is the description</span>
  </li>
  <li class="list-item"><span class="list-item-label">Yet another item</span></li>
</ul>
{{</example>}}

### Per item borders
If you rather have more fine-grainded control over where dividers appear, you can also use the individual classes.

{{<example>}}
<ul class="list border mb-3">
  <li class="list-item"><span class="list-item-label">This is a list item</span></li>
  <li class="list-divider" role="separator"></li>
  <li class="list-item">
    <span class="list-item-label">This is also a list item</span>
    <span class="list-item-description">This is the description</span>
  </li>
  <li class="list-divider" role="separator"></li>
  <li class="list-item"><span class="list-item-label">Yet another item</span></li>
</ul>
<nav class="list border">
  <div class="list-item"><span class="list-item-label">This is a list item</span></div>
  <div class="list-divider-full" role="separator"></div>
  <li class="list-item">
    <span class="list-item-label">This is also a list item</span>
    <span class="list-item-description">This is the description</span>
  </li>
  <div class="list-divider-full" role="separator"></div>
  <div class="list-item"><span class="list-item-label">Yet another item</span></div>
</nav>
{{</example>}}

Note that the `list-divider` class has not the same effect as applying `list-dividers`. The `list-dividers` class will create a divider the size of the label, the `list-divider` class on the other hand will always be the full width minus a margin on the left and right side.

### Section dividers
If a section needs a text label, you can do that with `list-item-divider`. When using any of the `list-dividers-*` classes, the `list-item-divider` will have a top border over the full width of the list.

{{<example>}}
<div class="list list-dividers border mb-3">
  <div class="list-item-divider" role="presentation" id="some-unique-id" aria-hidden="true">Section divider</div>
  <div class="list-item"><span class="list-item-label">This is a list item</span></div>
  <li class="list-item">
    <span class="list-item-label">This is also a list item</span>
    <span class="list-item-description">This is the description</span>
  </li>
  <div class="list-item-divider" role="presentation" id="some-unique-id" aria-hidden="true">Section divider<span class="list-item-divider-description">Section description</span></div>
  <div class="list-item"><span class="list-item-label">Yet another item</span></div>
  <div class="list-item"><span class="list-item-label">This is a list item</span></div>
</div>
<div class="list border">
  <div class="list-item-divider" role="presentation" id="some-unique-id" aria-hidden="true">Section divider</div>
  <div class="list-item"><span class="list-item-label">This is a list item</span></div>
  <li class="list-item">
    <span class="list-item-label">This is also a list item</span>
    <span class="list-item-description">This is the description</span>
  </li>
  <div class="list-item-divider" role="presentation" id="some-unique-id" aria-hidden="true">Section divider<span class="list-item-divider-description">Section description</span></div>
  <div class="list-item"><span class="list-item-label">Yet another item</span></div>
  <div class="list-item"><span class="list-item-label">This is a list item</span></div>
</div>
{{</example>}}

## Links
{{<example>}}
<div class="list mb-3">
  <a href="#" class="list-item"><span class="list-item-label">This is a list item</span></a>
  <a href="#" class="list-item">
    <span class="list-item-label">This is also a list item</span>
    <span class="list-item-description">This is the description</span>
  </a>
  <a href="#" class="list-item"><span class="list-item-label">Yet another item</span></a>
</div>
<div class="list list-dividers">
  <a href="#" class="list-item"><span class="list-item-label">This is a list item</span></a>
  <a href="#" class="list-item">
    <span class="list-item-label">This is also a list item</span>
    <span class="list-item-description">This is the description</span>
  </a>
  <a href="#" class="list-item"><span class="list-item-label">Yet another item</span></a>
</div>
{{</example>}}

Adding the `border` class to the list will disable the border radius for all elements except the first and last.
{{<example>}}
<div class="list border">
  <a href="#" class="list-item"><span class="list-item-label">This is a list item</span></a>
  <a href="#" class="list-item">
    <span class="list-item-label">This is also a list item</span>
    <span class="list-item-description">This is the description</span>
  </a>
  <a href="#" class="list-item"><span class="list-item-label">Yet another item</span></a>
</div>
{{</example>}}

### Active
When adding the `active` class, Mellow will show an active indicator and background for the item.

{{<example>}}
<div class="list">
  <a href="#" class="list-item"><span class="list-item-label">This is a list item</span></a>
  <a href="#" class="list-item active">
    <span class="list-item-label">This is also a list item</span>
    <span class="list-item-description">This is the description</span>
  </a>
  <a href="#" class="list-item"><span class="list-item-label">Yet another item</span></a>
</div>
{{</example>}}

## Color
Like many other controls, lists support the color classes. By default, a color class will only affect the active marker.

{{<example>}}
<div class="list green">
  <a href="#" class="list-item active"><span class="list-item-label">Inherit the green list color</span></a>
  <a href="#" class="list-item active"><span class="list-item-label">Also inherits the green list color</span></a>
  <a href="#" class="list-item active orange"><span class="list-item-label">Overwrites with orange</span></a>
</div>
{{</example>}}

### Full color
If an action requires more attention from the user then the `list-item-colored` class can be used. This will color the text, but also changes the background color on hover and active state.

{{<example>}}
<div class="list">
  <a href="#" class="list-item"><span class="list-item-label">This is a list item</span></a>
  <a href="#" class="list-item list-item-colored active green">
    <span class="list-item-label">This is also a list item</span>
    <span class="list-item-description">This is the description</span>
  </a>
  <a href="#" class="list-item list-item-colored red"><span class="list-item-label">Delete everything</span></a>
</div>
{{</example>}}

## Sizes
Use the `list-sm` and `list-lg` classes to change the size of the list. These classes only alter the padding of the list items.

{{<example>}}
<div class="list list-sm list-dividers mb-3">
  <div class="list-item"><span class="list-item-label">This is a list item</span></div>
  <div class="list-item"><span class="list-item-label">This is also a list item</span></div>
  <div class="list-item list-item-colored red"><span class="list-item-label">Delete everything</span></div>
</div>
<div class="list list-lg list-dividers">
  <div class="list-item"><span class="list-item-label">This is a list item</span></div>
  <div class="list-item"><span class="list-item-label">This is also a list item</span></div>
  <div class="list-item list-item-colored red"><span class="list-item-label">Delete everything</span></div>
</div>
{{</example>}}

## Disabled
You can disable a `list-item` by adding `disabled` to it.

{{<example>}}
<div class="list">
  <a href="#" class="list-item disabled"><span class="list-item-label">This is a list item</span></a>
  <a href="#" class="list-item"><span class="list-item-label">This is also a list item</span></a>
  <a href="#" class="list-item"><span class="list-item-label">Yet another item</span></a>
</div>
{{</example>}}

## Icons
List items can have icons. These can be positioned either at the start or end of a list item by adding them into the `list-item-icon-[s|e]` classes.

{{<example>}}
<div class="list">
  <a href="#" class="list-item">
    <span class="list-item-icon-s">
      <i class="vi vi-magnifying-glass"></i>
    </span>
    <span class="list-item-label">This is a list item</span>
  </a>
  <a href="#" class="list-item">
    <span class="list-item-label">This is a list item</span>
    <span class="list-item-icon-e">
      <i class="vi vi-magnifying-glass"></i>
    </span>
  </a>
  <a href="#" class="list-item">
    <span class="list-item-icon-s">
      <i class="vi vi-magnifying-glass"></i>
    </span>
    <span class="list-item-label">This is a list item</span>
    <span class="list-item-icon-e">
      <i class="vi vi-magnifying-glass"></i>
    </span>
  </a>
</div>
{{</example>}}

Note that, since this is a grid, the order of the contents of a `list-item` doesn't matter, however, Mellow applies a right margin to all children that are not the last child. As a result, the child that appears visually last should also be the last child element in your HTML, otherwise it will get this margin and another child that does need it won't.

## Actions
List items can have actions like checkboxes. These can be positioned either at the start or end of a list item by adding them into the `list-item-action-[s|e]` classes.

### Text as label
{{<example>}}
<div class="list">
  <div class="list-item">
    <span class="list-item-action-s">
      <input type="checkbox" class="input-check" value="1" id="listItemTarget1">
    </span>
    <label class="list-item-label" for="listItemTarget1">This is a list item</label>
  </div>
  <div class="list-item">
    <label class="list-item-label" for="listItemTarget2">This is a list item</label>
    <span class="list-item-action-e">
      <input type="checkbox" class="input-check" value="1" id="listItemTarget2">
    </span>
  </div>
</div>
{{</example>}}

### List item as label
You can increase the size of the click target by making the entire `list-item` the label.

{{<example>}}
<div class="list">
  <label class="list-item">
    <span class="list-item-action-s">
      <input type="checkbox" class="input-check" value="1">
    </span>
    <span class="list-item-label">This is a list item</span>
  </label>
  <label class="list-item">
    <span class="list-item-label">This is a list item</span>
    <span class="list-item-action-e">
      <input type="checkbox" class="input-check" value="1">
    </span>
  </label>
</div>
{{</example>}}

Note that, since this is a grid, the order of the contents of a `list-item` doesn't matter, however, Mellow applies a right margin to all children that are not the last child. As a result, the child that appears visually last should also be the last child element in your HTML, otherwise it will get this margin and another child that does need it won't.

## Complex example
Of course, all of these various options can be combined into more complex layouts.

{{<example>}}
<div class="list list-lg border list-dividers cyan">
  <label class="list-item">
    <span class="list-item-action-s">
      <input type="radio" class="input-check" name="listItemRadio" value="1">
    </span>
    <span class="list-item-icon-s">
      <i class="vi vi-magnifying-glass"></i>
    </span>
    <span class="list-item-label fw-bold">This is a list item</span>
    <span class="list-item-description">Hey, look at this</span>
    <span class="list-item-icon-e"></span>
  </label>
  <label class="list-item active">
    <span class="list-item-action-s">
      <input type="radio" class="input-check" name="listItemRadio" value="1" checked>
    </span>
    <span class="list-item-icon-s">
      <i class="vi vi-magnifying-glass"></i>
    </span>
    <span class="list-item-label fw-bold">This is a list item</span>
    <span class="list-item-description">Hey, look at this</span>
    <span class="list-item-icon-e">
      <i class="vi vi-house"></i>
    </span>
  </label>
  <label class="list-item disabled">
    <span class="list-item-action-s">
      <input type="radio" class="input-check" name="listItemRadio" value="1" disabled>
    </span>
    <span class="list-item-icon-s">
      <i class="vi vi-lock"></i>
    </span>
    <span class="list-item-label fw-bold">This is a list item</span>
    <span class="list-item-description">Hey, look at this</span>
    <span class="list-item-icon-e">
      <i class="vi vi-house"></i>
    </span>
  </label>
  <div class="list-item-divider" role="presentation" id="some-unique-id" aria-hidden="true">Section divider<span class="list-item-divider-description">Section description</span></div>
  <a class="list-item list-item-colored red" href="#">
    <span class="list-item-icon-s">
      <i class="vi vi-trash-can"></i>
    </span>
    <span class="list-item-label">Remove all</span>
  </a>
</div>
{{</example>}}
