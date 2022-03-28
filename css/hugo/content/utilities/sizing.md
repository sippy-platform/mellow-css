---
title: Sizing
description: With the sizing utilities you can change the width and height of elements.
---

## Relative to parent

### Width

#### Fixed
{{<example class="docs-preview-sizing-rows">}}
<div><div>.w-0</div><div><div class="w-0"></div></div></div>
<div><div>.w-1</div><div><div class="w-1"></div></div></div>
<div><div>.w-2</div><div><div class="w-2"></div></div></div>
<div><div>.w-3</div><div><div class="w-3"></div></div></div>
<div><div>.w-4</div><div><div class="w-4"></div></div></div>
<div><div>.w-5</div><div><div class="w-5"></div></div></div>
{{</example>}}

#### Relative
{{<example class="docs-preview-sizing-rows">}}
<div><div>.w-25</div><div><div class="w-25"></div></div></div>
<div><div>.w-50</div><div><div class="w-50"></div></div></div>
<div><div>.w-75</div><div><div class="w-75"></div></div></div>
<div><div>.w-100</div><div><div class="w-100"></div></div></div>
<div><div>.w-auto</div><div><div class="w-auto"></div></div></div>
{{</example>}}

### Height
#### Fixed
{{<example class="docs-preview-sizing-columns">}}
<div><div>.h-0</div><div><div class="h-0"></div></div></div>
<div><div>.h-1</div><div><div class="h-1"></div></div></div>
<div><div>.h-2</div><div><div class="h-2"></div></div></div>
<div><div>.h-3</div><div><div class="h-3"></div></div></div>
<div><div>.h-4</div><div><div class="h-4"></div></div></div>
<div><div>.h-5</div><div><div class="h-5"></div></div></div>
{{</example>}}

#### Relative
{{<example class="docs-preview-sizing-columns h-5">}}
<div><div>.h-25</div><div><div class="h-25"></div></div></div>
<div><div>.h-50</div><div><div class="h-50"></div></div></div>
<div><div>.h-75</div><div><div class="h-75"></div></div></div>
<div><div>.h-100</div><div><div class="h-100"></div></div></div>
<div><div>.h-auto</div><div><div class="h-auto"></div></div></div>
{{</example>}}

### Max width and height
Mellow also provides utility classes for max width and height.

{{<example class="docs-preview-sizing-rows">}}
<div><div>.max-w-0</div><div><div class="max-w-0"></div></div></div>
<div><div>.max-w-100</div><div><div class="max-w-100"></div></div></div>
{{</example>}}

{{<example class="docs-preview-sizing-columns h-5">}}
<div><div>.max-h-0</div><div><div class="max-h-0">content</div></div></div>
<div><div>.max-h-100</div><div><div class="max-h-100">content</div></div></div>
{{</example>}}

### Min width and height
Where there is max, there is also min, and we've got those classes too.

{{<example class="docs-preview-sizing-rows">}}
<div><div>.min-w-0</div><div><div class="min-w-0"></div></div></div>
<div><div>.min-w-100</div><div><div class="min-w-100"></div></div></div>
{{</example>}}

{{<example class="docs-preview-sizing-columns h-5">}}
<div><div>.min-h-0</div><div><div class="min-h-0">content</div></div></div>
<div><div>.min-h-100</div><div><div class="min-h-100">content</div></div></div>
{{</example>}}

## Relatie to viewport
You can also use these properties relative to the viewport. Note that there is no `max`-variant for these.

{{<example show_preview="false">}}
<div class="vw-100">.vw-100</div>
<div class="vh-100">.vh-100</div>
<div class="min-vw-100">.min-vw-100</div>
<div class="min-vh-100">.min-vh-100</div>
{{</example>}}
