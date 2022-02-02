---
title: Flex
description: CSS Flex gives you a lot of powerful tools to quickly make UI layouts. All flex classes have responsive modifiers.
---

## Enable flex

To enable flex, you can use either the `flex` or `inline-flex` classes. These classes have responsive variants like `d-md-flex` and `d-xxl-inline-flex`. As usual, there is no `-xs`-variant.

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

You can change the direction of a flex element by using the `flex-*`-classes.

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

## Wrapping content
Classes to control the wrap behavior are also available. Make your window smaller if the flex examples aren't wrapping. In the first example, as soon as the width becomes to small, the last item will jump to the next line.

The second example will compress each block to keep everything on a single line.

The third example has the same behavior as the first, but puts the wrapped lines above the startline instead of underneath it.

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

## Justify content
Use the `flex-justify-*`-classes to justify the flex elements.

* `flex-justify-start`
* `flex-justify-end`
* `flex-justify-center`
* `flex-justify-between`
* `flex-justify-around`

{{<example class="docs-preview-flex">}}
<div class="d-flex mb-3 flex-justify-start">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 flex-justify-end">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 flex-justify-center">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 flex-justify-between">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 flex-justify-around">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
{{</example>}}

## Align items
Use the `flex-items-*`-classes to align items in their flex box.

* `flex-items-start`
* `flex-items-end`
* `flex-items-center`
* `flex-items-baseline`
* `flex-items-stretch`

{{<example class="docs-preview-flex">}}
<div class="d-flex mb-3 flex-items-start" style="height: 100px">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 flex-items-end" style="height: 100px">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 flex-items-center" style="height: 100px">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 flex-items-baseline" style="height: 100px">
  <div class="md-item marketing-6">1</div>
  <div class="md-item">2</div>
  <div class="md-item h5">3</div>
</div>
<div class="d-flex mb-3 flex-items-stretch" style="height: 100px">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
{{</example>}}

## Align content
Use the `flex-content-*`-classes to align content in its flex box.

* `flex-content-start`
* `flex-content-end`
* `flex-content-center`
* `flex-content-between`
* `flex-content-around`
* `flex-content-stretch`

{{<example class="docs-preview-flex">}}
<div class="d-flex mb-3 flex-wrap flex-content-start" style="height: 100px">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 flex-wrap flex-content-end" style="height: 100px">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 flex-wrap flex-content-center" style="height: 100px">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 flex-wrap flex-content-between" style="height: 100px">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 flex-wrap flex-content-around" style="height: 100px">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 flex-wrap flex-content-stretch" style="height: 100px">
  <div class="md-item">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
{{</example>}}

## Flex
The `flex-*` classes allow you to set the flexability of an item within a flex-container.

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

## Align self
Use the `flex-self-*`-classes to align the item compared to the flex container. This overwrites any `flex-items-`-class that might be applied to the flex container.

* `flex-self-auto`
* `flex-self-start`
* `flex-self-end`
* `flex-self-center`
* `flex-self-baseline`
* `flex-self-stretch`

{{<example class="docs-preview-flex">}}
<div class="d-flex mb-3 flex-items-stretch" style="height: 100px">
  <div class="md-item flex-self-auto">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 flex-items-stretch" style="height: 100px">
  <div class="md-item flex-self-start">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 flex-items-stretch" style="height: 100px">
  <div class="md-item flex-self-end">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 flex-items-stretch" style="height: 100px">
  <div class="md-item flex-self-center">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex mb-3 flex-items-stretch" style="height: 100px">
  <div class="md-item flex-self-baseline">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
<div class="d-flex flex-items-stretch" style="height: 100px">
  <div class="md-item flex-self-stretch">1</div>
  <div class="md-item">2</div>
  <div class="md-item">3</div>
</div>
{{</example>}}

## Order
You can also change the order the the items in a flex container with the `order-*`-classes. These range from 0 to 5, but also provide `first` and `last` variants.

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
