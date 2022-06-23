---
title: Floating labels
description: Floating labels provide an alternative style for inputs.
section: forms
---

## Inputs
### Text
{{<example class="grid gap-3">}}
<div class="form-floating">
  <input class="input" id="name" placeholder="Name">
  <label for="name">Name</label>
</div>
<div class="form-floating">
  <input type="email" class="input" id="input" placeholder="name@example.com">
  <label for="input">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="input" id="email" placeholder="Password">
  <label for="email">Password</label>
</div>
<div class="form-floating">
  <textarea class="input" placeholder="Message" id="message"></textarea>
  <label for="message">Message</label>
</div>
{{</example>}}


### Select
{{<example>}}
<div class="form-floating">
  <select class="input" aria-label="Name" name="select">
    <option>Choose an option</option>
    <option>Mellow</option>
    <option>Sippy</option>
    <option>Optimise</option>
  </select>
  <label for="select">Pick a name</label>
</div>
{{</example>}}

### File
{{<example>}}
<div class="form-floating">
  <input class="input" type="file" name="file">
  <label for="file">Pick a file</label>
</div>
{{</example>}}

## Input groups
When using input groups, use the `input-group-floating` class to make sure buttons adjust properly.

{{<example class="grid gap-3">}}
<div class="input-group input-group-floating">
  <span class="input-text" id="prefix-addon">Prefix</span>
  <div class="form-floating">
    <input type="text" class="input" name="prefix" placeholder="Prefixed" aria-label="Prefixed" aria-describedby="prefix-addon">
    <label for="prefix">Prefixed</label>
  </div>
</div>
<div class="input-group input-group-floating">
  <a href="#" class="btn btn-default">Button</a>
  <div class="form-floating">
    <input type="text" class="input" name="button" placeholder="Buttoned" aria-label="Buttoned" aria-describedby="button-addon">
    <label for="button">Buttoned</label>
  </div>
</div>
{{</example>}}
