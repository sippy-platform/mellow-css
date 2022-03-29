---
title: Colors
description: Mellow has a built-in extensive color palette.
---

## Main colors
The main color set has `text-*` and `bg-*` classes available in our [text color](/utilities/color) and [background](/utilities/background) utilities, as well as variants for other components (like [alerts](/components/alert)) and urilities (like [borders](/utilities/borders)).

{{<note>}}
The `light` and `dark` colors aren't their own palette, but instead variants of the `grey` palette.
{{</note>}}

{{<example show_code="false">}}
<div class="grid grid-2 grid-sm-3 mb-5">
  <div class="red text-white p-3 rounded-sm" style="background: var(--color-700)">Red</div>
  <div class="orange text-white p-3 rounded-sm" style="background: var(--color-700)">Orange</div>
  <div class="yellow p-3 rounded-sm" style="background: var(--color-700)">Yellow</div>
  <div class="lime p-3 rounded-sm" style="background: var(--color-700)">Lime</div>
  <div class="green text-white p-3 rounded-sm" style="background: var(--color-700)">Green</div>
  <div class="cyan p-3 rounded-sm" style="background: var(--color-700)">Cyan</div>
  <div class="blue text-white p-3 rounded-sm" style="background: var(--color-700)">Blue</div>
  <div class="purple text-white p-3 rounded-sm" style="background: var(--color-700)">Purple</div>
  <div class="pink text-white p-3 rounded-sm" style="background: var(--color-700)">Pink</div>
  <div class="grey p-3 rounded-sm" style="background: var(--color-200)">Light</div>
  <div class="grey text-white p-3 rounded-sm" style="background: var(--color-700)">Grey</div>
  <div class="grey text-white p-3 rounded-sm" style="background: var(--color-900)">Dark</div>
</div>
{{</example>}}

These values are directly available and are defined in the `$colors` scss variable as shown below. Every variable that is directly used in the `$colors` map is equal to the `500` color in its palette. Additionally, there is also the `$variant-colors` map, which includes all colors from the `$colors` map with an additional `light` and `dark` color. The colors in the `$variant-colors` map don't correspond with palettes and are used to generate variants for components that don't need more than the base color.

{{<example show_preview="false" lang="scss">}}
$colors: (
  cyan: $cyan,
  blue: $blue,
  red: $red,
  lime: $lime,
  green: $green,
  "yellow": $yellow,
  orange: $orange,
  pink: $pink,
  purple: $purple,
  grey: $grey
) !default;
{{</example>}}

## Palettes
A color map is made out of a color palette from 50 to 900. Every color has its tints and shades defined by the same percentages as blue except for grey.

{{<example show_preview="false" lang="scss">}}
@each $name, $color in $colors {
  .#{$name} {
    --color-50: #{tint($color, 98%)};
    --color-100: #{tint($color, 96%)};
    --color-200: #{tint($color, 92%)};
    --color-300: #{tint($color, 87%)};
    --color-400: #{tint($color, 80%)};
    --color-500: #{tint($color, 70%)};
    --color-550: #{tint($color, 57%)};
    --color-600: #{tint($color, 28%)};
    --color-700: #{$color};
    --color-750: #{shade($color, 7%)};
    --color-800: #{shade($color, 22%)};
    --color-900: #{shade($color, 70%)};
    --color-text: #{color-contrast($color)};
  }
}
{{</example>}}

### Colors
<div class="d-flex mb-3">
  <div class="w-4 flex-shrink-0">
    <div class="grid grid-1 gap-1">
      <span style="height: 21px"></span>
      <span style="height: 48px" class="fw-bold d-flex align-items-center justify-content-end me-2">Red</span>
      <span style="height: 48px" class="fw-bold d-flex align-items-center justify-content-end me-2">Orange</span>
      <span style="height: 48px" class="fw-bold d-flex align-items-center justify-content-end me-2">Yellow</span>
      <span style="height: 48px" class="fw-bold d-flex align-items-center justify-content-end me-2">Lime</span>
      <span style="height: 48px" class="fw-bold d-flex align-items-center justify-content-end me-2">Green</span>
      <span style="height: 48px" class="fw-bold d-flex align-items-center justify-content-end me-2">Cyan</span>
      <span style="height: 48px" class="fw-bold d-flex align-items-center justify-content-end me-2">Blue</span>
      <span style="height: 48px" class="fw-bold d-flex align-items-center justify-content-end me-2">Purple</span>
      <span style="height: 48px" class="fw-bold d-flex align-items-center justify-content-end me-2">Pink</span>
      <span style="height: 48px" class="fw-bold d-flex align-items-center justify-content-end me-2">Grey</span>
    </div>
  </div>
  <div class="grid grid-1 gap-1">
    <div class="grid grid-12 gap-1">
      <span class="text-center">50</span>
      <span class="text-center">100</span>
      <span class="text-center">200</span>
      <span class="text-center">300</span>
      <span class="text-center">400</span>
      <span class="text-center">500</span>
      <span class="text-center">550</span>
      <span class="text-center">600</span>
      <span class="text-center">700</span>
      <span class="text-center">750</span>
      <span class="text-center">800</span>
      <span class="text-center">900</span>
    </div>
    <div class="grid grid-12 gap-1 red">
      <div class="py-4 rounded-sm" style="background: var(--color-50)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-100)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-200)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-300)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-400)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-500)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-550)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-700)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-750)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-800)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-900)"></div>
    </div>
    <div class="grid grid-12 gap-1 orange">
      <div class="py-4 rounded-sm" style="background: var(--color-50)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-100)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-200)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-300)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-400)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-500)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-550)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-700)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-750)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-800)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-900)"></div>
    </div>
    <div class="grid grid-12 gap-1 yellow">
      <div class="py-4 rounded-sm" style="background: var(--color-50)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-100)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-200)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-300)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-400)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-500)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-550)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-700)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-750)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-800)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-900)"></div>
    </div>
    <div class="grid grid-12 gap-1 lime">
      <div class="py-4 rounded-sm" style="background: var(--color-50)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-100)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-200)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-300)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-400)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-500)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-550)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-700)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-750)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-800)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-900)"></div>
    </div>
    <div class="grid grid-12 gap-1 green">
      <div class="py-4 rounded-sm" style="background: var(--color-50)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-100)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-200)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-300)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-400)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-500)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-550)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-700)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-750)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-800)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-900)"></div>
    </div>
    <div class="grid grid-12 gap-1 cyan">
      <div class="py-4 rounded-sm" style="background: var(--color-50)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-100)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-200)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-300)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-400)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-500)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-550)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-700)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-750)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-800)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-900)"></div>
    </div>
    <div class="grid grid-12 gap-1 blue">
      <div class="py-4 rounded-sm" style="background: var(--color-50)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-100)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-200)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-300)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-400)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-500)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-550)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-700)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-750)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-800)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-900)"></div>
    </div>
    <div class="grid grid-12 gap-1 purple">
      <div class="py-4 rounded-sm" style="background: var(--color-50)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-100)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-200)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-300)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-400)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-500)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-550)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-700)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-750)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-800)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-900)"></div>
    </div>
    <div class="grid grid-12 gap-1 pink">
      <div class="py-4 rounded-sm" style="background: var(--color-50)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-100)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-200)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-300)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-400)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-500)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-550)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-700)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-750)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-800)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-900)"></div>
    </div>
    <div class="grid grid-12 gap-1 grey">
      <div class="py-4 rounded-sm" style="background: var(--color-50)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-100)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-200)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-300)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-400)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-500)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-550)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-700)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-750)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-800)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-900)"></div>
    </div>
  </div>
</div>

## Using the color system
Each color palette consists out of 12 colors with incremental steps of 50 or 100. These colors all have a functional use.

| Color | Use |
| ----- | --- |
| 50, 100 | Use as background. |
| 200, 300, 400 | Use as component backgrounds  (default, hover, active). |
| 500, 550, 600 | Use as borders and seperators. |
| 700, 750 | Use as solid backgrounds. |
| 800, 900 | Usage for text. |
| text | Use for text on 700 and 750. |
