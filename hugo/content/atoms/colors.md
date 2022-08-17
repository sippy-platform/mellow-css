---
title: Colors
description: Mellow has a extensive built-in color palette with a focus on providing colors with a purpose.
section: atoms
---

## Colors
Mellow comes with a color palette consisting out of 16 colors. These colors all have their own color class, and also have counterparts in the color-related utility classes (like the `text-*` and `bg-*` classes available in the [text color](/utilities/color) and [background](/utilities/background) utilities).

Many of the components that use color will support the usage of color classes to change the color of one or more parts of the component.

### Main
{{<example class="docs-colors-preview" show_code="false">}}
<div class="grid grid-2 grid-sm-4">
  <div class="color red">
    <h5>Red</h5>
    <div class="label label-plated">#eb0000</div>
    <div class="color-swatch"></div>
  </div>
  <div class="color orange">
    <h5>Orange</h5>
    <div class="label label-plated">#f57600</div>
    <div class="color-swatch"></div>
  </div>
  <div class="color amber">
    <h5>Amber</h5>
    <div class="label label-plated">#f5b400</div>
    <div class="color-swatch"></div>
  </div>
  <div class="color yellow">
    <h5>Yellow</h5>
    <div class="label label-plated">#f5d000</div>
    <div class="color-swatch"></div>
  </div>
  <div class="color lime">
    <h5>Lime</h5>
    <div class="label label-plated">#7acc00</div>
    <div class="color-swatch"></div>
  </div>
  <div class="color green">
    <h5>Green</h5>
    <div class="label label-plated">#1ea835</div>
    <div class="color-swatch"></div>
  </div>
  <div class="color teal">
    <h5>Teal</h5>
    <div class="label label-plated">#00d3b0</div>
    <div class="color-swatch"></div>
  </div>
  <div class="color cyan">
    <h5>Cyan</h5>
    <div class="label label-plated">#00b3d3</div>
    <div class="color-swatch"></div>
  </div>
  <div class="color blue">
    <h5>Blue</h5>
    <div class="label label-plated">#007bff</div>
    <div class="color-swatch"></div>
  </div>
  <div class="color indigo">
    <h5>Indigo</h5>
    <div class="label label-plated">#5560f7</div>
    <div class="color-swatch"></div>
  </div>
  <div class="color violet">
    <h5>Violet</h5>
    <div class="label label-plated">#8055f7</div>
    <div class="color-swatch"></div>
  </div>
  <div class="color purple">
    <h5>Purple</h5>
    <div class="label label-plated">#c455f7</div>
    <div class="color-swatch"></div>
  </div>
  <div class="color pink">
    <h5>Pink</h5>
    <div class="label label-plated">#ec4899</div>
    <div class="color-swatch"></div>
  </div>
  <div class="color rose">
    <h5>Rose</h5>
    <div class="label label-plated">#fd194b</div>
    <div class="color-swatch"></div>
  </div>
  <div class="color brown">
    <h5>Brown</h5>
    <div class="label label-plated">#a57041</div>
    <div class="color-swatch"></div>
  </div>
  <div class="color grey">
    <h5>Grey</h5>
    <div class="label label-plated">#6b707a</div>
    <div class="color-swatch"></div>
  </div>
</div>
{{</example>}}

### Accent
There is also the `accent` color class. This is a special color class that will behave as any other. By default, all components will use the color that is set as the `$accent` variable in the SCSS. You'd probably only need this class to overwrite another color class to get the default look.

By default, `accent` will behave the same as `blue`.

{{<example class="docs-colors-preview" show_code="false">}}
<div class="grid grid-2 grid-sm-4">
  <div class="color accent">
    <h5>Accent</h5>
    <div class="label label-plated">#007bff</div>
    <div class="color-swatch"></div>
  </div>
</div>
{{</example>}}

### Extend the color palette
The color values are directly available and are defined in the `$colors` scss variable as shown below. Every variable that is directly used in the `$colors` map is equal to the `600` color in its palette.

Changing the `$colors` variable in SCSS will result in a different color palette, full palettes are automatically generated based on the colors given.

{{<example show_preview="false" lang="scss">}}
$colors: (
  "red": $red,
  "orange": $orange,
  "amber": $amber,
  "yellow": $yellow,
  "lime": $lime,
  "green": $green,
  "teal": $teal,
  "cyan": $cyan,
  "blue": $blue,
  "indigo": $indigo,
  "violet": $violet,
  "purple": $purple,
  "pink": $pink,
  "rose": $rose,
  "brown": $brown,
  "grey": $grey,
  "accent": $accent
) !default;
{{</example>}}

A color map is made out of a color palette from `50` to `900`, with `200a`, `400a`, and `text`.

{{<example show_preview="false" lang="scss">}}
@each $name, $color in $colors {
  --#{$name}-50: #{ light-dark(tint($color, 96%), shade($color, 74%)) };
  --#{$name}-100: #{ light-dark(tint($color, 92%), shade($color, 67%)) };
  --#{$name}-200: #{ light-dark(tint($color, 87%), shade($color, 63%)) };
  --#{$name}-300: #{ light-dark(tint($color, 80%), shade($color, 52%)) };
  --#{$name}-400: #{ light-dark(tint($color, 70%), shade($color, 26%)) };
  --#{$name}-500: #{ light-dark(tint($color, 28%), $color) };
  --#{$name}-600: #{ light-dark($color, tint($color, 26%)) };
  --#{$name}-700: #{ light-dark(shade($color, 7%), tint($color, 48%)) };
  --#{$name}-800: #{ light-dark(shade($color, 22%), tint($color, 68%)) };
  --#{$name}-900: #{ light-dark(shade($color, 70%), tint($color, 88%)) };
  --#{$name}-50a: #{ rgba($color, .05) };
  --#{$name}-200a: #{ rgba($color, .15) };
  --#{$name}-400a: #{ rgba($color, .3) };
  --#{$name}-text: #{ light-dark(color-contrast($color), color-contrast(tint($color, 26%))) };
}
{{</example>}}

{{<note>}}
On a white background, the resulting color from using `400a` will roughly correspond with using `400`, while `200a` rougly corresponds with `200`.
{{</note>}}

## Themes
### Light
The light theme is the default theme in Mellow. It doesn't need to be enabled, but when using other themes, you can overwrite them with the `light` class. The element and any of its children will be set to light.

{{<example class="docs-colors-preview">}}
<style>
.color-example {
  background-color: var(--color-300);
  color: var(--color-900);
}
</style>
<div class="rounded-lg p-3 light accent color-example">
  This will always be the light Accent swatch, no matter what<br />900 on 300
</div>
{{</example>}}

### System
The system theme follows the color theme dictated by the browser (or OS). When `prefers-color-scheme: dark` can be evaluated to `true` the dark theme will be used, otherwise the light theme is used.

{{<example class="docs-colors-preview">}}
<style>
.color-example {
  background-color: var(--color-300);
  color: var(--color-900);
}
</style>
<div class="rounded-lg p-3 system accent color-example">
  Change your system's theme color, and this will follow<br />900 on 300
</div>
{{</example>}}

### Dark
The dark theme flips the color system to fit with dark designs. You can enable it with the `dark` class. The element and any of its children will be set to dark.

{{<example class="docs-colors-preview">}}
<style>
.color-example {
  background-color: var(--color-300);
  color: var(--color-900);
}
</style>
<div class="rounded-lg p-3 dark accent color-example">
  This will always be the dark Accent swatch, no matter what<br />900 on 300
</div>
{{</example>}}

## Swatchbook
### Accent
The `accent` color scale is a special exception to the color scale, it isn't its own unique color but rather - at least by default - acts as an alias for `blue`. You can change the `accent` color scale by setting the `$accent` variable in your SCSS.

{{<color>}}

### Palette
{{<color class="red" name="Red">}}
{{<color class="orange" name="Orange">}}
{{<color class="amber" name="Amber">}}
{{<color class="yellow" name="Yellow">}}
{{<color class="lime" name="Lime">}}
{{<color class="green" name="Green">}}
{{<color class="teal" name="Teal">}}
{{<color class="cyan" name="Cyan">}}
{{<color class="blue" name="Blue">}}
{{<color class="indigo" name="Indigo">}}
{{<color class="violet" name="Violet">}}
{{<color class="purple" name="Purple">}}
{{<color class="pink" name="Pink">}}
{{<color class="rose" name="Rose">}}
{{<color class="brown" name="Brown">}}
{{<color class="grey" name="Grey">}}

## Using the color system
### Weight usage
Each color palette consists out of 10 colors with incremental steps of 100, and an alpha variant. These colors all have a functional use.

<table class="table">
  <thead>
    <tr>
      <th>Color</th>
      <th>Use</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>50, 50a</td>
      <td>Use as background.</td>
    </tr>
    <tr>
      <td>100, 200, 200a, 300</td>
      <td>Use as component backgrounds  (default, hover, active).</td>
    </tr>
    <tr>
      <td>400, 400a, 500</td>
      <td>Use as borders, and seperators. Variants as focus rings.</td>
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
  </tbody>
</table>

### CSS variables
All colors in the palette are available as CSS variable. The colors are written as `--[color]-[weight]`. Every color class has a matching set of variables, including the `accent` color class.

{{<example class="docs-colors-preview">}}
<div class="grid grid-2 grid-sm-4">
  <div class="rounded p-3" style="background-color: var(--red-300); color: var(--red-900);">
    Red<br />900 on 300
  </div>
  <div class="rounded p-3" style="background-color: var(--accent-900); color: var(--accent-200);">
    Accent<br />200 on 900
  </div>
  <div class="rounded p-3" style="background-color: var(--brown-400); color: var(--brown-800);">
    Brown<br />800 on 400
  </div>
  <div class="rounded p-3" style="background-color: var(--green-700); color: var(--green-100);">
    Green<br />100 on 700
  </div>
  <div class="rounded p-3" style="background-color: var(--yellow-700); color: var(--yellow-text);">
    Yellow<br />text on 700
  </div>
  <div class="rounded p-3" style="background-color: var(--violet-700); color: var(--violet-text);">
    Violet<br />text on 700
  </div>
  <div class="rounded p-3" style="background-color: var(--rose-400a); color: var(--rose-600);">
    Rose<br />600 on 400a
  </div>
  <div class="rounded p-3" style="background-color: var(--cyan-50); color: var(--cyan-500);">
    Cyan<br />500 on 50
  </div>
</div>
{{</example>}}

### Switching between themes
To control which color palette is being used, the "theme mode" classes `system`, `light` and `dark` can be used. When using a color class without a theme class, Mellow will always use the light theme.

Because of how CSS works, when switching between themes you must redefine the color as well. Declaring a different theme won't make the CSS re-evaluate the colors assigned to each value unless that color is being declared on the same level.

{{<example class="docs-colors-preview">}}
<style>
.color-example {
  background-color: var(--color-300);
  color: var(--color-900);
}
</style>
<div class="rounded-lg p-3 accent color-example">
  Accent (docs theme; system)<br />900 on 300
  <div class="rounded p-3 mt-3 accent dark color-example">
    Accent dark<br />900 on 300
    <div class="rounded-sm p-3 mt-3 light color-example">
      Still accent dark<br />900 on 300
      <div class="rounded-sm p-3 mt-3 accent light color-example">
        Accent light<br />900 on 300
      </div>
    </div>
  </div>
</div>
{{</example>}}

The reverse does not apply for colors, however. Declaring a different color within a theme will just inherit the theme.

{{<example class="docs-colors-preview">}}
<style>
.color-example {
  background-color: var(--color-300);
  color: var(--color-900);
}
</style>
<div class="rounded-lg p-3 red dark color-example">
  Red dark<br />900 on 300
  <div class="rounded p-3 mt-3 orange color-example">
    Orange dark<br />900 on 300
    <div class="rounded-sm p-3 mt-3 lime light color-example">
      Lime light<br />900 on 300
      <div class="rounded-sm p-3 mt-3 cyan color-example">
        Cyan light<br />900 on 300
      </div>
    </div>
  </div>
</div>
{{</example>}}
