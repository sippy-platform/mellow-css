---
title: Borders
description: Add, subtract, and manipulate the look of borders of your elements.
---

## Borders
With the `border` utilities, you can add borders to any element.

{{<example class="docs-preview-border">}}
<div class="border"></div>
<div class="border-top"></div>
<div class="border-end"></div>
<div class="border-bottom"></div>
<div class="border-start"></div>
{{</example>}}

Every `border-*` class has also an inverse version that removes the border. All blocks below have a border, and a `-0` class applied on top of them.

{{<example class="docs-preview-border bordered">}}
<div class="border-0"></div>
<div class="border-top-0"></div>
<div class="border-end-0"></div>
<div class="border-bottom-0"></div>
<div class="border-start-0"></div>
{{</example>}}

## Color
{{<example>}}
<div class="border border-color-blue p-3 mb-2">.border-color-blue</div>
<div class="border border-color-purple p-3 mb-2">.border-color-purple</div>
<div class="border border-color-pink p-3 mb-2">.border-color-pink</div>
<div class="border border-color-red p-3 mb-2">.border-color-red</div>
<div class="border border-color-orange p-3 mb-2">.border-color-orange</div>
<div class="border border-color-yellow p-3 mb-2">.border-color-yellow</div>
<div class="border border-color-lime p-3 mb-2">.border-color-lime</div>
<div class="border border-color-green p-3 mb-2">.border-color-green</div>
<div class="border border-color-light p-3 mb-2">.border-color-light</div>
<div class="border border-color-grey p-3 mb-2">.border-color-grey</div>
<div class="border border-color-dark p-3 mb-2">.border-color-dark</div>
<div class="border border-color-white p-3 mb-2">.border-color-white</div>
<div class="border border-color-reset p-3">.border-color-reset</div>
{{</example>}}

## Width
You can change the width of a border with the `border-width-[1-5]` classes. Note that `border-width-1` exists as well, but has the same purpose as `border` in the demo below.

{{<example class="docs-preview-border">}}
<div class="border-0"></div>
<div class="border"></div>
<div class="border border-width-2"></div>
<div class="border border-width-3"></div>
<div class="border border-width-4"></div>
<div class="border border-width-5"></div>
{{</example>}}

## Border radius
### Size
You can set multiple sizes for border radius with the `rounded` classes.

{{<example class="docs-preview-border">}}
<div class="border rounded-0"></div>
<div class="border rounded-sm"></div>
<div class="border rounded"></div>
<div class="border rounded-lg"></div>
<div class="border rounded-pill"></div>
{{</example>}}

### Direction
Set the border radius only in one direction with these classes.

{{<example class="docs-preview-border">}}
<div class="border rounded"></div>
<div class="border rounded-t"></div>
<div class="border rounded-e"></div>
<div class="border rounded-b"></div>
<div class="border rounded-s"></div>
{{</example>}}
