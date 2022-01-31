---
title: Display
description: With the display-utilities, you can easily change the display behavior of an element, with responsive variants included.
---

## Notation
The general notation for these utility classes goes like this:

`<property>-<responsive>-<size>`

As per usual, the `xs`-breakpoint is omitted because it has the same effect as not including a responsive modifier at all.

Mellow supports the following properties=

* `block`
* `flex`
* `grid`
* `inline-block`
* `inline-flex`
* `inline`
* `none`

Note that a `d-grid`-class exists distinct from the `grid`-class, while `d-grid` sets `display: grid`, the `grid`-class presets a few other values and allows the usage of our grid system within it. You cannot use the grid classes inside `d-grid` (unless you set `grid` to it as well, but at that point setting `d-grid` would be pointless).

## Examples
{{<example>}}
<div class="d-inline bg-blue p-3 text-white">d-inline</div>
<div class="d-inline bg-red p-3 text-white">d-inline</div>
{{</example>}}

{{<example>}}
<span class="d-block bg-blue p-3 text-white">d-block</span>
<span class="d-block bg-red p-3 text-white">d-block</span>
{{</example>}}
