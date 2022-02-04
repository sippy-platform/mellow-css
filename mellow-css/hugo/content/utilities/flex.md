---
title: Flex
description: CSS Flex gives you a lot of powerful tools to quickly make UI layouts. All flex classes have responsive modifiers.
---

## Using flex

To use a flexbox layout, you can use the `d-[breakpoint]-flex` or `d-[breakpoint]-inline-flex` classes.

{{<example class="docs-preview-flex">}}
<div class="d-flex mb-3">
  <div class="p-3">We are</div>
  <div class="p-3">flex</div>
</div>
<div class="d-inline-flex">
  <div class="p-3">We are</div>
  <div class="p-3">inline flex</div>
</div>
{{</example>}}

## Direction

You can change the direction of a flex element by using the flex direction classes.

* `flex-[row|column|row-reverse|column-reverse]`

{{<example class="docs-preview-flex">}}
<div class="d-flex mb-3 flex-row">
  <div class="p-3">Item 1</div>
  <div class="p-3">Item 2</div>
  <div class="p-3">Item 3</div>
</div>
<div class="d-flex mb-3 flex-column">
  <div class="p-3">Item 1</div>
  <div class="p-3">Item 2</div>
  <div class="p-3">Item 3</div>
</div>
<div class="d-flex mb-3 flex-row-reverse">
  <div class="p-3">Item 1</div>
  <div class="p-3">Item 2</div>
  <div class="p-3">Item 3</div>
</div>
<div class="d-flex flex-column-reverse">
  <div class="p-3">Item 1</div>
  <div class="p-3">Item 2</div>
  <div class="p-3">Item 3</div>
</div>
{{</example>}}

## Wrap
Classes to control the wrap behavior are also available. Make your window smaller if the flex examples aren't wrapping. In the first example, as soon as the width becomes to small, the last item will jump to the next line.

The second example will compress each block to keep everything on a single line.

The third example has the same behavior as the first, but puts the wrapped lines above the startline instead of underneath it.

* `flex-[wrap|nowrap|wrap-reverse]`

{{<example class="docs-preview-flex">}}
<div class="d-flex mb-3 flex-wrap">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
  <div class="md-item">4</div>
  <div class="md-item">5</div>
  <div class="md-item">6</div>
  <div class="md-item">7</div>
  <div class="md-item">8</div>
  <div class="md-item">9</div>
  <div class="md-item">10</div>
</div>
<div class="d-flex mb-3 flex-nowrap">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
  <div class="md-item">4</div>
  <div class="md-item">5</div>
  <div class="md-item">6</div>
  <div class="md-item">7</div>
  <div class="md-item">8</div>
  <div class="md-item">9</div>
  <div class="md-item">10</div>
</div>
<div class="d-flex flex-wrap-reverse">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
  <div class="md-item">4</div>
  <div class="md-item">5</div>
  <div class="md-item">6</div>
  <div class="md-item">7</div>
  <div class="md-item">8</div>
  <div class="md-item">9</div>
  <div class="md-item">10</div>
</div>
{{</example>}}

## Positioning
### Justify content
Use the justify content classes to justify the flex elements.

* `justify-content-start`
* `justify-content-end`
* `justify-content-center`
* `justify-content-between`
* `justify-content-around`

{{<example class="docs-preview-flex">}}
<div class="d-flex mb-3 justify-content-start">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 justify-content-end">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 justify-content-center">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 justify-content-between">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 justify-content-around">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
{{</example>}}

### Align items
Use the align item classes to align items in their flex box.

* `align-items-start`
* `align-items-end`
* `align-items-center`
* `align-items-baseline`
* `align-items-stretch`

{{<example class="docs-preview-flex">}}
<div class="d-flex mb-3 align-items-start" style="height: 100px">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 align-items-end" style="height: 100px">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 align-items-center" style="height: 100px">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 align-items-baseline" style="height: 100px">
  <div class="md-item marketing-6">1</div>
  <div class="md-item">2</div>
  <div class="md-item h5">3</div>
</div>
<div class="d-flex mb-3 align-items-stretch" style="height: 100px">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
{{</example>}}

### Align content
Use the align content classes to align content in its flex box.

* `align-content-start`
* `align-content-end`
* `align-content-center`
* `align-content-between`
* `align-content-around`
* `align-content-stretch`

{{<example class="docs-preview-flex">}}
<div class="d-flex mb-3 flex-wrap align-content-start" style="height: 100px">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 flex-wrap align-content-end" style="height: 100px">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 flex-wrap align-content-center" style="height: 100px">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 flex-wrap align-content-between" style="height: 100px">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 flex-wrap align-content-around" style="height: 100px">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 flex-wrap align-content-stretch" style="height: 100px">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
{{</example>}}

### Align self
Use the align self classes to align the item compared to the flex container. This overwrites any align items class that might be applied to the flex container.

* `align-self-auto`
* `align-self-start`
* `align-self-end`
* `align-self-center`
* `align-self-baseline`
* `align-self-stretch`

{{<example class="docs-preview-flex">}}
<div class="d-flex mb-3 flex-items-stretch" style="height: 100px">
  <div class="md-item align-self-auto">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 flex-items-stretch" style="height: 100px">
  <div class="md-item align-self-start">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 flex-items-stretch" style="height: 100px">
  <div class="md-item align-self-end">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 flex-items-stretch" style="height: 100px">
  <div class="md-item align-self-center">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 flex-items-stretch" style="height: 100px">
  <div class="md-item align-self-baseline">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex flex-items-stretch" style="height: 100px">
  <div class="md-item align-self-stretch">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
{{</example>}}

## Flex
The flex classes allow you to set the flexability of an item within a flex-container. The following classes are supported:

* `flex-[breakpoints]-[1|auto]`

{{<example class="docs-preview-flex">}}
<div class="d-flex mb-3">
  <div class="md-item">1</div>
  <div class="md-item flex-1">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3">
  <div class="md-item flex-1">1</div>
  <div class="md-item flex-1">2</div>
  <div class="md-item flex-1">3</div>
</div>
<div class="d-flex mb-3">
  <div class="md-item flex-auto">Small</div>
  <div class="md-item flex-auto">I'm very wide, look at it</div>
  <div class="md-item flex-auto">Also small</div>
</div>
{{</example>}}

### Fill
The `flex-[breakpoint]-fill` class can be used on items in a flexbox layout to fill out the flexbox with the items getting equal additional space.

{{<example class="docs-preview-flex">}}
<div class="d-flex mb-3">
  <div class="md-item flex-fill">These columns</div>
  <div class="md-item flex-fill">Will all see the same amount</div>
  <div class="md-item flex-fill">Of width added</div>
</div>
<div class="d-flex">
  <div class="md-item flex-1">Despite their contents</div>
  <div class="md-item flex-1">These columns</div>
  <div class="md-item flex-1">Are equal in size</div>
</div>
{{</example>}}


### Grow and shrink
Mellow provides you with the `flex-grow-*` and `flex-shrink-*` utility classes to allow you to set a flew item's ability to grow and fill the available space, and shrink to the minimum space it needs.

* `flex-[breakpoints]-grow-[0|1]`
* `flex-[breakpoints]-shrink-[0|1]`

{{<example class="docs-preview-flex">}}
<div class="d-flex mb-3">
  <div class="md-item">1</div>
  <div class="md-item flex-grow-1">I'm as wide as I can be</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3" style="max-width: 320px">
  <div class="md-item">flex item block</div>
  <div class="md-item flex-shrink-1">I'm as wide as possible</div>
  <div class="md-item">flex item block</div>
</div>
<div class="d-flex mb-3">
  <div class="md-item">1</div>
  <div class="md-item flex-grow-0">I'm as wide as needed</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3" style="max-width: 320px">
  <div class="md-item">flex item block</div>
  <div class="md-item flex-shrink-0">I'm as wide as needed</div>
  <div class="md-item">flex item block</div>
</div>
{{</example>}}

## Order
You can also change the order the the items in a flex container with the flex order classes. These range from 0 to 5, but also provide `first` and `last` variants.

* `order-[breakpoint]-[0-5]`
* `order-[breakpoint]-[first|last]`

{{<example class="docs-preview-flex">}}
<div class="d-flex mb-3">
  <div class="md-item order-2">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
  <div class="md-item">4</div>
  <div class="md-item">5</div>
</div>
<div class="d-flex mb-3">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
  <div class="md-item order-1">4</div>
  <div class="md-item">5</div>
</div>
<div class="d-flex mb-3">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item order-first">3</div>
  <div class="md-item">4</div>
  <div class="md-item">5</div>
</div>
<div class="d-flex mb-3">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item order-last">3</div>
  <div class="md-item">4</div>
  <div class="md-item">5</div>
</div>
{{</example>}}
