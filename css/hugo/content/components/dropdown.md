---
title: Dropdown
description: Drop down a menu.
section: components
---

## Example
The dropdown in Mellow is based on the `details` element. As a result, it uses no Javascript and provides extensive customization options.

{{<example>}}
<details class="dropdown">
  <summary class="btn btn-default">
    Profile <i class="vi vi-angle-down"></i>
  </summary>
  
  <div class="dropdown-menu">
    <a class="dropdown-item active" href="#">Profile</a>
    <a class="dropdown-item" href="#">Settings</a>
    <a class="dropdown-item" href="#">Sign out</a>
  </div>
</details>
{{</example>}}

Using the `btn` class is entirely optional. You can also just leave the styling of the summary element to the browser:

{{<example>}}
<details class="dropdown">
  <summary>
    Profile
  </summary>
  
  <div class="dropdown-menu">
    <a class="dropdown-item active" href="#">Profile</a>
    <a class="dropdown-item" href="#">Settings</a>
    <a class="dropdown-item" href="#">Sign out</a>
  </div>
</details>
{{</example>}}

If you want, you can style the summary element, or anything within it, however you want.

## Position
You can make the dropdown menu appear above, left, or right of the toggle with the `dropdown-menu-[t|e|s]` classes.

{{<example>}}
<details class="dropdown">
  <summary class="btn btn-color red">
    Right <i class="vi vi-angle-right"></i>
  </summary>
  
  <div class="dropdown-menu dropdown-menu-e">
    <a class="dropdown-item" href="#">Profile</a>
    <a class="dropdown-item" href="#">Settings</a>
    <a class="dropdown-item" href="#">Sign out</a>
  </div>
</details>
<details class="dropdown">
  <summary class="btn btn-color orange">
    Top <i class="vi vi-angle-up"></i>
  </summary>
  
  <div class="dropdown-menu dropdown-menu-t">
    <a class="dropdown-item" href="#">Profile</a>
    <a class="dropdown-item" href="#">Settings</a>
    <a class="dropdown-item" href="#">Sign out</a>
  </div>
</details>
<details class="dropdown">
  <summary class="btn btn-color amber">
    Left <i class="vi vi-angle-left"></i>
  </summary>
  
  <div class="dropdown-menu dropdown-menu-s">
    <a class="dropdown-item" href="#">Profile</a>
    <a class="dropdown-item" href="#">Settings</a>
    <a class="dropdown-item" href="#">Sign out</a>
  </div>
</details>
{{</example>}}
