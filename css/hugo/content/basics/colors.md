---
title: Colors
description: Mellow has a built-in extensive color palette.
---

## Main colors
The main color set has `text-*` and `bg-*` classes available in our [text color](/utilities/color) and [background](/utilities/background) utilities, as well as variants for other components (like [alerts](/components/alert)) and urilities (like [borders](/utilities/borders)).

<div class="alert alert-cyan" role="alert">
  <div class="alert-icon">
    <i class="vi vi-circle-info"></i>
  </div>
  <div class="alert-message">
    The <code>light</code> and <code>dark</code> colors aren't their own palette, but instead variants of the <code>grey</code> palette.
  </div>
</div>

{{<example show_code="false">}}
<h4>Functional palette</h4>
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
<h4>Legacy palette</h4>
<div class="grid grid-2 grid-sm-3">
  <div class="bg-red-500 p-3 rounded-sm">Red</div>
  <div class="bg-orange-500 p-3 rounded-sm">Orange</div>
  <div class="bg-yellow-500 p-3 rounded-sm">Yellow</div>
  <div class="bg-lime-500 p-3 rounded-sm">Lime</div>
  <div class="bg-green-500 p-3 rounded-sm">Green</div>
  <div class="bg-cyan-500 p-3 rounded-sm">Cyan</div>
  <div class="bg-blue-500 p-3 rounded-sm">Blue</div>
  <div class="bg-purple-500 p-3 rounded-sm">Purple</div>
  <div class="bg-pink-500 p-3 rounded-sm">Pink</div>
  <div class="bg-light p-3 rounded-sm">Light</div>
  <div class="bg-grey-500 p-3 rounded-sm">Grey</div>
  <div class="bg-dark text-white p-3 rounded-sm">Dark</div>
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

$variant-colors: (
  cyan: $cyan,
  blue: $blue,
  red: $red,
  lime: $lime,
  green: $green,
  "yellow": $yellow,
  orange: $orange,
  pink: $pink,
  purple: $purple,
  grey: $grey,
  light: $light,
  dark: $dark
) !default;
{{</example>}}

## Palettes
The full color palette is accessible from the `$plaettes`-variable.

{{<example show_preview="false" lang="scss">}}
$palettes: (
  "cyan": $cyans,
  "blue": $blues,
  "red": $reds,
  "lime": $limes,
  "green": $greens,
  "yellow": $yellows,
  "orange": $oranges,
  "pink": $pinks,
  "purple": $purples,
  "grey": $greys
) !default;
{{</example>}}

A color map is made out of a color palette from 50 to 900. Every color has its tints and shades defined by the same percentages as blue except for grey.

{{<example show_preview="false" lang="scss">}}
$blues: (
  50: tint($blue, 90%),
  100: tint($blue, 80%),
  200: tint($blue, 60%),
  300: tint($blue, 40%),
  400: tint($blue, 20%),
  500: $blue,
  600: shade($blue, 15%),
  700: shade($blue, 30%),
  800: shade($blue, 45%),
  900: shade($blue, 60%)
) !default;

$greys: (
  50: tint($grey, 95%),
  100: tint($grey, 90%),
  200: tint($grey, 75%),
  300: tint($grey, 45%),
  400: tint($grey, 20%),
  500: $grey,
  600: shade($grey, 20%),
  700: shade($grey, 40%),
  800: shade($grey, 60%),
  900: shade($grey, 80%)
) !default;
{{</example>}}

### Colors
#### Functional colors
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

#### Legacy colors
<div class="d-flex mb-3">
  <div class="w-4 flex-shrink-0">
    <span class="fw-bold">Red</span>
  </div>
  <div class="grid grid-5 grid-xxl-10 gap-2 flex-grow-1">
    <div class="d-flex flex-column">
      <div class="bg-red-50 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">50</span>
      <span class="text-small text-muted">#fde6ea</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-red-100 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">100</span>
      <span class="text-small text-muted">#fbccd5</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-red-200 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">200</span>
      <span class="text-small text-muted">#f799ab</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-red-300 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">300</span>
      <span class="text-small text-muted">#f26681</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-red-400 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">400</span>
      <span class="text-small text-muted">#ee3357</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-red-500 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">500</span>
      <span class="text-small text-muted">#ea002d</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-red-600 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">600</span>
      <span class="text-small text-muted">#c70026</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-red-700 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">700</span>
      <span class="text-small text-muted">#a40020</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-red-800 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">800</span>
      <span class="text-small text-muted">#810019</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-red-900 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">900</span>
      <span class="text-small text-muted">#5e0012</span>
    </div>
  </div>
</div>
<div class="d-flex mb-3">
  <div class="w-4 flex-shrink-0">
    <span class="fw-bold">Orange</span>
  </div>
  <div class="grid grid-5 grid-xxl-10 gap-2 flex-grow-1">
    <div class="d-flex flex-column">
      <div class="bg-orange-50 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">50</span>
      <span class="text-small text-muted">#fef1e6</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-orange-100 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">100</span>
      <span class="text-small text-muted">#fde4cc</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-orange-200 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">200</span>
      <span class="text-small text-muted">#fbc899</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-orange-300 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">300</span>
      <span class="text-small text-muted">#f9ad66</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-orange-400 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">400</span>
      <span class="text-small text-muted">#f79133</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-orange-500 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">500</span>
      <span class="text-small text-muted">#f57600</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-orange-600 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">600</span>
      <span class="text-small text-muted">#d06400</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-orange-700 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">700</span>
      <span class="text-small text-muted">#ac5300</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-orange-800 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">800</span>
      <span class="text-small text-muted">#874100</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-orange-900 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">900</span>
      <span class="text-small text-muted">#622f00</span>
    </div>
  </div>
</div>
<div class="d-flex mb-3">
  <div class="w-4 flex-shrink-0">
    <span class="fw-bold">Yellow</span>
  </div>
  <div class="grid grid-5 grid-xxl-10 gap-2 flex-grow-1">
    <div class="d-flex flex-column">
      <div class="bg-yellow-50 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">50</span>
      <span class="text-small text-muted">#fefae6</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-yellow-100 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">100</span>
      <span class="text-small text-muted">#fdf4cc</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-yellow-200 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">200</span>
      <span class="text-small text-muted">#fbe999</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-yellow-300 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">300</span>
      <span class="text-small text-muted">#f9de66</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-yellow-400 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">400</span>
      <span class="text-small text-muted">#f7d333</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-yellow-500 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">500</span>
      <span class="text-small text-muted">#f5c800</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-yellow-600 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">600</span>
      <span class="text-small text-muted">#d0aa00</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-yellow-700 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">700</span>
      <span class="text-small text-muted">#ac8c00</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-yellow-800 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">800</span>
      <span class="text-small text-muted">#876e00</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-yellow-900 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">900</span>
      <span class="text-small text-muted">#625000</span>
    </div>
  </div>
</div>
<div class="d-flex mb-3">
  <div class="w-4 flex-shrink-0">
    <span class="fw-bold">Lime</span>
  </div>
  <div class="grid grid-5 grid-xxl-10 gap-2 flex-grow-1">
    <div class="d-flex flex-column">
      <div class="bg-lime-50 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">50</span>
      <span class="text-small text-muted">#f2fae6</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-lime-100 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">100</span>
      <span class="text-small text-muted">#e4f5cc</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-lime-200 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">200</span>
      <span class="text-small text-muted">#caeb99</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-lime-300 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">300</span>
      <span class="text-small text-muted">#afe066</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-lime-400 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">400</span>
      <span class="text-small text-muted">#95d633</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-lime-500 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">500</span>
      <span class="text-small text-muted">#7acc00</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-lime-600 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">600</span>
      <span class="text-small text-muted">#68ad00</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-lime-700 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">700</span>
      <span class="text-small text-muted">#558f00</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-lime-800 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">800</span>
      <span class="text-small text-muted">#437000</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-lime-900 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">900</span>
      <span class="text-small text-muted">#315200</span>
    </div>
  </div>
</div>
<div class="d-flex mb-3">
  <div class="w-4 flex-shrink-0">
    <span class="fw-bold">Green</span>
  </div>
  <div class="grid grid-5 grid-xxl-10 gap-2 flex-grow-1">
    <div class="d-flex flex-column">
      <div class="bg-green-50 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">50</span>
      <span class="text-small text-muted">#eaf7ec</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-green-100 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">100</span>
      <span class="text-small text-muted">#d4f0d9</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-green-200 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">200</span>
      <span class="text-small text-muted">#a9e1b3</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-green-300 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">300</span>
      <span class="text-small text-muted">#7fd18c</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-green-400 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">400</span>
      <span class="text-small text-muted">#54c266</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-green-500 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">500</span>
      <span class="text-small text-muted">#29b340</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-green-600 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">600</span>
      <span class="text-small text-muted">#239836</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-green-700 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">700</span>
      <span class="text-small text-muted">#1d7d2d</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-green-800 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">800</span>
      <span class="text-small text-muted">#176223</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-green-900 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">900</span>
      <span class="text-small text-muted">#10481a</span>
    </div>
  </div>
</div>
<div class="d-flex mb-3">
  <div class="w-4 flex-shrink-0">
    <span class="fw-bold">Cyan</span>
  </div>
  <div class="grid grid-5 grid-xxl-10 gap-2 flex-grow-1">
    <div class="d-flex flex-column">
      <div class="bg-cyan-50 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">50</span>
      <span class="text-small text-muted">#e6f7fb</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-cyan-100 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">100</span>
      <span class="text-small text-muted">#ccf0f6</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-cyan-200 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">200</span>
      <span class="text-small text-muted">#99e1ed</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-cyan-300 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">300</span>
      <span class="text-small text-muted">#66d1e5</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-cyan-400 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">400</span>
      <span class="text-small text-muted">#33c2dc</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-cyan-500 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">500</span>
      <span class="text-small text-muted">#00b3d3</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-cyan-600 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">600</span>
      <span class="text-small text-muted">#0098b3</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-cyan-700 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">700</span>
      <span class="text-small text-muted">#007d94</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-cyan-800 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">800</span>
      <span class="text-small text-muted">#006274</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-cyan-900 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">900</span>
      <span class="text-small text-muted">#004854</span>
    </div>
  </div>
</div>
<div class="d-flex mb-3">
  <div class="w-4 flex-shrink-0">
    <span class="fw-bold">Blue</span>
  </div>
  <div class="grid grid-5 grid-xxl-10 gap-2 flex-grow-1">
    <div class="d-flex flex-column">
      <div class="bg-blue-50 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">50</span>
      <span class="text-small text-muted">#e6f0fb</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-blue-100 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">100</span>
      <span class="text-small text-muted">#cce1f7</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-blue-200 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">200</span>
      <span class="text-small text-muted">#99c3ef</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-blue-300 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">300</span>
      <span class="text-small text-muted">#66a4e8</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-blue-400 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">400</span>
      <span class="text-small text-muted">#3386e0</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-blue-500 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">500</span>
      <span class="text-small text-muted">#0068d8</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-blue-600 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">600</span>
      <span class="text-small text-muted">#0058b8</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-blue-700 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">700</span>
      <span class="text-small text-muted">#004997</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-blue-800 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">800</span>
      <span class="text-small text-muted">#003977</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-blue-900 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">900</span>
      <span class="text-small text-muted">#002a56</span>
    </div>
  </div>
</div>
<div class="d-flex mb-3">
  <div class="w-4 flex-shrink-0">
    <span class="fw-bold">Purple</span>
  </div>
  <div class="grid grid-5 grid-xxl-10 gap-2 flex-grow-1">
    <div class="d-flex flex-column">
      <div class="bg-purple-50 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">50</span>
      <span class="text-small text-muted">#f6eefe</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-purple-100 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">100</span>
      <span class="text-small text-muted">#eeddfd</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-purple-200 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">200</span>
      <span class="text-small text-muted">#dcbbfc</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-purple-300 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">300</span>
      <span class="text-small text-muted">#cb99fa</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-purple-400 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">400</span>
      <span class="text-small text-muted">#b977f9</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-purple-500 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">500</span>
      <span class="text-small text-muted">#a855f7</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-purple-600 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">600</span>
      <span class="text-small text-muted">#974dde</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-purple-700 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">700</span>
      <span class="text-small text-muted">#8644c6</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-purple-800 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">800</span>
      <span class="text-small text-muted">#763cad</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-purple-900 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">900</span>
      <span class="text-small text-muted">#653394</span>
    </div>
  </div>
</div>
<div class="d-flex mb-3">
  <div class="w-4 flex-shrink-0">
    <span class="fw-bold">Pink</span>
  </div>
  <div class="grid grid-5 grid-xxl-10 gap-2 flex-grow-1">
    <div class="d-flex flex-column">
      <div class="bg-pink-50 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">50</span>
      <span class="text-small text-muted">#fdedf5</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-pink-100 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">100</span>
      <span class="text-small text-muted">#fbdaeb</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-pink-200 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">200</span>
      <span class="text-small text-muted">#f7b6d6</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-pink-300 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">300</span>
      <span class="text-small text-muted">#f491c2</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-pink-400 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">400</span>
      <span class="text-small text-muted">#f06dad</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-pink-500 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">500</span>
      <span class="text-small text-muted">#ec4899</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-pink-600 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">600</span>
      <span class="text-small text-muted">#d4418a</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-pink-700 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">700</span>
      <span class="text-small text-muted">#bd3a7a</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-pink-800 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">800</span>
      <span class="text-small text-muted">#a5326b</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-pink-900 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">900</span>
      <span class="text-small text-muted">#8e2b5c</span>
    </div>
  </div>
</div>
<div class="d-flex mb-3">
  <div class="w-4 flex-shrink-0">
    <span class="fw-bold">Grey</span>
  </div>
  <div class="grid grid-5 grid-xxl-10 gap-2 flex-grow-1">
    <div class="d-flex flex-column">
      <div class="bg-grey-50 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">50</span>
      <span class="text-small text-muted">#f8f8f8</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-grey-100 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">100</span>
      <span class="text-small text-muted">#f0f1f2</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-grey-200 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">200</span>
      <span class="text-small text-muted">#dadbde</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-grey-300 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">300</span>
      <span class="text-small text-muted">#aeb0b6</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-grey-400 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">400</span>
      <span class="text-small text-muted">#898d95</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-grey-500 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">500</span>
      <span class="text-small text-muted">#6b707a</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-grey-600 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">600</span>
      <span class="text-small text-muted">#565a62</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-grey-700 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">700</span>
      <span class="text-small text-muted">#404349</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-grey-800 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">800</span>
      <span class="text-small text-muted">#2b2d31</span>
    </div>
    <div class="d-flex flex-column">
      <div class="bg-grey-900 py-4 mb-1 rounded-sm"></div>
      <span class="text-small">900</span>
      <span class="text-small text-muted">#151618</span>
    </div>
  </div>
</div>
