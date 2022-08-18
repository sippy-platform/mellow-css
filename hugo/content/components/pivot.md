---
title: Pivot
description: Provide easy-to-use navigation on your website.
section: components
---

## Basic navigation
{{<example>}}
<nav aria-label="Navigation">
  <ul class="pivot">
    <li class="pivot-item">
      <a class="pivot-link active" href="#" aria-current="page">Active</a>
    </li>
    <li class="pivot-item">
      <a class="pivot-link" href="#">Link</a>
    </li>
    <li class="pivot-item">
      <a class="pivot-link" href="#">Link</a>
    </li>
    <li class="pivot-item">
      <a class="pivot-link disabled">Disabled</a>
    </li>
  </ul>
</nav>
{{</example>}}

Additionally, you can forgo the unodered list entirely and just use anchors directly.

{{<example>}}
<nav class="pivot" aria-label="Navigation">
  <a class="pivot-link active" href="#" aria-current="page">Active</a>
  <a class="pivot-link" href="#">Link</a>
  <a class="pivot-link" href="#">Link</a>
  <a class="pivot-link disabled">Disabled</a>
</nav>
{{</example>}}

Note: the basic style only exists to give you an easy jumping-off point to make variant styles. Unless it functions solely as a link list that doesn't need to indicate active state you shouldn't use it. It relies solely on color to indicate states other than focus, which isn't recommended.

## Color
As various other components, the pivot control supports the color classes to change its colors.

### Global
{{<example>}}
<nav class="pivot red mb-3" aria-label="Navigation">
  <a class="pivot-link active" href="#" aria-current="page">Active</a>
  <a class="pivot-link" href="#">Link</a>
  <a class="pivot-link" href="#">Link</a>
  <a class="pivot-link disabled">Disabled</a>
</nav>
<nav class="pivot pivot green mb-3" aria-label="Navigation">
  <a class="pivot-link active" href="#" aria-current="page">Active</a>
  <a class="pivot-link" href="#">Link</a>
  <a class="pivot-link" href="#">Link</a>
  <a class="pivot-link disabled">Disabled</a>
</nav>
<nav class="pivot pivot brown" aria-label="Navigation">
  <a class="pivot-link active" href="#" aria-current="page">Active</a>
  <a class="pivot-link" href="#">Link</a>
  <a class="pivot-link" href="#">Link</a>
  <a class="pivot-link disabled">Disabled</a>
</nav>
{{</example>}}

### Links
You can also alter the color of only 1 pivot item.

{{<example>}}
<nav class="pivot mb-3" aria-label="Navigation">
  <a class="pivot-link active" href="#" aria-current="page">Active</a>
  <a class="pivot-link" href="#">Link</a>
  <a class="pivot-link rose" href="#">Link</a>
  <a class="pivot-link disabled">Disabled</a>
</nav>
<nav class="pivot pivot green mb-3" aria-label="Navigation">
  <a class="pivot-link active" href="#" aria-current="page">Active</a>
  <a class="pivot-link" href="#">Link</a>
  <a class="pivot-link accent" href="#">Link</a>
  <a class="pivot-link disabled">Disabled</a>
</nav>
<nav class="pivot pivot brown" aria-label="Navigation">
  <a class="pivot-link active" href="#" aria-current="page">Active</a>
  <a class="pivot-link" href="#">Link</a>
  <a class="pivot-link rose" href="#">Link</a>
  <a class="pivot-link disabled">Disabled</a>
</nav>
{{</example>}}
