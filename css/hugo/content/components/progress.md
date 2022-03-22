---
title: Progress
description: Show the progress of an action with the progress bar.
---

## About
Mellow supports both the `progress` element that can be found in HTML as well as a custom implementation with the `progress` class.

The former gives great out of the box accessibility and makes for simpeler markup. If all you need is a simple progress bar, then it is way to go.

### `progress` element
The `progress` element in HTML provides all accessibility tools by default. There is no need to manually style the porgress width. Note that this variant cannot use stacked progress bars, and cannot show labels on top of itself.

{{<example>}}
<progress class="progress" value="0" max="100">0%</progress> 
<progress class="progress" value="33" max="100">33%</progress> 
<progress class="progress" value="67" max="100">67%</progress> 
<progress class="progress" value="100" max="100">100%</progress> 
{{</example>}}

### `progress` class
When using the `progress` class, you can create the bars within it with the `progress-bar` class. You have to set the `aria-value[now|min|max]` values for accessibility yourself and style the width of each bar through inline CSS.

{{<example>}}
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 33%" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 67%" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{</example>}}

## Colors
You can manipulate the color of the progress bar by using the `bg` classes.

{{<example>}}
<div class="progress">
  <div class="progress-bar bg-blue" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-purple" role="progressbar" style="width: 28%" aria-valuenow="28" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-pink" role="progressbar" style="width: 36%" aria-valuenow="36" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-red" role="progressbar" style="width: 44%" aria-valuenow="44" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-orange" role="progressbar" style="width: 52%" aria-valuenow="52" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-yellow" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-lime" role="progressbar" style="width: 68%" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-green" role="progressbar" style="width: 76%" aria-valuenow="76" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-light" role="progressbar" style="width: 84%" aria-valuenow="84" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-grey" role="progressbar" style="width: 92%" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar bg-dark" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{</example>}}

This also works on the `progress` elements.

{{<example>}}
<progress class="progress bg-blue" value="20" max="100">20%</progress>
<progress class="progress bg-purple" value="28" max="100">28%</progress>
<progress class="progress bg-pink" value="36" max="100">36%</progress>
<progress class="progress bg-red" value="44" max="100">44%</progress>
<progress class="progress bg-orange" value="52" max="100">52%</progress>
<progress class="progress bg-yellow" value="60" max="100">60%</progress>
<progress class="progress bg-lime" value="68" max="100">68%</progress>
<progress class="progress bg-green" value="76" max="100">76%</progress>
<progress class="progress bg-light" value="84" max="100">84%</progress>
<progress class="progress bg-grey" value="92" max="100">92%</progress>
<progress class="progress bg-dark" value="100" max="100">100%</progress>
{{</example>}}

## Stacked bars
You can stack multiple progress bars within a single progress bar. When more then one progress bar has been added to a progress class, a margin of 2 pixels will be created between them.

{{<example>}}
<div class="progress">
  <div class="progress-bar bg-green" role="progressbar" style="width: 45%" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-orange" role="progressbar" style="width: 32%" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar bg-red" role="progressbar" style="width: 23%" aria-valuenow="23" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{</example>}}

## Sizes
You can change the size of the progress bar with the `progress-[1|sm|md|lg]` classes. The `progress-md` sets the default height, applying it under normal circumstances has no effect.

{{<example>}}
<div class="progress progress-1">
  <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress progress-sm">
  <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress progress-md">
  <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress progress-lg">
  <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{</example>}}

{{<example>}}
<progress class="progress progress-1" value="50" max="100">50%</progress>
<progress class="progress progress-sm" value="50" max="100">50%</progress>
<progress class="progress progress-md" value="50" max="100">50%</progress>
<progress class="progress progress-lg" value="50" max="100">50%</progress>
{{</example>}}

## Labels
You can change the size of the progress bar with the `progress-[1|sm|md|lg]` classes. The `progress-md` sets the default height, applying it under normal circumstances has no effect.

{{<example>}}
<div class="progress progress-lg">
  <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
</div>
{{</example>}}
