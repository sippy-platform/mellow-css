---
title: Form
description: Forms are an extensive part of Mellow with various controls, layouts, and connected components.
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

### Readonly
If you want to disable a form input, add the `disabled` attribute to it.

{{<example>}}
<input type="text" class="input" value="Readonly text" aria-label="readonly input" readonly>
{{</example>}}
