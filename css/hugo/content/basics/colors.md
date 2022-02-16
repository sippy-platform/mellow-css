---
title: Colors
description: Mellow has a built-in extensive color palette.
---

## Main colors
The main color set has `text-*` and `bg-*` classes available in our [text color](/utilities/color) and [background](/utilities/background) utilities.

{{<example show_code="false">}}
<div class="grid grid-2 grid-sm-3">
  <div class="bg-blue-500 p-3">Blue</div>
  <div class="bg-purple-500 p-3">Purple</div>
  <div class="bg-pink-500 p-3">Pink</div>
  <div class="bg-red-500 p-3">Red</div>
  <div class="bg-orange-500 p-3">Orange</div>
  <div class="bg-yellow-500 p-3">Yellow</div>
  <div class="bg-lime-500 p-3">Lime</div>
  <div class="bg-green-500 p-3">Green</div>
  <div class="bg-grey-500 p-3">Grey</div>
  <div class="bg-light p-3">Light</div>
  <div class="bg-dark text-white p-3">Dark</div>
</div>
{{</example>}}

These values are directly available and are defined in the `$colors` sass variable as shown below. Every variable that is directly used in the `$colors` map is equal to the `500` color in its palette.

{{<example show_preview="false" lang="scss">}}
$colors: (
  blue: $blue,
  red: $red,
  lime: $lime,
  green: $green,
  yellow: $yellow,
  orange: $orange,
  pink: $pink,
  purple: $purple,
  grey: $grey,
  light: $light,
  dark: $dark,
  white: #fff,
  muted: $grey,
  reset: inherit
) !default;
{{</example>}}

## Palettes
The full color palette is accessible from the `$plaettes`-variable.

{{<example show_preview="false" lang="scss">}}
$palettes: (
  blues: $blues,
  reds: $reds,
  greens: $greens,
  yellows: $yellows,
  oranges: $oranges,
  pinks: $pinks,
  purples: $purples,
  greys: $greys
);
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

{{<example show_code="false">}}
<div class="grid grid-2 grid-sm-3 grid-xl-4 grid-xxl-5">
  <div>
    <div class="bg-blue-500 p-3 mb-3">
      <p class="m-0 h6">Blue</p>
      <p class="m-0">#0068d8</p>
    </div>
    <div class="bg-blue-50 py-2 px-3">Blue 50</div>
    <div class="bg-blue-100 py-2 px-3">Blue 100</div>
    <div class="bg-blue-200 py-2 px-3">Blue 200</div>
    <div class="bg-blue-300 py-2 px-3">Blue 300</div>
    <div class="bg-blue-400 py-2 px-3">Blue 400</div>
    <div class="bg-blue-500 py-2 px-3">Blue 500</div>
    <div class="bg-blue-600 py-2 px-3">Blue 600</div>
    <div class="bg-blue-700 py-2 px-3">Blue 700</div>
    <div class="bg-blue-800 py-2 px-3">Blue 800</div>
    <div class="bg-blue-900 py-2 px-3">Blue 900</div>
  </div>
  <div>
    <div class="bg-purple-500 p-3 mb-3">
      <p class="m-0 h6">Purple</p>
      <p class="m-0">#a855f7</p>
    </div>
    <div class="bg-purple-50 py-2 px-3">Purple 50</div>
    <div class="bg-purple-100 py-2 px-3">Purple 100</div>
    <div class="bg-purple-200 py-2 px-3">Purple 200</div>
    <div class="bg-purple-300 py-2 px-3">Purple 300</div>
    <div class="bg-purple-400 py-2 px-3">Purple 400</div>
    <div class="bg-purple-500 py-2 px-3">Purple 500</div>
    <div class="bg-purple-600 py-2 px-3">Purple 600</div>
    <div class="bg-purple-700 py-2 px-3">Purple 700</div>
    <div class="bg-purple-800 py-2 px-3">Purple 800</div>
    <div class="bg-purple-900 py-2 px-3">Purple 900</div>
  </div>
  <div>
    <div class="bg-pink-500 p-3 mb-3">
      <p class="m-0 h6">Pink</p>
      <p class="m-0">#ec4899</p>
    </div>
    <div class="bg-pink-50 py-2 px-3">Pink 50</div>
    <div class="bg-pink-100 py-2 px-3">Pink 100</div>
    <div class="bg-pink-200 py-2 px-3">Pink 200</div>
    <div class="bg-pink-300 py-2 px-3">Pink 300</div>
    <div class="bg-pink-400 py-2 px-3">Pink 400</div>
    <div class="bg-pink-500 py-2 px-3">Pink 500</div>
    <div class="bg-pink-600 py-2 px-3">Pink 600</div>
    <div class="bg-pink-700 py-2 px-3">Pink 700</div>
    <div class="bg-pink-800 py-2 px-3">Pink 800</div>
    <div class="bg-pink-900 py-2 px-3">Pink 900</div>
  </div>
  <div>
    <div class="bg-red-500 p-3 mb-3">
      <p class="m-0 h6">Red</p>
      <p class="m-0">#ea002d</p>
    </div>
    <div class="bg-red-50 py-2 px-3">Red 50</div>
    <div class="bg-red-100 py-2 px-3">Red 100</div>
    <div class="bg-red-200 py-2 px-3">Red 200</div>
    <div class="bg-red-300 py-2 px-3">Red 300</div>
    <div class="bg-red-400 py-2 px-3">Red 400</div>
    <div class="bg-red-500 py-2 px-3">Red 500</div>
    <div class="bg-red-600 py-2 px-3">Red 600</div>
    <div class="bg-red-700 py-2 px-3">Red 700</div>
    <div class="bg-red-800 py-2 px-3">Red 800</div>
    <div class="bg-red-900 py-2 px-3">Red 900</div>
  </div>
  <div>
    <div class="bg-orange-500 p-3 mb-3">
      <p class="m-0 h6">Orange</p>
      <p class="m-0">#f57600</p>
    </div>
    <div class="bg-orange-50 py-2 px-3">Orange 50</div>
    <div class="bg-orange-100 py-2 px-3">Orange 100</div>
    <div class="bg-orange-200 py-2 px-3">Orange 200</div>
    <div class="bg-orange-300 py-2 px-3">Orange 300</div>
    <div class="bg-orange-400 py-2 px-3">Orange 400</div>
    <div class="bg-orange-500 py-2 px-3">Orange 500</div>
    <div class="bg-orange-600 py-2 px-3">Orange 600</div>
    <div class="bg-orange-700 py-2 px-3">Orange 700</div>
    <div class="bg-orange-800 py-2 px-3">Orange 800</div>
    <div class="bg-orange-900 py-2 px-3">Orange 900</div>
  </div>
  <div>
    <div class="bg-yellow-500 p-3 mb-3">
      <p class="m-0 h6">Yellow</p>
      <p class="m-0">#f5c800</p>
    </div>
    <div class="bg-yellow-50 py-2 px-3">Yellow 50</div>
    <div class="bg-yellow-100 py-2 px-3">Yellow 100</div>
    <div class="bg-yellow-200 py-2 px-3">Yellow 200</div>
    <div class="bg-yellow-300 py-2 px-3">Yellow 300</div>
    <div class="bg-yellow-400 py-2 px-3">Yellow 400</div>
    <div class="bg-yellow-500 py-2 px-3">Yellow 500</div>
    <div class="bg-yellow-600 py-2 px-3">Yellow 600</div>
    <div class="bg-yellow-700 py-2 px-3">Yellow 700</div>
    <div class="bg-yellow-800 py-2 px-3">Yellow 800</div>
    <div class="bg-yellow-900 py-2 px-3">Yellow 900</div>
  </div>
  <div>
    <div class="bg-lime-500 p-3 mb-3">
      <p class="m-0 h6">Lime</p>
      <p class="m-0">#7acc00</p>
    </div>
    <div class="bg-lime-50 py-2 px-3">Lime 50</div>
    <div class="bg-lime-100 py-2 px-3">Lime 100</div>
    <div class="bg-lime-200 py-2 px-3">Lime 200</div>
    <div class="bg-lime-300 py-2 px-3">Lime 300</div>
    <div class="bg-lime-400 py-2 px-3">Lime 400</div>
    <div class="bg-lime-500 py-2 px-3">Lime 500</div>
    <div class="bg-lime-600 py-2 px-3">Lime 600</div>
    <div class="bg-lime-700 py-2 px-3">Lime 700</div>
    <div class="bg-lime-800 py-2 px-3">Lime 800</div>
    <div class="bg-lime-900 py-2 px-3">Lime 900</div>
  </div>
  <div>
    <div class="bg-green-500 p-3 mb-3">
      <p class="m-0 h6">Green</p>
      <p class="m-0">#29b340</p>
    </div>
    <div class="bg-green-50 py-2 px-3">Green 50</div>
    <div class="bg-green-100 py-2 px-3">Green 100</div>
    <div class="bg-green-200 py-2 px-3">Green 200</div>
    <div class="bg-green-300 py-2 px-3">Green 300</div>
    <div class="bg-green-400 py-2 px-3">Green 400</div>
    <div class="bg-green-500 py-2 px-3">Green 500</div>
    <div class="bg-green-600 py-2 px-3">Green 600</div>
    <div class="bg-green-700 py-2 px-3">Green 700</div>
    <div class="bg-green-800 py-2 px-3">Green 800</div>
    <div class="bg-green-900 py-2 px-3">Green 900</div>
  </div>
  <div>
    <div class="bg-grey-500 p-3 mb-3">
      <p class="m-0 h6">Grey</p>
      <p class="m-0">#6b707a</p>
    </div>
    <div class="bg-grey-50 py-2 px-3">Grey 50</div>
    <div class="bg-grey-100 py-2 px-3">Grey 100</div>
    <div class="bg-grey-200 py-2 px-3">Grey 200</div>
    <div class="bg-grey-300 py-2 px-3">Grey 300</div>
    <div class="bg-grey-400 py-2 px-3">Grey 400</div>
    <div class="bg-grey-500 py-2 px-3">Grey 500</div>
    <div class="bg-grey-600 py-2 px-3">Grey 600</div>
    <div class="bg-grey-700 py-2 px-3">Grey 700</div>
    <div class="bg-grey-800 py-2 px-3">Grey 800</div>
    <div class="bg-grey-900 py-2 px-3">Grey 900</div>
  </div>
</div>
{{</example>}}
