---
title: Input
description: Inputs are the basic text and selection controls.
section: forms
---

## Inputs
### Text
Make your input fields look nice with the `input` class.

{{<example class="grid gap-3">}}
<input type="text" class="input" placeholder="Name" />
<input type="email" class="input" placeholder="Email" />
<input type="password" class="input" placeholder="Password" />
<textarea class="input" placeholder="Message"></textarea>
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

## Color
Like many other components, forms respond to color classes.

{{<example>}}
<form class="grid gap-3 pink">
  <input type="text" class="input" placeholder="Name" />
  <textarea class="input" placeholder="Message"></textarea>
  <select class="input" aria-label="Name">
    <option>Choose an option</option>
    <option>Mellow</option>
    <option>Sippy</option>
    <option>Optimise</option>
  </select>
</form>
{{</example>}}
