---
title: Text truncation
description: Truncate text when it gets to long with ellipsis.
---

Sometimes you don't want a long string to keep going. That is where the `.text-truncate` class comes in. It stops you text from going further and ends it with ellipsis instead.

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
<div class="d-flex flex-row flex-items-center p-2 border border-radius" style="width: 200px;">
  <div class="bg-blue border-radius-sm me-2 flex-shrink-0" style="width: 32px; height: 32px;"></div>
  <p class="d-block text-truncate mw-0 m-0">Taylor Alison Swift</p>
  <div class="bg-light border-radius-pill ms-3 flex-shrink-0 d-flex flex-justify-center flex-items-center" style="width: 32px; height: 32px;">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="currentColor" style="width: 20px; height: 16px;">
      <path fill-rule="evenodd" d="M9.25 8.75v5.5a.75.75 0 0 0 1.5 0v-5.5h5.5a.75.75 0 0 0 0-1.5h-5.5v-5.5a.75.75 0 0 0-1.5 0v5.5h-5.5a.75.75 0 0 0 0 1.5h5.5Z"/>
    </svg>
  </div>
</div>
{{</example>}}
