---
title: Colors
description: Mellow has a extensive built-in color palette with a focus on providing colors with a purpose.
section: basics
---

## Main colors
Mellow comes with a color palette consisting out of 16 colors. These colors all have their own color class, and also have counterparts in the color-related utility classes (like the `text-*` and `bg-*` classes available in the [text color](/utilities/color) and [background](/utilities/background) utilities).

Many of the components that use color will support the usage of color classes to change the color of one or more parts of the component.

{{<example class="docs-colors-preview" show_code="false">}}
<div class="grid grid-2 grid-sm-4">
  <div class="color red">Red</div>
  <div class="color orange">Orange</div>
  <div class="color amber">Amber</div>
  <div class="color yellow">Yellow</div>
  <div class="color lime">Lime</div>
  <div class="color green">Green</div>
  <div class="color teal">Teal</div>
  <div class="color cyan">Cyan</div>
  <div class="color blue">Blue</div>
  <div class="color indigo">Indigo</div>
  <div class="color violet">Violet</div>
  <div class="color purple">Purple</div>
  <div class="color pink">Pink</div>
  <div class="color rose">Rose</div>
  <div class="color brown">Brown</div>
  <div class="color grey">Grey</div>
</div>
{{</example>}}

### Accent color
There is also the `accent` color class. This is a special color class that will behave as any other. By default, all components will use the color that is set as the `$accent` variable in the SCSS. You'd probably only need this class to overwrite another color class to get the default look.

By default, `accent` will behave the same as `blue`.

{{<example class="docs-colors-preview" show_code="false">}}
<div class="grid grid-2 grid-sm-4">
  <div class="color accent">Accent</div>
</div>
{{</example>}}

### Extend the color palette
The color values are directly available and are defined in the `$colors` scss variable as shown below. Every variable that is directly used in the `$colors` map is equal to the `600` color in its palette.

Changing the `$colors` variable in SCSS will result in a different color palette, full palettes are automatically generated based on the colors given.

{{<example show_preview="false" lang="scss">}}
$colors: (
  red: $red,
  orange: $orange,
  amber: $amber,
  "yellow": $yellow,
  lime: $lime,
  green: $green,
  teal: $teal,
  cyan: $cyan,
  blue: $blue,
  indigo: $indigo,
  violet: $violet,
  purple: $purple,
  pink: $pink,
  rose: $rose,
  brown: $brown,
  grey: $grey
) !default;
{{</example>}}

## Palettes
A color map is made out of a color palette from `50` to `900`, with `600a` and `text`.

{{<example show_preview="false" lang="scss">}}
@each $name, $color in $colors {
  .#{$name} {
    --color-50: #{tint($color, 96%)};
    --color-100: #{tint($color, 92%)};
    --color-200: #{tint($color, 87%)};
    --color-300: #{tint($color, 80%)};
    --color-400: #{tint($color, 70%)};
    --color-500: #{tint($color, 28%)};
    --color-600: #{$color};
    --color-700: #{shade($color, 7%)};
    --color-800: #{shade($color, 22%)};
    --color-900: #{shade($color, 70%)};
    --color-600a: #{rgba($color, .3)};
    --color-text: #{color-contrast($color)};
  }
}
{{</example>}}

{{<note>}}
On a white background, the resulting color from using `600a` will rougly correspond with using `400`.
{{</note>}}

### Colors
<div class="d-flex mb-3">
  <div class="w-4 flex-shrink-0">
    <div class="grid grid-1 gap-1">
      <span style="height: 21px"></span>
      <span style="height: 48px" class="fw-bold d-flex align-items-center">Accent</span>
      <span style="height: 48px" class="fw-bold d-flex align-items-center text-red">Red</span>
      <span style="height: 48px" class="fw-bold d-flex align-items-center text-orange">Orange</span>
      <span style="height: 48px" class="fw-bold d-flex align-items-center text-amber">Amber</span>
      <span style="height: 48px" class="fw-bold d-flex align-items-center text-yellow">Yellow</span>
      <span style="height: 48px" class="fw-bold d-flex align-items-center text-lime">Lime</span>
      <span style="height: 48px" class="fw-bold d-flex align-items-center text-green">Green</span>
      <span style="height: 48px" class="fw-bold d-flex align-items-center text-teal">Teal</span>
      <span style="height: 48px" class="fw-bold d-flex align-items-center text-cyan">Cyan</span>
      <span style="height: 48px" class="fw-bold d-flex align-items-center text-blue">Blue</span>
      <span style="height: 48px" class="fw-bold d-flex align-items-center text-indigo">Indigo</span>
      <span style="height: 48px" class="fw-bold d-flex align-items-center text-violet">Violet</span>
      <span style="height: 48px" class="fw-bold d-flex align-items-center text-purple">Purple</span>
      <span style="height: 48px" class="fw-bold d-flex align-items-center text-pink">Pink</span>
      <span style="height: 48px" class="fw-bold d-flex align-items-center text-rose">Rose</span>
      <span style="height: 48px" class="fw-bold d-flex align-items-center text-brown">Brown</span>
      <span style="height: 48px" class="fw-bold d-flex align-items-center text-grey">Grey</span>
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
      <span class="text-center">600</span>
      <span class="text-center">700</span>
      <span class="text-center">800</span>
      <span class="text-center">900</span>
      <span class="text-center">600a</span>
      <span class="text-center">text</span>
    </div>
    <div class="grid grid-12 gap-1 accent">
      <div class="py-4 rounded-sm" style="background: var(--color-50)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-100)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-200)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-300)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-400)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-500)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-700)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-800)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-900)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600a)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-text)"></div>
    </div>
    <div class="grid grid-12 gap-1 red">
      <div class="py-4 rounded-sm" style="background: var(--color-50)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-100)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-200)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-300)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-400)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-500)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-700)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-800)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-900)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600a)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-text)"></div>
    </div>
    <div class="grid grid-12 gap-1 orange">
      <div class="py-4 rounded-sm" style="background: var(--color-50)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-100)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-200)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-300)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-400)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-500)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-700)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-800)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-900)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600a)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-text)"></div>
    </div>
    <div class="grid grid-12 gap-1 amber">
      <div class="py-4 rounded-sm" style="background: var(--color-50)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-100)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-200)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-300)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-400)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-500)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-700)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-800)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-900)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600a)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-text)"></div>
    </div>
    <div class="grid grid-12 gap-1 yellow">
      <div class="py-4 rounded-sm" style="background: var(--color-50)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-100)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-200)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-300)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-400)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-500)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-700)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-800)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-900)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600a)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-text)"></div>
    </div>
    <div class="grid grid-12 gap-1 lime">
      <div class="py-4 rounded-sm" style="background: var(--color-50)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-100)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-200)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-300)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-400)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-500)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-700)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-800)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-900)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600a)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-text)"></div>
    </div>
    <div class="grid grid-12 gap-1 green">
      <div class="py-4 rounded-sm" style="background: var(--color-50)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-100)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-200)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-300)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-400)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-500)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-700)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-800)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-900)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600a)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-text)"></div>
    </div>
    <div class="grid grid-12 gap-1 teal">
      <div class="py-4 rounded-sm" style="background: var(--color-50)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-100)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-200)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-300)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-400)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-500)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-700)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-800)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-900)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600a)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-text)"></div>
    </div>
    <div class="grid grid-12 gap-1 cyan">
      <div class="py-4 rounded-sm" style="background: var(--color-50)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-100)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-200)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-300)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-400)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-500)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-700)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-800)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-900)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600a)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-text)"></div>
    </div>
    <div class="grid grid-12 gap-1 blue">
      <div class="py-4 rounded-sm" style="background: var(--color-50)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-100)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-200)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-300)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-400)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-500)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-700)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-800)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-900)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600a)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-text)"></div>
    </div>
    <div class="grid grid-12 gap-1 indigo">
      <div class="py-4 rounded-sm" style="background: var(--color-50)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-100)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-200)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-300)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-400)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-500)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-700)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-800)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-900)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600a)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-text)"></div>
    </div>
    <div class="grid grid-12 gap-1 violet">
      <div class="py-4 rounded-sm" style="background: var(--color-50)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-100)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-200)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-300)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-400)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-500)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-700)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-800)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-900)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600a)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-text)"></div>
    </div>
    <div class="grid grid-12 gap-1 purple">
      <div class="py-4 rounded-sm" style="background: var(--color-50)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-100)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-200)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-300)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-400)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-500)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-700)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-800)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-900)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600a)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-text)"></div>
    </div>
    <div class="grid grid-12 gap-1 pink">
      <div class="py-4 rounded-sm" style="background: var(--color-50)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-100)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-200)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-300)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-400)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-500)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-700)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-800)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-900)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600a)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-text)"></div>
    </div>
    <div class="grid grid-12 gap-1 rose">
      <div class="py-4 rounded-sm" style="background: var(--color-50)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-100)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-200)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-300)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-400)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-500)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-700)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-800)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-900)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600a)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-text)"></div>
    </div>
    <div class="grid grid-12 gap-1 brown">
      <div class="py-4 rounded-sm" style="background: var(--color-50)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-100)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-200)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-300)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-400)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-500)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-700)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-800)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-900)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600a)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-text)"></div>
    </div>
    <div class="grid grid-12 gap-1 grey">
      <div class="py-4 rounded-sm" style="background: var(--color-50)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-100)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-200)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-300)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-400)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-500)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-700)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-800)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-900)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-600a)"></div>
      <div class="py-4 rounded-sm" style="background: var(--color-text)"></div>
    </div>
  </div>
</div>

## Using the color system
Each color palette consists out of 12 colors with incremental steps of 50 or 100. These colors all have a functional use.

<table class="table">
  <thead>
    <tr>
      <th>Color</th>
      <th>Use</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>50</td>
      <td>Use as background.</td>
    </tr>
    <tr>
      <td>100, 200, 300</td>
      <td>Use as component backgrounds  (default, hover, active).</td>
    </tr>
    <tr>
      <td>400, 500</td>
      <td>Use as borders and seperators.</td>
    </tr>
    <tr>
      <td>600, 700</td>
      <td>Use as solid backgrounds.</td>
    </tr>
    <tr>
      <td>800, 900</td>
      <td>Usage for text.</td>
    </tr>
    <tr>
      <td>text</td>
      <td>Recommended text color on 600 and 700.</td>
    </tr>
    <tr>
      <td>600a</td>
      <td>Use focus rings and other context-sensitive colors.</td>
    </tr>
  </tbody>
</table>
