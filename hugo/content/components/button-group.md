---
title: Button group
description: Group buttons together in a row to indicate their relation.
section: components
---

## Simple group
Wrap your buttons with a `btn-group` to make them appear as a single unit.

{{<example>}}
<div class="btn-group" role="group">
  <button type="button" class="btn btn-default">Button</button>
  <button type="button" class="btn btn-default">Button</button>
  <button type="button" class="btn btn-default">Button</button>
</div>
{{</example>}}

You can chain multiple different styles together.

{{<example>}}
<div class="btn-group" role="group">
  <button type="button" class="btn btn-default">Button</button>
  <button type="button" class="btn btn-secondary">Button</button>
  <button type="button" class="btn btn-primary">Button</button>
</div>
{{</example>}}

## Sizes
While setting the individual button sizes is supported, you can also set the button size for the entire group with the `btn-group-sm` and `btn-group-lg` classes.

{{<example>}}
<div class="btn-group btn-group-sm" role="group">
  <button type="button" class="btn btn-default">Small</button>
  <button type="button" class="btn btn-default">Button</button>
  <button type="button" class="btn btn-default">Group</button>
</div>
{{</example>}}

{{<example>}}
<div class="btn-group btn-group-lg" role="group">
  <button type="button" class="btn btn-default">Large</button>
  <button type="button" class="btn btn-default">Button</button>
  <button type="button" class="btn btn-default">Group</button>
</div>
{{</example>}}
