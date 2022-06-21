---
title: Gradients
description: Use our gradient classes to built a beautiful gradient.
section: utilities
---

With the gradient classes, you can create some basic gradients.

## Types
### Linear
You can point your gradient in every direction.

{{<example class="docs-preview-gradient grid grid-3 from-blue-600 to-teal-600 text-white">}}
<div class="gradient-to-ts">.gradient-to-ts</div>
<div class="gradient-to-t">.gradient-to-t</div>
<div class="gradient-to-te">.gradient-to-te</div>
<div class="gradient-to-s">.gradient-to-s</div>
<div></div>
<div class="gradient-to-e">.gradient-to-e</div>
<div class="gradient-to-bs">.gradient-to-bs</div>
<div class="gradient-to-b">.gradient-to-b</div>
<div class="gradient-to-be">.gradient-to-be</div>
{{</example>}}

### Radial
If you'd like to use a radial gradient, you can do that too with the `gradient-radial` class.

{{<example class="docs-preview-gradient-radial grid grid-1 text-white">}}
<div class="gradient-radial from-blue-600 to-teal-600">.gradient-radial</div>
{{</example>}}

## Colors
### `from` and `to`
Gradient require a class that indicates the direction and a class that indicates the `from` color and/or `to` color. You can use any of the colors and their main weights (50 to 900).

{{<example class="docs-preview-gradient grid">}}
<div class="gradient-to-e from-blue-600 to-teal-600"></div>
<div class="gradient-to-e from-amber-600 to-rose-600"></div>
<div class="gradient-to-e from-pink-600 to-violet-600"></div>
<div class="gradient-to-e from-lime-600 to-green-600"></div>
<div class="gradient-to-e from-grey-600 to-brown-600"></div>
{{</example>}}

{{<example class="docs-preview-gradient grid">}}
<div class="gradient-to-e from-blue-900 to-blue-50"></div>
{{</example>}}

### Single colors
You don't have to define 2 colors in a gradient. Leaving out the `to` colors will result in gradients that fade to transparent. Similarly, you can just leave out the `from` color to have a gradient that goes from transparent to a color.

{{<example class="docs-preview-gradient grid grid-2">}}
<div class="gradient-to-e from-blue-600"></div>
<div class="gradient-to-e to-teal-600"></div>
<div class="gradient-to-e from-amber-600"></div>
<div class="gradient-to-e to-rose-600"></div>
<div class="gradient-to-e from-pink-600"></div>
<div class="gradient-to-e to-violet-600"></div>
<div class="gradient-to-e from-lime-600"></div>
<div class="gradient-to-e to-green-600"></div>
<div class="gradient-to-e from-grey-600"></div>
<div class="gradient-to-e to-brown-600"></div>
{{</example>}}

### Alpha colors
Only the main color weights are avialable as classes, so a `from-rose-400a` class doesn't exist. Still, you can use these colors just fine:

{{<example class="docs-preview-gradient grid">}}
<div class="gradient-to-e to-blue-600" style="--gradient-from: var(--rose-400a)"></div>
<div class="gradient-to-e from-blue-600" style="--gradient-to: var(--rose-50a)"></div>
{{</example>}}

### More colors
But don't let `from` and `to` limit you. You can really add as many colors as you which with our CSS variables. Here's a rainbow:

{{<example class="docs-preview-gradient grid">}}
<div class="gradient-to-e" style="--gradient-stops: var(--red-600), var(--orange-600), var(--yellow-600), var(--green-600), var(--blue-600), var(--indigo-600), var(--violet-600)"></div>
{{</example>}}

There is no limit to this, here's an example with every color in Mellow color pallette in alphabetical order just to prove that point. It's ugly and you'll never use this, but it can be done.

{{<example class="docs-preview-gradient grid">}}
<div class="gradient-to-e" style="--gradient-stops: var(--amber-600), var(--blue-600), var(--brown-600), var(--cyan-600), var(--green-600), var(--grey-600),var(--indigo-600), var(--lime-600), var(--orange-600), var(--pink-600), var(--purple-600), var(--red-600), var(--rose-600), var(--teal-600), var(--violet-600), var(--yellow-600)"></div>
{{</example>}}
