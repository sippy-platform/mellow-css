---
title: Toolbar
description: Combine various actions in a single bar.
section: components
---

## Buttons
You can combine multiple `btn-groups` into a `toolbar`. You can a also include a `btn` as a direct child, as any other component.

{{<example>}}
<div class="toolbar" role="toolbar">
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-default">Button</button>
    <button type="button" class="btn btn-default">Groups</button>
    <button type="button" class="btn btn-default">In</button>
  </div>
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-default">A</button>
    <button type="button" class="btn btn-default">Toolbar</button>
  </div>
  <button type="button" class="btn btn-danger">Single</button>
</div>
{{</example>}}

## Inputs
You can insert other elements into a toolbar too, like inputs and input groups.

{{<example class="grid grid-1">}}
<div class="toolbar" role="toolbar">
  <input type="search" class="input" placeholder="Search" />
  <button type="button" class="btn btn-primary">Search</button>
</div>
<div class="toolbar" role="toolbar">
  <div class="input-group">
    <span class="input-addon" id="prefix-addon">Prefix</span>
    <input type="text" class="input" placeholder="Prefixed" aria-label="Prefixed" aria-describedby="prefix-addon">
  </div>
  <button type="button" class="btn btn-primary">Search</button>
</div>
{{</example>}}
