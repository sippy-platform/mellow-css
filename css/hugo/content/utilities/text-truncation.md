---
title: Text truncation
description: Truncate text when it gets to long with ellipsis.
---

Sometimes you don't want a long string to keep going. That is where the `text-truncate` class comes in. It stops you text from going further and ends it with ellipsis instead.

Note that truncation only works on element where the display property is set to `block` or `inline-block`.

{{<example>}}
<div class="grid grid-3">
  <div class="text-truncate">
    This text will be truncated upon reaching the width of its container.
  </div>
</div>
<span class="d-inline-block text-truncate" style="max-width: 120px;">
  This text will be truncated upon reaching the width of its container.
</span>
{{</example>}}

## With flex
Sometimes, there is a string in a flex layout that must be truncated but is located in the middle of the layout.

{{<example>}}
<div class="d-flex flex-row align-items-center p-2 pe-3 border rounded" style="max-width: 260px;">
  <div class="bg-pink rounded-sm me-2 flex-shrink-0" style="width: 48px; height: 48px;"></div>
  <div class="flex-auto min-w-0">
    <p class="fw-bold d-block text-truncate mw-0 m-0">Taylor Alison Swift</p>
    <p class="text-muted text-small m-0">Lover</p>
  </div>
  <div class="bg-light rounded-pill ms-3 flex-shrink-0 d-flex justify-content-center align-items-center" style="width: 32px; height: 32px;">
    <i class="vi vi-plus"></i>
  </div>
</div>
{{</example>}}
