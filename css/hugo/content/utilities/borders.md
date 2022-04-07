---
title: Borders
description: Add, subtract, and manipulate the look of borders of your elements.
section: utilities
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
The colors all map to the 600 weight of their color scheme. there are however also a number of exceptional colors.

`border-light` is the equivalent of `border-grey` at weight 100 in the light theme, while `border-dark` is the equivalent of `border-grey` at weight 900 in the ligth theme. You can also use the `border-system` and `border-system-inverse` classes; these map to both `border-light` or `border-dark` depending on the theme class you have used as its parent or equal.

`border-white` will give you white borders. `border-reset` resets the border colors to the browsers default. `border-accent` will follow your accent color.

{{<example class="grid grid-2 grid-sm-3">}}
<div class="border border-2 border-red p-3">.border-red</div>
<div class="border border-2 border-orange p-3">.border-orange</div>
<div class="border border-2 border-amber p-3">.border-amber</div>
<div class="border border-2 border-yellow p-3">.border-yellow</div>
<div class="border border-2 border-lime p-3">.border-lime</div>
<div class="border border-2 border-green p-3">.border-green</div>
<div class="border border-2 border-teal p-3">.border-teal</div>
<div class="border border-2 border-cyan p-3">.border-cyan</div>
<div class="border border-2 border-blue p-3">.border-blue</div>
<div class="border border-2 border-indigo p-3">.border-indigo</div>
<div class="border border-2 border-violet p-3">.border-violet</div>
<div class="border border-2 border-purple p-3">.border-purple</div>
<div class="border border-2 border-pink p-3">.border-pink</div>
<div class="border border-2 border-rose p-3">.border-rose</div>
<div class="border border-2 border-brown p-3">.border-brown</div>
<div class="border border-2 border-light p-3">.border-light</div>
<div class="border border-2 border-grey p-3">.border-grey</div>
<div class="border border-2 border-dark p-3">.border-dark</div>
<div class="border border-2 border-system p-3">.border-system</div>
<div class="border border-2 border-system-inverse p-3">.border-system-inverse</div>
<div class="border border-2 border-accent p-3">.border-accent</div>
<div class="border border-2 border-white p-3">.border-white</div>
<div class="border border-2 border-reset p-3">.border-reset</div>
{{</example>}}

## Width
You can change the width of a border with the `border-[1-5]` classes. Note that `border-1` exists as well, but has the same purpose as `border` in the demo below.

{{<example class="docs-preview-border">}}
<div class="border-0"></div>
<div class="border"></div>
<div class="border border-2"></div>
<div class="border border-3"></div>
<div class="border border-4"></div>
<div class="border border-5"></div>
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
