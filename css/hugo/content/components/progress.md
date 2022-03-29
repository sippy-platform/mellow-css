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
  <div class="progress-bar red" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar orange" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar yellow" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar lime" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar green" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar cyan" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar blue" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar purple" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar pink" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar grey" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{</example>}}

This also works on the `progress` elements.

{{<example>}}
<progress class="progress red" value="10" max="100">10%</progress>
<progress class="progress orange" value="20" max="100">20%</progress>
<progress class="progress yellow" value="30" max="100">30%</progress>
<progress class="progress lime" value="40" max="100">40%</progress>
<progress class="progress green" value="50" max="100">50%</progress>
<progress class="progress cyan" value="60" max="100">60%</progress>
<progress class="progress blue" value="70" max="100">70%</progress>
<progress class="progress purple" value="80" max="100">80%</progress>
<progress class="progress pink" value="90" max="100">90%</progress>
<progress class="progress grey" value="100" max="100">100%</progress>
{{</example>}}

## Stacked bars
You can stack multiple progress bars within a single progress bar. When more then one progress bar has been added to a progress class, a margin of 2 pixels will be created between them.

{{<example>}}
<div class="progress">
  <div class="progress-bar green" role="progressbar" style="width: 45%" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar orange" role="progressbar" style="width: 32%" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar red" role="progressbar" style="width: 23%" aria-valuenow="23" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{</example>}}

If you'd want to have multiple progress bars with the same color, you can also apply the color class to the root element. Subsequently, you can override one of them by adding a color class to a single progress bar again.

{{<example>}}
<div class="progress lime">
  <div class="progress-bar" role="progressbar" style="width: 45%" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar" role="progressbar" style="width: 32%" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100"></div>
  <div class="progress-bar cyan" role="progressbar" style="width: 23%" aria-valuenow="23" aria-valuemin="0" aria-valuemax="100"></div>
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
