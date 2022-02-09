---
title: Sizing
description: With the sizing utilities you can change the width and height of elements.
---

## Relative to parent

### Width
{{<example>}}
<div class="w-25 bg-light p-3">.w-25</div>
<div class="w-50 bg-light p-3">.w-50</div>
<div class="w-75 bg-light p-3">.w-75</div>
<div class="w-100 bg-light p-3">.w-100</div>
<div class="w-auto bg-light p-3">.w-auto</div>
{{</example>}}

### Height
{{<example>}}
<div style="height: 120px">
  <div class="h-25 bg-light d-inline-block px-3 py-1">.h-25</div>
  <div class="h-50 bg-light d-inline-block px-3 py-1">.h-50</div>
  <div class="h-75 bg-light d-inline-block px-3 py-1">.h-75</div>
  <div class="h-100 bg-light d-inline-block px-3 py-1">.h-100</div>
  <div class="h-auto bg-light d-inline-block px-3 py-1">.h-auto</div>
</div>
{{</example>}}

### Max width and height
Mellow also provides utility classes for max width and height.

{{<example>}}
<div class="max-w-0 bg-light p-3">.max-w-0</div>
<div class="max-w-100 bg-light p-3">.max-w-100</div>
{{</example>}}

{{<example>}}
<div style="height: 120px">
  <div class="max-h-0 bg-light d-inline-block px-3 py-1">.max-h-0</div>
  <div class="max-h-100 bg-light d-inline-block px-3 py-1">.max-h-100</div>
</div>
{{</example>}}


### Min width and height
Where there is max, there is also min, and we've got those classes too.

{{<example>}}
<div class="min-w-0 bg-light p-3">.min-w-0</div>
<div class="min-w-100 bg-light p-3">.min-w-100</div>
{{</example>}}

{{<example>}}
<div style="height: 120px">
  <div class="min-h-0 bg-light d-inline-block px-3 py-1">.min-h-0</div>
  <div class="min-h-100 bg-light d-inline-block px-3 py-1">.min-h-100</div>
</div>
{{</example>}}

## Relatie to viewport
You can also use these properties relative to the viewport. Note that there is no `max`-variant for these.

{{<example show_preview="false">}}
<div class="vw-100">.vw-100</div>
<div class="vh-100">.vh-100</div>
<div class="min-vw-100">.min-vw-100</div>
<div class="min-vh-100">.min-vh-100</div>
{{</example>}}
