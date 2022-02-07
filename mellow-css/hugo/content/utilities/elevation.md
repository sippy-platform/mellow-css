---
title: Elevation
description: Elevations is an import concept in UI design. Use these classes to create a visual hierarchy in your apps.
---

## Shadows

Creating depth gives a clear sense of hierarchy. In light interfaces, this is best done with shadows. Mellow provides a set of 6 classes to alter the elevation given to any given element.

{{<example>}}
<div class="grid grid-2 grid-sm-3 grid-lg-6 gap-4 p-4 bg-light">
  <div class="shadow-0 bg-white p-3">Level 0</div>
  <div class="shadow-1 bg-white p-3">Level 1</div>
  <div class="shadow-2 bg-white p-3">Level 2</div>
  <div class="shadow-3 bg-white p-3">Level 3</div>
  <div class="shadow-4 bg-white p-3">Level 4</div>
  <div class="shadow-5 bg-white p-3">Level 5</div>
</div>
{{</example>}}

## Elevation

The `elevation` classes provide the same shadows but also alter the background color. These classes are ment to be used in dark UIs where elevation solely based on the shadow of the element is not clear enough. A higher elevation level results in a lighter background color because the element approaches the "light source".

{{<example>}}
<div class="grid grid-2 grid-sm-3 grid-lg-6 gap-4 p-4 bg-dark">
  <div class="elevation-0 p-3 text-white">Level 0</div>
  <div class="elevation-1 p-3 text-white">Level 1</div>
  <div class="elevation-2 p-3 text-white">Level 2</div>
  <div class="elevation-3 p-3 text-white">Level 3</div>
  <div class="elevation-4 p-3 text-white">Level 4</div>
  <div class="elevation-5 p-3 text-white">Level 5</div>
</div>
{{</example>}}
