---
title: Toolbar
description: Combine various actions in a single bar.
section: components
---

## Toolbar
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
