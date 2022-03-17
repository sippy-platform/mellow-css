---
title: Navs
description: Provide easy-to-use navigation on your website.
---

# Basic example
{{<example>}}
<nav aria-label="Navigation">
  <ul class="nav">
    <li class="nav-item">
      <a class="nav-link active" href="#" aria-current="page">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled">Disabled</a>
    </li>
  </ul>
</nav>
{{</example>}}

Additionally, you can forgo the unodered list entirely and just use anchors directly.

{{<example>}}
<nav class="nav" aria-label="Navigation">
  <a class="nav-link active" href="#" aria-current="page">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled">Disabled</a>
</nav>
{{</example>}}

Note: the basic style only exists to give you an easy jumping-off point to make variant styles. Unless it functions solely as a link list that doesn't need to indicate active state you shouldn't use it. It relies solely on color to indicate states other than focus, which isn't recommended.

# Variants
Note that we're using the anchor-based navigation here for demo purposes, but we recommend you use the unordered list-based version.

## Underline
{{<example>}}
<nav class="nav nav-underline" aria-label="Navigation">
  <a class="nav-link active" href="#" aria-current="page">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled">Disabled</a>
</nav>
{{</example>}}


## Pills
{{<example>}}
<nav class="nav nav-pills" aria-label="Navigation">
  <a class="nav-link active" href="#" aria-current="page">Active</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link" href="#">Link</a>
  <a class="nav-link disabled">Disabled</a>
</nav>
{{</example>}}
