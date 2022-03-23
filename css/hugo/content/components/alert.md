---
title: Alert
description: Provide people with urgent information.
---

## Example
A default alert provides a border to draw attention.

{{<example>}}
<div class="alert" role="alert">
  This is a basic alert message.
</div>
{{</example>}}

## Colors
Use the `alert-[color]` classes to add a color to the left border and links.

{{<example>}}
<div class="alert alert-blue" role="alert">
  Look at this alert message! <a href="#">Link</a> is bold.
</div>
<div class="alert alert-purple" role="alert">
  Look at this alert message! <a href="#">Link</a> is bold.
</div>
<div class="alert alert-pink" role="alert">
  Look at this alert message! <a href="#">Link</a> is bold.
</div>
<div class="alert alert-red" role="alert">
  Look at this alert message! <a href="#">Link</a> is bold.
</div>
<div class="alert alert-orange" role="alert">
  Look at this alert message! <a href="#">Link</a> is bold.
</div>
<div class="alert alert-yellow" role="alert">
  Look at this alert message! <a href="#">Link</a> is bold.
</div>
<div class="alert alert-lime" role="alert">
  Look at this alert message! <a href="#">Link</a> is bold.
</div>
<div class="alert alert-green" role="alert">
  Look at this alert message! <a href="#">Link</a> is bold.
</div>
<div class="alert alert-grey" role="alert">
  Look at this alert message! <a href="#">Link</a> is bold.
</div>
{{</example>}}

## Titles
When applying a color modifier, titles with the `alert-title` class will also adapt to this color.

{{<example>}}
<div class="alert alert-blue" role="alert">
  <h4 class="alert-title">The alert title</h4>
  Look at this alert message! <a href="#">Link</a> is bold.
</div>
<div class="alert alert-purple" role="alert">
  <h4 class="alert-title">The alert title</h4>
  Look at this alert message! <a href="#">Link</a> is bold.
</div>
<div class="alert alert-pink" role="alert">
  <h4 class="alert-title">The alert title</h4>
  Look at this alert message! <a href="#">Link</a> is bold.
</div>
<div class="alert alert-red" role="alert">
  <h4 class="alert-title">The alert title</h4>
  Look at this alert message! <a href="#">Link</a> is bold.
</div>
<div class="alert alert-orange" role="alert">
  <h4 class="alert-title">The alert title</h4>
  Look at this alert message! <a href="#">Link</a> is bold.
</div>
<div class="alert alert-yellow" role="alert">
  <h4 class="alert-title">The alert title</h4>
  Look at this alert message! <a href="#">Link</a> is bold.
</div>
<div class="alert alert-lime" role="alert">
  <h4 class="alert-title">The alert title</h4>
  Look at this alert message! <a href="#">Link</a> is bold.
</div>
<div class="alert alert-green" role="alert">
  <h4 class="alert-title">The alert title</h4>
  Look at this alert message! <a href="#">Link</a> is bold.
</div>
<div class="alert alert-grey" role="alert">
  <h4 class="alert-title">The alert title</h4>
  Look at this alert message! <a href="#">Link</a> is bold.
</div>
{{</example>}}

## Floating
Add the `alert-float` class to get an alert that's optimized for floating over content. This is useful for notifications, etc. The `alert-float` class makes the following changes:

* Applies a box shadow to the alert to indicate depth.
* Reduces the padding on the y axis.
* Switches from `flex` to `inline-flex` as its `display` property.

{{<example>}}
<div class="alert alert-lime alert-float" role="alert">
  <div class="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="currentColor" style="height: 1em; margin-top: -.25rem;"><path d="M12.44 5.5 9 8.94 7.56 7.5A.75.75 0 0 0 6.5 8.56l1.8 1.8a1 1 0 0 0 1.4 0l3.8-3.8a.75.75 0 1 0-1.06-1.06Z"/><path fill-rule="evenodd" d="M18 8A8 8 0 1 1 2 8a8 8 0 0 1 16 0Zm-1.5 0a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Z"/></svg>
  </div>
  <div class="alert-message">
    Look at this alert message! <a href="#">Link</a> is bold.
  </div>
</div>
{{</example>}}
