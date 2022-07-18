---
title: Alert
description: Provide people with urgent information.
section: components
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
<div class="alert red" role="alert">
  <div class="alert-message">Look at this alert message! <a href="#">Link</a> is color-matched.</div>
</div>
<div class="alert orange" role="alert">
  <div class="alert-message">Look at this alert message! <a href="#">Link</a> is color-matched.</div>
</div>
<div class="alert amber" role="alert">
  <div class="alert-message">Look at this alert message! <a href="#">Link</a> is color-matched.</div>
</div>
<div class="alert yellow" role="alert">
  <div class="alert-message">Look at this alert message! <a href="#">Link</a> is color-matched.</div>
</div>
<div class="alert lime" role="alert">
  <div class="alert-message">Look at this alert message! <a href="#">Link</a> is color-matched.</div>
</div>
<div class="alert green" role="alert">
  <div class="alert-message">Look at this alert message! <a href="#">Link</a> is color-matched.</div>
</div>
<div class="alert teal" role="alert">
  <div class="alert-message">Look at this alert message! <a href="#">Link</a> is color-matched.</div>
</div>
<div class="alert cyan" role="alert">
  <div class="alert-message">Look at this alert message! <a href="#">Link</a> is color-matched.</div>
</div>
<div class="alert blue" role="alert">
  <div class="alert-message">Look at this alert message! <a href="#">Link</a> is color-matched.</div>
</div>
<div class="alert indigo" role="alert">
  <div class="alert-message">Look at this alert message! <a href="#">Link</a> is color-matched.</div>
</div>
<div class="alert violet" role="alert">
  <div class="alert-message">Look at this alert message! <a href="#">Link</a> is color-matched.</div>
</div>
<div class="alert purple" role="alert">
  <div class="alert-message">Look at this alert message! <a href="#">Link</a> is color-matched.</div>
</div>
<div class="alert pink" role="alert">
  <div class="alert-message">Look at this alert message! <a href="#">Link</a> is color-matched.</div>
</div>
<div class="alert rose" role="alert">
  <div class="alert-message">Look at this alert message! <a href="#">Link</a> is color-matched.</div>
</div>
<div class="alert brown" role="alert">
  <div class="alert-message">Look at this alert message! <a href="#">Link</a> is color-matched.</div>
</div>
<div class="alert grey" role="alert">
  <div class="alert-message">Look at this alert message! <a href="#">Link</a> is color-matched.</div>
</div>
{{</example>}}

### Buttons, progress, etc.
As a result of the use of CSS variable to style the colors, any element that responds to colors will automatically follow the alert color. You can still set them to another color if you want to.

{{<example>}}
<div class="alert rose" role="alert">
  <div class="alert-message">
    <p>Look at this alert message! <a href="#">Link</a> is color-matched.</p>
    <progress class="progress mb-3" value="50" max="100">50%</progress>
    <div class="toolbar">
      <div class="btn-group">
        <button type="button" class="btn btn-color">Colored</button>
        <button type="button" class="btn btn-hover">On hover</button>
      </div>
      <button type="button" class="btn btn-hover cyan">Override to cyan</button>
    </div>
  </div>
</div>
<div class="alert green" role="alert">
  <div class="alert-message">
    <p>Look at this alert message! <a href="#">Link</a> is color-matched.</p>
    <progress class="progress mb-3" value="50" max="100">50%</progress>
    <div class="toolbar">
      <div class="btn-group">
        <button type="button" class="btn btn-color">Colored</button>
        <button type="button" class="btn btn-hover">On hover</button>
      </div>
      <button type="button" class="btn btn-hover purple">Override to purple</button>
    </div>
  </div>
</div>
{{</example>}}

## Titles
When applying a color modifier, titles with the `alert-title` class will also adapt to this color.

{{<example>}}
<div class="alert red" role="alert">
  <div class="alert-message">
    <h4 class="alert-title">The alert title</h4>
    Look at this alert message! <a href="#">Link</a> is color-matched.
  </div>
</div>
<div class="alert orange" role="alert">
  <div class="alert-message">
    <h4 class="alert-title">The alert title</h4>
    Look at this alert message! <a href="#">Link</a> is color-matched.
  </div>
</div>
<div class="alert amber" role="alert">
  <div class="alert-message">
    <h4 class="alert-title">The alert title</h4>
    Look at this alert message! <a href="#">Link</a> is color-matched.
  </div>
</div>
<div class="alert yellow" role="alert">
  <div class="alert-message">
    <h4 class="alert-title">The alert title</h4>
    Look at this alert message! <a href="#">Link</a> is color-matched.
  </div>
</div>
<div class="alert lime" role="alert">
  <div class="alert-message">
    <h4 class="alert-title">The alert title</h4>
    Look at this alert message! <a href="#">Link</a> is color-matched.
  </div>
</div>
<div class="alert green" role="alert">
  <div class="alert-message">
    <h4 class="alert-title">The alert title</h4>
    Look at this alert message! <a href="#">Link</a> is color-matched.
  </div>
</div>
<div class="alert teal" role="alert">
  <div class="alert-message">
    <h4 class="alert-title">The alert title</h4>
    Look at this alert message! <a href="#">Link</a> is color-matched.
  </div>
</div>
<div class="alert cyan" role="alert">
  <div class="alert-message">
    <h4 class="alert-title">The alert title</h4>
    Look at this alert message! <a href="#">Link</a> is color-matched.
  </div>
</div>
<div class="alert blue" role="alert">
  <div class="alert-message">
    <h4 class="alert-title">The alert title</h4>
    Look at this alert message! <a href="#">Link</a> is color-matched.
  </div>
</div>
<div class="alert indigo" role="alert">
  <div class="alert-message">
    <h4 class="alert-title">The alert title</h4>
    Look at this alert message! <a href="#">Link</a> is color-matched.
  </div>
</div>
<div class="alert violet" role="alert">
  <div class="alert-message">
    <h4 class="alert-title">The alert title</h4>
    Look at this alert message! <a href="#">Link</a> is color-matched.
  </div>
</div>
<div class="alert purple" role="alert">
  <div class="alert-message">
    <h4 class="alert-title">The alert title</h4>
    Look at this alert message! <a href="#">Link</a> is color-matched.
  </div>
</div>
<div class="alert pink" role="alert">
  <div class="alert-message">
    <h4 class="alert-title">The alert title</h4>
    Look at this alert message! <a href="#">Link</a> is color-matched.
  </div>
</div>
<div class="alert rose" role="alert">
  <div class="alert-message">
    <h4 class="alert-title">The alert title</h4>
    Look at this alert message! <a href="#">Link</a> is color-matched.
  </div>
</div>
<div class="alert brown" role="alert">
  <div class="alert-message">
    <h4 class="alert-title">The alert title</h4>
    Look at this alert message! <a href="#">Link</a> is color-matched.
  </div>
</div>
<div class="alert grey" role="alert">
  <div class="alert-message">
    <h4 class="alert-title">The alert title</h4>
    Look at this alert message! <a href="#">Link</a> is color-matched.
  </div>
</div>
{{</example>}}

## Icon
Use the `alert-icon` class to plae an icon in your alerts.

{{<example>}}
<div class="alert lime" role="alert">
  <div class="alert-icon">
    <i class="vi vi-circle-check"></i>
  </div>
  <div class="alert-message">
    Success! How nice.
  </div>
</div>
<div class="alert cyan" role="alert">
  <div class="alert-icon">
    <i class="vi vi-circle-info"></i>
  </div>
  <div class="alert-message">
    We'd like to tell you something.
  </div>
</div>
<div class="alert orange" role="alert">
  <div class="alert-icon">
    <i class="vi vi-circle-exclamation"></i>
  </div>
  <div class="alert-message">
    Careful! This may not do what you expect.
  </div>
</div>
<div class="alert red" role="alert">
  <div class="alert-icon">
    <i class="vi vi-circle-xmark"></i>
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
<div class="alert red alert-float position-absolute top-0 start-50 translate-center-x mt-3" role="alert">
  <div class="alert-icon">
    <i class="vi vi-circle-xmark"></i>
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
<div class="alert-stack alert-stack-bottom-end">
  <div class="alert red alert-float" role="alert">
    <div class="alert-icon">
      <i class="vi vi-circle-xmark"></i>
    </div>
    <div class="alert-message">
      <h4 class="alert-title">The alert title</h4>
      This alert is in a stack.
    </div>
  </div>
  <div class="alert lime alert-float" role="alert">
    <div class="alert-icon">
      <i class="vi vi-circle-check"></i>
    </div>
    <div class="alert-message">
      Success! How nice.
    </div>
  </div>
</div>
{{</example>}}
