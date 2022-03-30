---
title: Spacing
description: The spacing utilities give you fine-grained control over the margin and padding of your elements in a responsive manner.
section: utilities
---

## Margin and padding
Mellow includes a set of responsive-enabled margin and padding classes for each breakpoint ranging from `25rem` en `3rem`.

### Notation
The general notation for the utility classes goes like this:

`[property]-[breakpoint]-[size]`

You can pick from any of these properties:

* `m` - for `margin`
* `p` - for `padding`

All properties can be exted with a specifier to determine on which sides the property is applied. When no specifier is added, the utility will apply to all 4 sides.

* `t` - applies the utility to the top
* `e` - applies the utility to the right (end)
* `b` - applies the utility to the bottom
* `s` - applies the utility to the left (start)
* `x` - applies the utility on the x-axis (right and left)
* `y` - applies the utility on the y-axis (top and bottom)

Each class is available in all breakpoints ranging from `xs` to `ul`. When you are targetting the extra small breakpoint, the breakpoint-suffix is redundant and should not be included in the class (e.g.: use `m-1` instead of `m-xs-1`).

And apply the following size:

* `0` - sets the spacer to `0`
* `1` - sets the spacer to `25rem`
* `2` - sets the spacer to `5rem`
* `3` - sets the spacer to `1rem`
* `4` - sets the spacer to `1.5rem`
* `5` - sets the spacer to `3rem`

For the `margin` classes, every value from `1` to `5` also has a negative counterpart, these can be used by adding the `n`-prefix (e.g.: `m-n1` will create a margin on all sides of `-.25rem`).
