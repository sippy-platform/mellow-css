---
title: Offcanvas
description: Create a surface that can be called into the viewport from the side.
---

## About
The offcanvas component creates a surface on the side of the screen that can be called in with JavaScript.

## Demo
{{<example>}}
<button class="btn btn-primary" type="button" data-mellow-toggle="offcanvas" data-mellow-target="#offCanvasDemo" aria-controls="offCanvasDemo">
  Open offcanvas
</button>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offCanvasDemo" aria-labelledby="offCanvasDemoLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offCanvasDemoLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-mellow-dismiss="offcanvas" data-mellow-target="#offCanvasDemo" aria-label="Close">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="currentColor" style="height: 1em;"><path fill-rule="evenodd" d="m11.06 8 3.89 3.89c.3.3.3.77 0 1.06-.3.3-.77.3-1.06 0L10 9.06l-3.89 3.89c-.3.3-.77.3-1.06 0a.75.75 0 0 1 0-1.06L8.94 8 5.05 4.11a.75.75 0 0 1 1.06-1.06L10 6.94l3.89-3.89c.3-.3.77-.3 1.06 0 .3.3.3.77 0 1.06L11.06 8Z"/></svg>
    </button>
  </div>
  <div class="offcanvas-body">
    <div>
      You can but all the things in this UI element. Like a button for example:
    </div>
    <button class="btn btn-secondary mt-3" type="button">
      Be a button
    </button>
  </div>
</div>
{{</example>}}


### Canvas surface
The offcanvas component provides an `offcanvas-header` component to position the controls to close its content. The `offcanvas-header` is not visible of the offcanvas is outside of its responsive behavior.

{{<example class="docs-preview-offcanvas">}}
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-mellow-dismiss="offcanvas" data-mellow-target="#offcanvas" aria-label="Close">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="currentColor" style="height: 1em;"><path fill-rule="evenodd" d="m11.06 8 3.89 3.89c.3.3.3.77 0 1.06-.3.3-.77.3-1.06 0L10 9.06l-3.89 3.89c-.3.3-.77.3-1.06 0a.75.75 0 0 1 0-1.06L8.94 8 5.05 4.11a.75.75 0 0 1 1.06-1.06L10 6.94l3.89-3.89c.3-.3.77-.3 1.06 0 .3.3.3.77 0 1.06L11.06 8Z"/></svg>
    </button>
  </div>
  <div class="offcanvas-body">
    Place the content of your offcanvas here. This offcanvas isn't interactive.
  </div>
</div>
{{</example>}}

## Directions
{{<example>}}
<button class="btn btn-primary" type="button" data-mellow-toggle="offcanvas" data-mellow-target="#offCanvasEndDemo" aria-controls="offCanvasEndDemo">
  Right
</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offCanvasEndDemo" aria-labelledby="offCanvasEndDemoLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offCanvasEndDemoLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-mellow-dismiss="offcanvas" data-mellow-target="#offCanvasEndDemo" aria-label="Close">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="currentColor" style="height: 1em;"><path fill-rule="evenodd" d="m11.06 8 3.89 3.89c.3.3.3.77 0 1.06-.3.3-.77.3-1.06 0L10 9.06l-3.89 3.89c-.3.3-.77.3-1.06 0a.75.75 0 0 1 0-1.06L8.94 8 5.05 4.11a.75.75 0 0 1 1.06-1.06L10 6.94l3.89-3.89c.3-.3.77-.3 1.06 0 .3.3.3.77 0 1.06L11.06 8Z"/></svg>
    </button>
  </div>
  <div class="offcanvas-body">
    <div>
      On your right.
    </div>
  </div>
</div>
{{</example>}}

## Responsive
Offcanvas supports responsive behavior. The example below sets `offcanvas-sm` and will show the content in an offcanvas on the `sm`-breakpoint and lower.

{{<example>}}
<button class="btn btn-primary" type="button" data-mellow-toggle="offcanvas" data-mellow-target="#offCanvasDemo" aria-controls="offCanvasDemo">
  Open offcanvas
</button>

<div class="offcanvas-sm offcanvas-start" tabindex="-1" id="offCanvasDemo" aria-labelledby="offCanvasDemoLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offCanvasDemoLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-mellow-dismiss="offcanvas" data-mellow-target="#offCanvasDemo" aria-label="Close">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="currentColor" style="height: 1em;"><path fill-rule="evenodd" d="m11.06 8 3.89 3.89c.3.3.3.77 0 1.06-.3.3-.77.3-1.06 0L10 9.06l-3.89 3.89c-.3.3-.77.3-1.06 0a.75.75 0 0 1 0-1.06L8.94 8 5.05 4.11a.75.75 0 0 1 1.06-1.06L10 6.94l3.89-3.89c.3-.3.77-.3 1.06 0 .3.3.3.77 0 1.06L11.06 8Z"/></svg>
    </button>
  </div>
  <div class="offcanvas-body">
    <div>
      This content will be in an offcanvas only on small screens.
    </div>
    <button class="btn btn-secondary mt-3" type="button">
      Be a button
    </button>
  </div>
</div>
{{</example>}}
