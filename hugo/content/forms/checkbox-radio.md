---
title: Checkbox & radio
description: Show a checkbox or radio control when selecting between options.
section: forms
---

## Inputs
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

## States
### Disabled
If you want to disable a form input, add the `disabled` attribute to it.

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

## Color
Like many other components, forms respond to color classes.

{{<example>}}
<form class="grid gap-3 pink">
  <div>
    <div class="input-form">
      <input class="input-check" type="checkbox" value="1" id="firstColorCheckbox">
      <label class="input-label" for="firstColorCheckbox">
        First checkbox
      </label>
    </div>
    <div class="input-form">
      <input class="input-check" type="checkbox" value="2" id="secondColorCheckbox" checked>
      <label class="input-label" for="secondColorCheckbox">
        Second checkbox
      </label>
      <span class="input-text">Help with the checkbox if it isn't clear enough.</span>
    </div>
  </div>
  <div>
    <div class="input-form">
      <input class="input-check" type="radio" value="1" id="firstColorRadio" name="radioInput">
      <label class="input-label" for="firstColorRadio">
        First radio
      </label>
    </div>
    <div class="input-form">
      <input class="input-check" type="radio" value="2" id="secondColorRadio" name="radioInput" checked>
      <label class="input-label" for="secondColorRadio">
        Second radio
      </label>
      <span class="input-text">Help with the radio if it isn't clear enough.</span>
    </div>
  </div>
</form>
{{</example>}}
