---
title: Alert
description: Provide people with urgent information.
---

## Example
A default alert provides a border to draw attention.

{{<example>}}
<div class="alert" role="alert">
  <div class="alert-message">This is a basic alert message. <a href="#">Link</a> is color-matched.</div>
</div>
{{</example>}}

## Colors
Use the `alert-[color]` classes to add a color to the left border and links.

{{<example>}}
<div class="alert alert-blue" role="alert">
  <div class="alert-message">Look at this alert message! <a href="#">Link</a> is color-matched.</div>
</div>
<div class="alert alert-purple" role="alert">
  <div class="alert-message">Look at this alert message! <a href="#">Link</a> is color-matched.</div>
</div>
<div class="alert alert-pink" role="alert">
  <div class="alert-message">Look at this alert message! <a href="#">Link</a> is color-matched.</div>
</div>
<div class="alert alert-red" role="alert">
  <div class="alert-message">Look at this alert message! <a href="#">Link</a> is color-matched.</div>
</div>
<div class="alert alert-orange" role="alert">
  <div class="alert-message">Look at this alert message! <a href="#">Link</a> is color-matched.</div>
</div>
<div class="alert alert-yellow" role="alert">
  <div class="alert-message">Look at this alert message! <a href="#">Link</a> is color-matched.</div>
</div>
<div class="alert alert-lime" role="alert">
  <div class="alert-message">Look at this alert message! <a href="#">Link</a> is color-matched.</div>
</div>
<div class="alert alert-green" role="alert">
  <div class="alert-message">Look at this alert message! <a href="#">Link</a> is color-matched.</div>
</div>
<div class="alert alert-grey" role="alert">
  <div class="alert-message">Look at this alert message! <a href="#">Link</a> is color-matched.</div>
</div>
{{</example>}}

## Titles
When applying a color modifier, titles with the `alert-title` class will also adapt to this color.

{{<example>}}
<div class="alert alert-blue" role="alert">
  <div class="alert-message">
    <h4 class="alert-title">The alert title</h4>
    Look at this alert message! <a href="#">Link</a> is color-matched.
  </div>
</div>
<div class="alert alert-purple" role="alert">
  <div class="alert-message">
    <h4 class="alert-title">The alert title</h4>
    Look at this alert message! <a href="#">Link</a> is color-matched.
  </div>
</div>
<div class="alert alert-pink" role="alert">
  <div class="alert-message">
    <h4 class="alert-title">The alert title</h4>
    Look at this alert message! <a href="#">Link</a> is color-matched.
  </div>
</div>
<div class="alert alert-red" role="alert">
  <div class="alert-message">
    <h4 class="alert-title">The alert title</h4>
    Look at this alert message! <a href="#">Link</a> is color-matched.
  </div>
</div>
<div class="alert alert-orange" role="alert">
  <div class="alert-message">
    <h4 class="alert-title">The alert title</h4>
    Look at this alert message! <a href="#">Link</a> is color-matched.
  </div>
</div>
<div class="alert alert-yellow" role="alert">
  <div class="alert-message">
    <h4 class="alert-title">The alert title</h4>
    Look at this alert message! <a href="#">Link</a> is color-matched.
  </div>
</div>
<div class="alert alert-lime" role="alert">
  <div class="alert-message">
    <h4 class="alert-title">The alert title</h4>
    Look at this alert message! <a href="#">Link</a> is color-matched.
  </div>
</div>
<div class="alert alert-green" role="alert">
  <div class="alert-message">
    <h4 class="alert-title">The alert title</h4>
    Look at this alert message! <a href="#">Link</a> is color-matched.
  </div>
</div>
<div class="alert alert-grey" role="alert">
  <div class="alert-message">
    <h4 class="alert-title">The alert title</h4>
    Look at this alert message! <a href="#">Link</a> is color-matched.
  </div>
</div>
{{</example>}}

## Icon
Use the `alert-icon` class to plae an icon in your alerts.

{{<example>}}
<div class="alert alert-lime" role="alert">
  <div class="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="currentColor" style="height: 1em; margin-top: -.25rem;"><path d="M12.44 5.5 9 8.94 7.56 7.5A.75.75 0 0 0 6.5 8.56l1.8 1.8a1 1 0 0 0 1.4 0l3.8-3.8a.75.75 0 1 0-1.06-1.06Z"/><path fill-rule="evenodd" d="M18 8A8 8 0 1 1 2 8a8 8 0 0 1 16 0Zm-1.5 0a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Z"/></svg>
  </div>
  <div class="alert-message">
    Success! How nice.
  </div>
</div>
<div class="alert alert-blue" role="alert">
  <div class="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="currentColor" style="height: 1em; margin-top: -.25rem;"><path d="M11.5 4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM11 8v3h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75V8.5h-.25a.75.75 0 0 1 0-1.5H10a1 1 0 0 1 1 1Z"/><path fill-rule="evenodd" d="M10 16a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-1.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13Z"/></svg>
  </div>
  <div class="alert-message">
    We'd like to tell you something.
  </div>
</div>
<div class="alert alert-orange" role="alert">
  <div class="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="currentColor" style="height: 1em; margin-top: -.25rem;"><path d="M11 11.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10.75 9V4a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0Z"/><path fill-rule="evenodd" d="M10 16a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm0-1.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"/></svg>
  </div>
  <div class="alert-message">
    Careful! This may not do what you expect.
  </div>
</div>
<div class="alert alert-red" role="alert">
  <div class="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="currentColor" style="height: 1em; margin-top: -.25rem;"><path d="M6.64 10.3 8.94 8l-2.3-2.3A.75.75 0 1 1 7.7 4.64l2.3 2.3 2.3-2.3a.75.75 0 1 1 1.06 1.06L11.06 8l2.3 2.3a.75.75 0 0 1-1.06 1.06L10 9.06l-2.3 2.3a.75.75 0 1 1-1.06-1.06Z"/><path fill-rule="evenodd" d="M18 8A8 8 0 1 0 2 8a8 8 0 0 0 16 0Zm-1.5 0a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"/></svg>
  </div>
  <div class="alert-message">
    Run.
  </div>
</div>
{{</example>}}

## Floating
Add the `alert-float` class to get an alert that's optimized for floating over content. This is useful for notifications, etc. The `alert-float` class makes the following changes:

* Applies a box shadow to the alert to indicate depth.
* Reduces the padding on the y axis.
* Switches from `flex` to `inline-flex` as its `display` property.
* Make the background transparent and apply a blur and saturation effect to better blend in with its surroundings.
* Removes the borders from all sides but the left.

{{<example class="docs-preview-img">}}
<div class="alert alert-red alert-float position-absolute top-0 start-50 translate-center-x mt-3" role="alert">
  <div class="alert-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="currentColor" style="height: 1em; margin-top: -.25rem;"><path d="M6.64 10.3 8.94 8l-2.3-2.3A.75.75 0 1 1 7.7 4.64l2.3 2.3 2.3-2.3a.75.75 0 1 1 1.06 1.06L11.06 8l2.3 2.3a.75.75 0 0 1-1.06 1.06L10 9.06l-2.3 2.3a.75.75 0 1 1-1.06-1.06Z"/><path fill-rule="evenodd" d="M18 8A8 8 0 1 0 2 8a8 8 0 0 0 16 0Zm-1.5 0a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"/></svg>
  </div>
  <div class="alert-message">
    <h4 class="alert-title">The alert title</h4>
    This alert is floating in the middle.
  </div>
</div>
{{</example>}}

## Alert stack
The `alert-stack` class is a simple utility class that creates a 1 column wide grid for alerts to be stacked in.

{{<example class="docs-preview-img" style="height: 250px">}}
<div class="alert-stack position-absolute bottom-0 end-0 me-3 mb-3">
  <div class="alert alert-red alert-float" role="alert">
    <div class="alert-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="currentColor" style="height: 1em; margin-top: -.25rem;"><path d="M6.64 10.3 8.94 8l-2.3-2.3A.75.75 0 1 1 7.7 4.64l2.3 2.3 2.3-2.3a.75.75 0 1 1 1.06 1.06L11.06 8l2.3 2.3a.75.75 0 0 1-1.06 1.06L10 9.06l-2.3 2.3a.75.75 0 1 1-1.06-1.06Z"/><path fill-rule="evenodd" d="M18 8A8 8 0 1 0 2 8a8 8 0 0 0 16 0Zm-1.5 0a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"/></svg>
    </div>
    <div class="alert-message">
      <h4 class="alert-title">The alert title</h4>
      This alert is in a stack.
    </div>
  </div>
  <div class="alert alert-lime alert-float" role="alert">
    <div class="alert-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="currentColor" style="height: 1em; margin-top: -.25rem;"><path d="M12.44 5.5 9 8.94 7.56 7.5A.75.75 0 0 0 6.5 8.56l1.8 1.8a1 1 0 0 0 1.4 0l3.8-3.8a.75.75 0 1 0-1.06-1.06Z"/><path fill-rule="evenodd" d="M18 8A8 8 0 1 1 2 8a8 8 0 0 1 16 0Zm-1.5 0a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0Z"/></svg>
    </div>
    <div class="alert-message">
      Success! How nice.
    </div>
  </div>
</div>
{{</example>}}
