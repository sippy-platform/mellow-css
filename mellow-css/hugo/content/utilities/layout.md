---
title: Layout
description: Alter the document layout with these utilities.
---

## Display
The `d-*`-classes allow you to control what display type an element should be. Like many other utilities, these have responsive variants in the form of `d-<breakpoint>-*`.

{{<example>}}
<div class="d-none">
  .d-none
</div>
<div class="d-inline border">
  .d-inline
  <div class="d-inline-block border">
    .d-inline-block
  </div>
</div>
<span class="d-block border">.d-block</span>
<div class="d-flex border">.d-flex
  <div class="d-inline-flex border">.d-inline-flex</div>
</div>
<div class="d-grid border">.d-grid</div>
{{</example>}}

## Float
Use the `.float-start` and `.float-end` classes to set floats, and `.clearfix` to clear. The float classes also have support for responsive variants in the form of `float-<breakpoint>-*`.

{{<example>}}
<div class="clearfix border">
  <div class="float-start border">
    .float-start
  </div>
  <div class="float-end border">
    .float-end
  </div>
  <div class="float-none border">
    .float-none
  </div>
</div>
{{</example>}}
