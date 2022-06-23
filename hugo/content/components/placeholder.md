---
title: Placeholder
description: Show a placeholder for content that is being loaded.
section: components
---

## Basic
The placeholder element provides a simple class to create placeholder elements.

{{<example>}}
<div class="placeholder w-25"></div>
{{</example>}}

## Example
{{<example class="d-flex">}}
<div class="card me-2" aria-hidden="true" style="width: 240px">
  <div class="card-body">
    <h5 class="card-title placeholder-glow">
      Hello card
    </h5>
    <p class="card-text placeholder-glow">
      What an <span class="text-accent">beautiful</span> day for a fully loaded card of content, isn't it?
    </p>
    <a href="#" tabindex="-1" class="btn btn-primary">Get started</a>
  </div>
</div>
<div class="card" aria-hidden="true" style="width: 240px">
  <div class="card-body">
    <h5 class="card-title placeholder-glow">
      <span class="placeholder w-5"></span>
    </h5>
    <p class="card-text placeholder-glow">
      <span class="placeholder w-3"></span>
      <span class="text-accent"><span class="placeholder w-4"></span></span>
      <span class="placeholder w-4"></span>
      <span class="placeholder w-5"></span>
      <span class="placeholder w-2"></span>
    </p>
    <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder w-5"></a>
  </div>
</div>
{{</example>}}

### Colors
Placeholder will automatically adopt the color of the text they replace. If you'd rather use the color classes; that's possible too.

{{<example>}}
<span class="placeholder w-100"></span>
<span class="placeholder w-100 text-blue"></span>
<span class="placeholder w-100 red"></span>
<span class="placeholder w-100 orange"></span>
<span class="placeholder w-100 amber"></span>
<span class="placeholder w-100 yellow"></span>
<span class="placeholder w-100 lime"></span>
<span class="placeholder w-100 green"></span>
<span class="placeholder w-100 teal"></span>
<span class="placeholder w-100 cyan"></span>
<span class="placeholder w-100 blue"></span>
<span class="placeholder w-100 indigo"></span>
<span class="placeholder w-100 violet"></span>
<span class="placeholder w-100 purple"></span>
<span class="placeholder w-100 pink"></span>
<span class="placeholder w-100 rose"></span>
<span class="placeholder w-100 brown"></span>
<span class="placeholder w-100 grey"></span>
{{</example>}}

### Sizes
Placeholders are available in a number of sizes.

{{<example>}}
<span class="placeholder w-100 placeholder-xs"></span>
<span class="placeholder w-100 placeholder-sm"></span>
<span class="placeholder w-100"></span>
<span class="placeholder w-100 placeholder-lg"></span>
{{</example>}}
