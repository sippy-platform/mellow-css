---
title: Form
description: Forms are an extensive part of Mellow with various controls, layouts, and connected components.
section: components
---

## Inputs
### Text
Make your input fields look nice with the `input` class.

{{<example>}}
<form class="grid gap-3">
  <input type="text" class="input" placeholder="Name" />
  <input type="email" class="input" placeholder="Email" />
  <input type="password" class="input" placeholder="Password" />
  <textarea class="input" placeholder="Message"></textarea>
</form>
{{</example>}}

### Select
Make your select input fields look nice with the `input` class.

{{<example>}}
<select class="input" aria-label="Name">
  <option>Choose an option</option>
  <option>Mellow</option>
  <option>Sippy</option>
  <option>Optimise</option>
</select>
{{</example>}}

### Checkbox
The `input-form` class creates a grid with space for the input, its label and a helper text.

{{<example class="docs-preview-checkbox">}}
<div class="input-form">
  <input class="input-check" type="checkbox" value="1" id="firstCheckbox">
  <label class="input-label" for="firstCheckbox">
    First checkbox
  </label>
</div>
<div class="input-form">
  <input class="input-check" type="checkbox" value="2" id="secondCheckbox" checked>
  <label class="input-label" for="secondCheckbox">
    Second checkbox
  </label>
  <span class="input-text">Help with the checkbox if it isn't clear enough.</span>
</div>
<div class="input-form">
  <input class="input-check" type="checkbox" value="" id="thirdCheckbox">
  <label class="input-label" for="thirdCheckbox">
    Third checkbox
  </label>
</div>
{{</example>}}

You can only set indeterminate with Javascript, there is no HTML attribute for this. This is how we do it for this documentation:

{{<example lang="js" show_preview="false">}}
(function () {
  'use strict';

  document.querySelectorAll('.docs-preview-checkbox #thirdCheckbox')
    .forEach(function (checkbox) {
      checkbox.indeterminate = true;
    });
})();
{{</example>}}

### Radio
The `input-form` class creates a grid with space for the input, its label and a helper text.

{{<example>}}
<div class="input-form">
  <input class="input-check" type="radio" value="1" id="firstRadio" name="radioInput">
  <label class="input-label" for="firstRadio">
    First radio
  </label>
</div>
<div class="input-form">
  <input class="input-check" type="radio" value="2" id="secondRadio" name="radioInput" checked>
  <label class="input-label" for="secondRadio">
    Second radio
  </label>
  <span class="input-text">Help with the radio if it isn't clear enough.</span>
</div>
{{</example>}}

### File
Make your file input fields look nice with the `input` class.

{{<example>}}
<input class="input" type="file">
{{</example>}}

### Range
Make your file input fields look nice with the `input` class.

{{<example>}}
<label for="rangeInput" class="input-label">Range example</label>
<input type="range" class="input-range" id="rangeInput">
{{</example>}}

## Context
### Labels
Use labels to properly indicate the purpose of an input. You can give a special style to the label with the `input-label` class. Make sure to connect a label to its input with the `for` attribute.

{{<example>}}
<form>
  <label for="emailInput" class="input-label">Email address</label>
  <input type="email" class="input" id="emailInput" placeholder="Email" />
</form>
{{</example>}}

### Helper text
With `input-text` you can add a styled description to your input. use the `aria-describedby` attribute on the `input` to connect your helper text to its relevant input.

{{<example>}}
<form>
  <label for="emailInput1" class="input-label">Email address</label>
  <input type="email" class="input" id="emailInput1" placeholder="Email" aria-describedby="emailHelp" />
  <div id="emailHelp" class="input-text">We'll send you a mail with your details.</div>
</form>
{{</example>}}

## States
### Disabled
If you want to disable a form input, add the `disabled` attribute to it.

{{<example>}}
<input type="password" class="input" placeholder="Password" disabled />
{{</example>}}

{{<example>}}
<div class="input-form">
  <input class="input-check" type="checkbox" value="1" id="disabledCheckbox" disabled>
  <label class="input-label" for="disabledCheckbox">
    Disabled checkbox
  </label>
</div>
<div class="input-form">
  <input class="input-check" type="checkbox" value="1" id="disabledCheckbox" disabled checked>
  <label class="input-label" for="disabledCheckbox">
    Disabled checkbox
  </label>
</div>
{{</example>}}

{{<example>}}
<div class="input-form">
  <input class="input-check" type="radio" value="1" id="disabledRadio" name="disabledRadioInput" disabled>
  <label class="input-label" for="disabledRadio">
    Disabled radio
  </label>
</div>
<div class="input-form">
  <input class="input-check" type="radio" value="2" id="disabledRadioChecked" name="disabledRadioInput" disabled checked>
  <label class="input-label" for="disabledRadioChecked">
    Disabled radio
  </label>
</div>
{{</example>}}

{{<example>}}
<label for="disabledRangeInput" class="input-label">Disabled example</label>
<input type="range" class="input-range" id="disabledRangeInput" disabled>
{{</example>}}

### Readonly
If you want to disable a form input, add the `disabled` attribute to it.

{{<example>}}
<input type="text" class="input" value="Readonly text" aria-label="readonly input" readonly>
{{</example>}}

## Input groups
To give a visual connection to multiple elements, you can add them to an `input-group`.

### Text add-ons
Text add-ons can be added in every position and/or make combinations.

{{<example>}}
<div class="input-group mb-3">
  <span class="input-text" id="prefix-addon">Prefix</span>
  <input type="text" class="input" placeholder="Prefixed" aria-label="Prefixed" aria-describedby="prefix-addon">
</div>

<div class="input-group mb-3">
  <input type="text" class="input" placeholder="Affixed" aria-label="Affixed">
  <span class="input-text">Affix</span>
  <input type="text" class="input" placeholder="Affixed (cont.)" aria-label="Affixed (cont.)">
</div>

<div class="input-group mb-3">
  <input type="text" class="input" placeholder="Suffixed" aria-label="Suffixed" aria-describedby="suffix-addon">
  <span class="input-text" id="suffix-addon">Suffix</span>
</div>

<div class="input-group mb-3">
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

{{<example>}}
<div class="input-group mb-3">
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

### Multiple inputs
{{<example>}}
<div class="input-group">
  <span class="input-text">Multiple fields</span>
  <input type="text" class="input" aria-label="First">
  <input type="text" class="input" aria-label="Second">
</div>
{{</example>}}

### Multiple text add-ons
{{<example>}}
<div class="input-group">
  <span class="input-text">Multiple</span>
  <span class="input-text">Add-ons</span>
  <input type="text" class="input" aria-label="Field">
</div>
{{</example>}}

### Buttons
Buttons can also be put into an `input-group` in any position you can imagen.

{{<example>}}
<div class="input-group mb-3">
  <a href="#" class="btn btn-default">Button</a>
  <input type="text" class="input" aria-label="Field">
</div>
<div class="input-group mb-3">
  <a href="#" class="btn btn-primary">Button</a>
  <a href="#" class="btn btn-primary">Button</a>
  <input type="text" class="input" aria-label="Field">
</div>
<div class="input-group mb-3">
  <input type="text" class="input" aria-label="Field">
  <a href="#" class="btn btn-danger">Button</a>
  <input type="text" class="input" aria-label="Field">
</div>
<div class="input-group mb-3">
  <a href="#" class="btn btn-secondary">Button</a>
  <input type="text" class="input" aria-label="Field">
  <a href="#" class="btn btn-secondary">Button</a>
</div>
<div class="input-group mb-3">
  <input type="text" class="input" aria-label="Field">
  <a href="#" class="btn btn-default">Button</a>
  <a href="#" class="btn btn-default">Button</a>
</div>
<div class="input-group">
  <input type="text" class="input" aria-label="Field">
  <a href="#" class="btn btn-success">Button</a>
</div>
{{</example>}}
