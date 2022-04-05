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

## Variants
Note that we're using the anchor-based navigation here for demo purposes, but we recommend you use the unordered list-based version.

### Underline
{{<example>}}
<nav class="pivot pivot-underline" aria-label="Navigation">
  <a class="pivot-link active" href="#" aria-current="page">Active</a>
  <a class="pivot-link" href="#">Link</a>
  <a class="pivot-link" href="#">Link</a>
  <a class="pivot-link disabled">Disabled</a>
</nav>
{{</example>}}


### Pills
{{<example>}}
<nav class="pivot pivot-pills" aria-label="Navigation">
  <a class="pivot-link active" href="#" aria-current="page">Active</a>
  <a class="pivot-link" href="#">Link</a>
  <a class="pivot-link" href="#">Link</a>
  <a class="pivot-link disabled">Disabled</a>
</nav>
{{</example>}}

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
<nav class="pivot pivot-underline green mb-3" aria-label="Navigation">
  <a class="pivot-link active" href="#" aria-current="page">Active</a>
  <a class="pivot-link" href="#">Link</a>
  <a class="pivot-link" href="#">Link</a>
  <a class="pivot-link disabled">Disabled</a>
</nav>
<nav class="pivot pivot-pills brown" aria-label="Navigation">
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
<nav class="pivot pivot-underline green mb-3" aria-label="Navigation">
  <a class="pivot-link active" href="#" aria-current="page">Active</a>
  <a class="pivot-link" href="#">Link</a>
  <a class="pivot-link accent" href="#">Link</a>
  <a class="pivot-link disabled">Disabled</a>
</nav>
<nav class="pivot pivot-pills brown" aria-label="Navigation">
  <a class="pivot-link active" href="#" aria-current="page">Active</a>
  <a class="pivot-link" href="#">Link</a>
  <a class="pivot-link rose" href="#">Link</a>
  <a class="pivot-link disabled">Disabled</a>
</nav>
{{</example>}}

## Tabs
{{<example>}}
<nav class="pivot pivot-underline" id="myTab" role="tablist">
  <button class="pivot-link active" id="home-tab" data-mellow-toggle="tab" data-mellow-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
  <button class="pivot-link" id="profile-tab" data-mellow-toggle="tab" data-mellow-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
  <button class="pivot-link" id="contact-tab" data-mellow-toggle="tab" data-mellow-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
</nav>
<div class="tab-box mt-3" id="tabbox">
  <div class="tab-content show active" id="home" role="tabpanel" aria-labelledby="home-tab">Home</div>
  <div class="tab-content" id="profile" role="tabpanel" aria-labelledby="profile-tab">Profile</div>
  <div class="tab-content" id="contact" role="tabpanel" aria-labelledby="contact-tab">Contact</div>
</div>
{{</example>}}
