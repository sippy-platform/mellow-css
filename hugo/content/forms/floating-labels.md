---
title: Input
description: Inputs are the basic text and selection controls.
section: forms
---

## Inputs
### Text
Make your input fields look nice with the `input` class.

{{<example>}}
<form class="grid gap-3">
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
</form>
{{</example>}}
