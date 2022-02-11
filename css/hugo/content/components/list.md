---
title: List
description: The list is a versatile and powerful component to showcase information, provide quick access to actions.
---

## About
A list is made out of its parent container with the `list` class and its individual items with the `list-item` class. The `list-item` creates a grid within the list item on which the leading action and icon, label, and trailing action and icon are positioned.

## Basic list
A basic list contains only a label.

{{<example>}}
<ul class="list mb-3">
  <li class="list-item"><span class="list-item-label">This is a list item</span></li>
  <li class="list-item"><span class="list-item-label">This is also a list item</span></li>
</ul>

<ul class="list border">
  <li class="list-item"><span class="list-item-label">This is a list item</span></li>
  <li class="list-item"><span class="list-item-label">This is also a list item</span></li>
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
  <li class="list-item"><span class="list-item-label">This is also a list item</span></li>
  <li class="list-item"><span class="list-item-label">Yet another item</span></li>
</ul>
<ul class="list list-dividers-full border">
  <li class="list-item"><span class="list-item-label">This is a list item</span></li>
  <li class="list-item"><span class="list-item-label">This is also a list item</span></li>
  <li class="list-item"><span class="list-item-label">Yet another item</span></li>
</ul>
{{</example>}}

### Per item borders
If you rather have more fine-grainded control over where dividers appear, you can also use the individual classes.

{{<example>}}
<ul class="list border mb-3">
  <li class="list-item"><span class="list-item-label">This is a list item</span></li>
  <li class="list-divider"></li>
  <li class="list-item"><span class="list-item-label">This is also a list item</span></li>
  <li class="list-divider"></li>
  <li class="list-item"><span class="list-item-label">Yet another item</span></li>
</ul>
<nav class="list border">
  <div class="list-item"><span class="list-item-label">This is a list item</span></div>
  <div class="list-divider-full"></div>
  <div class="list-item"><span class="list-item-label">This is also a list item</span></div>
  <div class="list-divider-full"></div>
  <div class="list-item"><span class="list-item-label">Yet another item</span></div>
</nav>
{{</example>}}

Note that the `list-divider` class has not the same effect as applying `list-dividers`. The `list-dividers` class will create a divider the size of the label, the `list-divider` class on the other hand will always be the full width minus a margin on the left and right side.

### Section dividers
If a section needs a text label, you can do that with `list-item-divider`. When using any of the `list-dividers-*` classes, the `list-item-divider` will have a top border over the full width of the list.

{{<example>}}
<div class="list list-dividers border mb-3">
  <div class="list-item-divider" role="presentation" id="some-unique-id" aria-hidden="true">Section Divider</div>
  <div class="list-item"><span class="list-item-label">This is a list item</span></div>
  <div class="list-item"><span class="list-item-label">This is also a list item</span></div>
  <div class="list-item-divider" role="presentation" id="some-unique-id" aria-hidden="true">Section Divider</div>
  <div class="list-item"><span class="list-item-label">Yet another item</span></div>
  <div class="list-item"><span class="list-item-label">This is a list item</span></div>
</div>
<div class="list border">
  <div class="list-item-divider" role="presentation" id="some-unique-id" aria-hidden="true">Section Divider</div>
  <div class="list-item"><span class="list-item-label">This is a list item</span></div>
  <div class="list-item"><span class="list-item-label">This is also a list item</span></div>
  <div class="list-item-divider" role="presentation" id="some-unique-id" aria-hidden="true">Section Divider</div>
  <div class="list-item"><span class="list-item-label">Yet another item</span></div>
  <div class="list-item"><span class="list-item-label">This is a list item</span></div>
</div>
{{</example>}}

## Links
Need an interactive list, add the `list-item-action` class to your items.

{{<example>}}
<div class="list mb-3">
  <a href="#" class="list-item list-item-action"><span class="list-item-label">This is a list item</span></a>
  <a href="#" class="list-item list-item-action"><span class="list-item-label">This is also a list item</span></a>
  <a href="#" class="list-item list-item-action"><span class="list-item-label">Yet another item</span></a>
</div>
<div class="list list-dividers">
  <a href="#" class="list-item list-item-action"><span class="list-item-label">This is a list item</span></a>
  <a href="#" class="list-item list-item-action"><span class="list-item-label">This is also a list item</span></a>
  <a href="#" class="list-item list-item-action"><span class="list-item-label">Yet another item</span></a>
</div>
{{</example>}}

Adding the `border` class to the list will disable the border radius for all elements except the first and last.
{{<example>}}
<div class="list border">
  <a href="#" class="list-item list-item-action"><span class="list-item-label">This is a list item</span></a>
  <a href="#" class="list-item list-item-action"><span class="list-item-label">This is also a list item</span></a>
  <a href="#" class="list-item list-item-action"><span class="list-item-label">Yet another item</span></a>
</div>
{{</example>}}

### Active
When adding the `active` class, Mellow will show an active indicator and background for the item.

{{<example>}}
<div class="list">
  <a href="#" class="list-item list-item-action"><span class="list-item-label">This is a list item</span></a>
  <a href="#" class="list-item list-item-action active"><span class="list-item-label">This is also a list item</span></a>
  <a href="#" class="list-item list-item-action"><span class="list-item-label">Yet another item</span></a>
</div>
{{</example>}}

### Danger
If an action requires more attention from the user because it is destructive (or any other reason) you can add the `list-item-danger` class to it.

{{<example>}}
<div class="list">
  <a href="#" class="list-item list-item-action"><span class="list-item-label">This is a list item</span></a>
  <a href="#" class="list-item list-item-action"><span class="list-item-label">This is also a list item</span></a>
  <a href="#" class="list-item list-item-action list-item-danger"><span class="list-item-label">Delete everything</span></a>
</div>
{{</example>}}

## Sizes
Use the `list-sm` and `list-lg` classes to change the size of the list. These classes only alter the padding of the list items.

{{<example>}}
<div class="list list-sm list-dividers mb-3">
  <div class="list-item"><span class="list-item-label">This is a list item</span></div>
  <div class="list-item"><span class="list-item-label">This is also a list item</span></div>
  <div class="list-item list-item-danger"><span class="list-item-label">Delete everything</span></div>
</div>
<div class="list list-lg list-dividers">
  <div class="list-item"><span class="list-item-label">This is a list item</span></div>
  <div class="list-item"><span class="list-item-label">This is also a list item</span></div>
  <div class="list-item list-item-danger"><span class="list-item-label">Delete everything</span></div>
</div>
{{</example>}}

## Disabled
You can disable a `list-item` by adding `disabled` to it.

{{<example>}}
<div class="list">
  <a href="#" class="list-item list-item-action disabled"><span class="list-item-label">This is a list item</span></a>
  <a href="#" class="list-item list-item-action"><span class="list-item-label">This is also a list item</span></a>
  <a href="#" class="list-item list-item-action"><span class="list-item-label">Yet another item</span></a>
</div>
{{</example>}}

## Icons
List items can have icons. These can be positioned either at the start or end of a list item by adding them into the `list-item-icon-[s|e]` classes.

{{<example>}}
<div class="list">
  <a href="#" class="list-item list-item-action">
    <span class="list-item-icon-s">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="currentColor" style="width: 20px; height: 16px; margin-top: -.25rem;"><path fill-rule="evenodd" d="M17 6.5a5.5 5.5 0 0 1-8.82 4.38L4.06 15A.75.75 0 1 1 3 13.94l4.12-4.12A5.5 5.5 0 1 1 17 6.5Zm-1.5 0a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"/></svg>
    </span>
    <span class="list-item-label">This is a list item</span>
  </a>
  <a href="#" class="list-item list-item-action">
    <span class="list-item-label">This is a list item</span>
    <span class="list-item-icon-e">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="currentColor" style="width: 20px; height: 16px; margin-top: -.25rem;"><path fill-rule="evenodd" d="M17 6.5a5.5 5.5 0 0 1-8.82 4.38L4.06 15A.75.75 0 1 1 3 13.94l4.12-4.12A5.5 5.5 0 1 1 17 6.5Zm-1.5 0a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"/></svg>
    </span>
  </a>
  <a href="#" class="list-item list-item-action">
    <span class="list-item-icon-s">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="currentColor" style="width: 20px; height: 16px; margin-top: -.25rem;"><path fill-rule="evenodd" d="M17 6.5a5.5 5.5 0 0 1-8.82 4.38L4.06 15A.75.75 0 1 1 3 13.94l4.12-4.12A5.5 5.5 0 1 1 17 6.5Zm-1.5 0a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"/></svg>
    </span>
    <span class="list-item-label">This is a list item</span>
    <span class="list-item-icon-e">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="currentColor" style="width: 20px; height: 16px; margin-top: -.25rem;"><path fill-rule="evenodd" d="M17 6.5a5.5 5.5 0 0 1-8.82 4.38L4.06 15A.75.75 0 1 1 3 13.94l4.12-4.12A5.5 5.5 0 1 1 17 6.5Zm-1.5 0a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"/></svg>
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
      <input type="checkbox" value="1" id="listItemTarget1">
    </span>
    <label class="list-item-label" for="listItemTarget1">This is a list item</label>
  </div>
  <div class="list-item">
    <label class="list-item-label" for="listItemTarget2">This is a list item</label>
    <span class="list-item-action-e">
      <input type="checkbox" value="1" id="listItemTarget2">
    </span>
  </div>
</div>
{{</example>}}

### List item as label
You can increase the size of the click target by making the entire `list-item` the label.

{{<example>}}
<div class="list">
  <label class="list-item list-item-action">
    <span class="list-item-action-s">
      <input type="checkbox" value="1">
    </span>
    <span class="list-item-label">This is a list item</span>
  </label>
  <label class="list-item list-item-action">
    <span class="list-item-label">This is a list item</span>
    <span class="list-item-action-e">
      <input type="checkbox" value="1">
    </span>
  </label>
</div>
{{</example>}}

Note that, since this is a grid, the order of the contents of a `list-item` doesn't matter, however, Mellow applies a right margin to all children that are not the last child. As a result, the child that appears visually last should also be the last child element in your HTML, otherwise it will get this margin and another child that does need it won't.

## Complex example
Of course, all of these various options can be combined into more complex layouts.

{{<example>}}
<div class="list list-lg border list-dividers">
  <label class="list-item list-item-action">
    <span class="list-item-action-s">
      <input type="radio" name="listItemRadio" value="1">
    </span>
    <span class="list-item-icon-s">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="currentColor" style="width: 20px; height: 16px; margin-top: -.25rem;"><path fill-rule="evenodd" d="M17 6.5a5.5 5.5 0 0 1-8.82 4.38L4.06 15A.75.75 0 1 1 3 13.94l4.12-4.12A5.5 5.5 0 1 1 17 6.5Zm-1.5 0a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"/></svg>
    </span>
    <span class="list-item-label">
      <span class="fw-bold">This is a list item</span><br />
      <span class="text-muted text-small">Hey, look at this</span>
    </span>
    <span class="list-item-icon-e"></span>
  </label>
  <label class="list-item list-item-action active">
    <span class="list-item-action-s">
      <input type="radio" name="listItemRadio" value="1" checked>
    </span>
    <span class="list-item-icon-s">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="currentColor" style="width: 20px; height: 16px; margin-top: -.25rem;"><path fill-rule="evenodd" d="M17 6.5a5.5 5.5 0 0 1-8.82 4.38L4.06 15A.75.75 0 1 1 3 13.94l4.12-4.12A5.5 5.5 0 1 1 17 6.5Zm-1.5 0a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"/></svg>
    </span>
    <span class="list-item-label">
      <span class="fw-bold">This is a list item</span><br />
      <span class="text-muted text-small">Hey, look at this</span>
    </span>
    <span class="list-item-icon-e">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="currentColor" style="width: 20px; height: 16px; margin-top: -.25rem;"><path fill-rule="evenodd" d="M4.5 7.83V14c0 .28.22.5.5.5h10a.5.5 0 0 0 .5-.5V7.83a.5.5 0 0 0-.15-.36l-5-5a.5.5 0 0 0-.7 0l-5 5a.5.5 0 0 0-.15.36ZM3 14V7.83a2 2 0 0 1 .59-1.42l5-5a2 2 0 0 1 2.82 0l5 5A2 2 0 0 1 17 7.83V14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/></svg>
    </span>
  </label>
  <label class="list-item list-item-action disabled">
    <span class="list-item-action-s">
      <input type="radio" name="listItemRadio" value="1" disabled>
    </span>
    <span class="list-item-icon-s">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="currentColor" style="width: 20px; height: 16px; margin-top: -.25rem;"><path d="M10.75 10.25a1.25 1.25 0 1 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Z"/><path fill-rule="evenodd" d="M13 5h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h2V3a3 3 0 0 1 6 0v2Zm-1.5 0V3a1.5 1.5 0 0 0-3 0v2h3Zm-7 2v7c0 .28.22.5.5.5h10a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5H5a.5.5 0 0 0-.5.5Z"/></svg>
    </span>
    <span class="list-item-label">
      <span class="fw-bold">This is a disabled list item</span><br />
      <span class="text-muted text-small">Hey, look at this</span>
    </span>
    <span class="list-item-icon-e">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="currentColor" style="width: 20px; height: 16px; margin-top: -.25rem;"><path fill-rule="evenodd" d="M4.5 7.83V14c0 .28.22.5.5.5h10a.5.5 0 0 0 .5-.5V7.83a.5.5 0 0 0-.15-.36l-5-5a.5.5 0 0 0-.7 0l-5 5a.5.5 0 0 0-.15.36ZM3 14V7.83a2 2 0 0 1 .59-1.42l5-5a2 2 0 0 1 2.82 0l5 5A2 2 0 0 1 17 7.83V14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/></svg>
    </span>
  </label>
</div>
{{</example>}}
