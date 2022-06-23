---
title: Input group
description: Input groups allow you to visually connect multiple inputs with each other similar to button groups.
section: forms
---

To give a visual connection to multiple elements, you can add them to an `input-group`.

## Text add-ons
Text add-ons can be added in every position and/or make combinations.

{{<example class="grid gap-3">}}
<div class="input-group">
  <span class="input-text" id="prefix-addon">Prefix</span>
  <input type="text" class="input" placeholder="Prefixed" aria-label="Prefixed" aria-describedby="prefix-addon">
</div>

<div class="input-group">
  <input type="text" class="input" placeholder="Affixed" aria-label="Affixed">
  <span class="input-text">Affix</span>
  <input type="text" class="input" placeholder="Affixed (cont.)" aria-label="Affixed (cont.)">
</div>

<div class="input-group">
  <input type="text" class="input" placeholder="Suffixed" aria-label="Suffixed" aria-describedby="suffix-addon">
  <span class="input-text" id="suffix-addon">Suffix</span>
</div>

<div class="input-group">
  <span class="input-text" id="prefix-addon-combo">Prefix</span>
  <input type="text" class="input" placeholder="Both" aria-label="Both" aria-describedby="suffix-addon-combo">
  <span class="input-text" id="suffix-addon-combo">Suffix</span>
</div>

<div class="input-group">
  <span class="input-text" id="text-addon-prefix-three">Prefix</span>
  <input type="text" class="input" placeholder="All" aria-label="All">
  <span class="input-text" id="text-addon-affix-three">Affix</span>
  <input type="text" class="input" placeholder="Three" aria-label="Three">
  <span class="input-text" id="text-addon-suffix-three">Suffix</span>
</div>
{{</example>}}

You can also use them on textareas and select boxes. As a result of the flex layout applied to an `input-group`, the addon will resize with the textarea.

{{<example class="grid gap-3">}}
<div class="input-group">
  <span class="input-text" id="textarea-addon">Textarea</span>
  <textarea class="input" placeholder="Message"></textarea>
</div>

<div class="input-group">
  <select class="input" aria-label="Name">
    <option>Choose an option</option>
    <option>Mellow</option>
    <option>Sippy</option>
    <option>Optimise</option>
  </select>
  <span class="input-text" id="select-addon">Select</span>
</div>
{{</example>}}

## Multiple inputs
Make sure there is a clear distinction between the two input controls when no text add-on is used.

{{<example>}}
<div class="input-group">
  <span class="input-text">Multiple fields</span>
  <input type="text" class="input" placeholder="First" aria-label="First">
  <input type="text" class="input" placeholder="Second" aria-label="Second">
</div>
{{</example>}}

## Multiple text add-ons
{{<example>}}
<div class="input-group">
  <span class="input-text">Multiple</span>
  <span class="input-text">Add-ons</span>
  <input type="text" class="input" aria-label="Field">
</div>
{{</example>}}

## Buttons
Buttons can also be put into an `input-group` in any position you can imagen.

{{<example class="grid gap-3">}}
<div class="input-group">
  <a href="#" class="btn btn-default">Button</a>
  <input type="text" class="input" aria-label="Field">
</div>
<div class="input-group">
  <a href="#" class="btn btn-primary">Button</a>
  <a href="#" class="btn btn-primary">Button</a>
  <input type="text" class="input" aria-label="Field">
</div>
<div class="input-group">
  <input type="text" class="input" aria-label="Field">
  <a href="#" class="btn btn-danger">Button</a>
  <input type="text" class="input" aria-label="Field">
</div>
<div class="input-group">
  <a href="#" class="btn btn-secondary">Button</a>
  <input type="text" class="input" aria-label="Field">
  <a href="#" class="btn btn-secondary">Button</a>
</div>
<div class="input-group">
  <input type="text" class="input" aria-label="Field">
  <a href="#" class="btn btn-default">Button</a>
  <a href="#" class="btn btn-default">Button</a>
</div>
<div class="input-group">
  <input type="text" class="input" aria-label="Field">
  <a href="#" class="btn btn-success">Button</a>
</div>
{{</example>}}
