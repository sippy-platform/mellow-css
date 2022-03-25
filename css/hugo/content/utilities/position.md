---
title: Position
description: Change the position of elements with these utilities.
---

## Position
You can use the `position-*` classes to change the behavior of your elements.

{{<example show_preview="false">}}
<div class="position-absolute">...</div>
<div class="position-fixed">...</div>
<div class="position-relative">...</div>
<div class="position-static">...</div>
<div class="position-sticky">...</div>
{{</example>}}

## Positioning elements
When you want to position elements within an element, you can use these utilities.

They are built up loke `[top|end|bottom|start]-[0|50|100]`.

{{<example class="docs-preview-position">}}
<div class="position-relative">
  <div class="position-absolute bg-red top-0 start-0"></div>
  <div class="position-absolute bg-orange top-0 end-0"></div>
  <div class="position-absolute bg-yellow bottom-50 start-50"></div>
  <div class="position-absolute bg-green top-50 end-50"></div>
  <div class="position-absolute bg-blue bottom-0 start-0"></div>
  <div class="position-absolute bg-purple bottom-0 end-0"></div>
</div>
{{</example>}}

## Translate elements
With the above utilities, it is impossible to actually center elements. That's where the `translate-center` class comes in.

{{<example class="docs-preview-position">}}
<div class="position-relative">
  <div class="position-absolute bg-red top-0 start-0 translate-center"></div>
  <div class="position-absolute bg-orange top-0 start-50 translate-center"></div>
  <div class="position-absolute bg-yellow top-0 start-100 translate-center"></div>
  <div class="position-absolute bg-cyan top-50 start-0 translate-center"></div>
  <div class="position-absolute bg-green top-50 start-50 translate-center"></div>
  <div class="position-absolute bg-lime top-50 start-100 translate-center"></div>
  <div class="position-absolute bg-blue top-100 start-0 translate-center"></div>
  <div class="position-absolute bg-purple top-100 start-50 translate-center"></div>
  <div class="position-absolute bg-pink top-100 start-100 translate-center"></div>
</div>
{{</example>}}

If you only want to center on the x or y axis, you can do so with the `translate-center-[x|y]` classes.

{{<example class="docs-preview-position">}}
<div class="position-relative">
  <div class="position-absolute bg-red top-0 start-50 translate-center-x"></div>
  <div class="position-absolute bg-yellow top-50 start-0 translate-center-y"></div>
  <div class="position-absolute bg-blue top-50 end-0 translate-center-y"></div>
  <div class="position-absolute bg-green bottom-0 start-50 translate-center-x"></div>
</div>
{{</example>}}
