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
  <summary class="btn btn-default">
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
  <summary class="btn btn-default">
    Bottom <i class="vi vi-angle-down"></i>
  </summary>

  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Profile</a>
    <a class="dropdown-item" href="#">Settings</a>
    <a class="dropdown-item" href="#">Sign out</a>
  </div>
</details>
<details class="dropdown">
  <summary class="btn btn-default">
    Right <i class="vi vi-angle-right"></i>
  </summary>

  <div class="dropdown-menu dropdown-menu-e">
    <a class="dropdown-item" href="#">Profile</a>
    <a class="dropdown-item" href="#">Settings</a>
    <a class="dropdown-item" href="#">Sign out</a>
  </div>
</details>
<details class="dropdown">
  <summary class="btn btn-default">
    Top <i class="vi vi-angle-up"></i>
  </summary>

  <div class="dropdown-menu dropdown-menu-t">
    <a class="dropdown-item" href="#">Profile</a>
    <a class="dropdown-item" href="#">Settings</a>
    <a class="dropdown-item" href="#">Sign out</a>
  </div>
</details>
<details class="dropdown">
  <summary class="btn btn-default">
    Left <i class="vi vi-angle-left"></i>
  </summary>

  <div class="dropdown-menu dropdown-menu-s">
    <a class="dropdown-item" href="#">Profile</a>
    <a class="dropdown-item" href="#">Settings</a>
    <a class="dropdown-item" href="#">Sign out</a>
  </div>
</details>
{{</example>}}

## Alignment
You can align the dropdown menu to the left or right of the toggle with the `dropdown-menu-align-e` class.

{{<example>}}
<details class="dropdown">
  <summary class="btn btn-default">
    Bottom default <i class="vi vi-angle-down"></i>
  </summary>

  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Profile</a>
    <a class="dropdown-item" href="#">Settings</a>
    <a class="dropdown-item" href="#">Sign out</a>
  </div>
</details>
<details class="dropdown">
  <summary class="btn btn-default">
    Bottom end <i class="vi vi-angle-down"></i>
  </summary>

  <div class="dropdown-menu dropdown-menu-align-e">
    <a class="dropdown-item" href="#">Profile</a>
    <a class="dropdown-item" href="#">Settings</a>
    <a class="dropdown-item" href="#">Sign out</a>
  </div>
</details>
<details class="dropdown">
  <summary class="btn btn-default">
    Top default <i class="vi vi-angle-up"></i>
  </summary>

  <div class="dropdown-menu dropdown-menu-t">
    <a class="dropdown-item" href="#">Profile</a>
    <a class="dropdown-item" href="#">Settings</a>
    <a class="dropdown-item" href="#">Sign out</a>
  </div>
</details>
<details class="dropdown">
  <summary class="btn btn-default">
    Top end <i class="vi vi-angle-up"></i>
  </summary>

  <div class="dropdown-menu dropdown-menu-t dropdown-menu-align-e">
    <a class="dropdown-item" href="#">Profile</a>
    <a class="dropdown-item" href="#">Settings</a>
    <a class="dropdown-item" href="#">Sign out</a>
  </div>
</details>
{{</example>}}

## Groups
As a result of how the dropdown can be customized, adding it to a `btn-group` is as simple as simply putting it inside of one:

{{<example>}}
<div class="btn-group">
  <button type="button" class="btn btn-default">Default</button>
  <details class="dropdown">
    <summary class="btn btn-default">
      <i class="vi vi-angle-down"></i>
    </summary>

    <div class="dropdown-menu">
      <a class="dropdown-item active" href="#">Profile</a>
      <a class="dropdown-item" href="#">Settings</a>
      <a class="dropdown-item" href="#">Sign out</a>
    </div>
  </details>
</div>
{{</example>}}

## Submenus
Due to how the dropdown menu is implemented in Mellow, as a side effect, it is easy to create a submenu.

{{<example>}}
<details class="dropdown">
  <summary class="btn btn-default">
    Main menu <i class="vi vi-angle-down"></i>
  </summary>

  <div class="dropdown-menu">
    <a class="dropdown-item" href="#"><i class="vi vi-circle-user"></i> Profile</a>
    <details class="dropdown dropdown-item">
      <summary class="d-flex justify-content-between align-items-center">
        <span><i class="vi vi-gear"></i> Settings</span> <i class="vi vi-angle-right"></i>
      </summary>

      <div class="dropdown-menu dropdown-menu-e mt-n1">
        <a class="dropdown-item" href="#"><i class="vi vi-swatchbook"></i> Theme</a>
        <a class="dropdown-item" href="#"><i class="vi vi-shield-keyhole"></i> Privacy</a>
        <a class="dropdown-item" href="#"><i class="vi vi-arrow-right-to-bracket"></i> Account sessions</a>
      </div>
    </details>
    <a class="dropdown-item" href="#"><i class="vi vi-arrow-right-from-bracket"></i> Sign out</a>
  </div>
</details>
{{</example>}}

## Menu items
### Headers
Add headers with the `dropdown-header` class to label sections in the menu.

{{<example class="docs-preview-dropdown-menu">}}
<div class="dropdown-menu">
  <div class="dropdown-header">Dropdown header</div>
  <a class="dropdown-item" href="#">Profile</a>
  <a class="dropdown-item" href="#">Settings</a>
  <a class="dropdown-item" href="#">Sign out</a>
</div>
{{</example>}}

### Divider
Split groups in the dropdown menu with the `dropdown-divider` class.

{{<example class="docs-preview-dropdown-menu">}}
<div class="dropdown-menu">
  <a class="dropdown-item" href="#">Profile</a>
  <a class="dropdown-item" href="#">Settings</a>
  <div class="dropdown-divider"></div>
  <a class="dropdown-item" href="#">Sign out</a>
</div>
{{</example>}}

## Colors
Like many other Mellow components, the dropdown menu responds to the color classes but defaults to your accent color.

{{<example>}}
<details class="dropdown">
  <summary class="btn btn-default">
    Profile <i class="vi vi-angle-down"></i>
  </summary>

  <div class="dropdown-menu violet">
    <a class="dropdown-item active" href="#">Profile</a>
    <a class="dropdown-item" href="#">Settings</a>
    <a class="dropdown-item" href="#">Sign out</a>
  </div>
</details>
{{</example>}}

You can also color one item with another color. This example again shows the indigo menu, but now overwrites the "Sign out" option with rose.

{{<example>}}
<details class="dropdown">
  <summary class="btn btn-default">
    Profile <i class="vi vi-angle-down"></i>
  </summary>

  <div class="dropdown-menu indigo">
    <a class="dropdown-item active" href="#">Profile</a>
    <a class="dropdown-item" href="#">Settings</a>
    <a class="dropdown-item rose" href="#">Sign out</a>
  </div>
</details>
{{</example>}}

Note that any parent color class will affect the menu. If you use the `btn-color` class with a color class, the menu will follow the buttons color unless you overwrite it again.

To revert to the default look, add the `accent` color class to the `dropdown-menu` or pick any color you want.

{{<example>}}
<details class="dropdown">
  <summary class="btn btn-color red">
    Profile <i class="vi vi-angle-down"></i>
  </summary>

  <div class="dropdown-menu">
    <a class="dropdown-item active" href="#">Profile</a>
    <a class="dropdown-item" href="#">Settings</a>
  </div>
</details>
<details class="dropdown">
  <summary class="btn btn-color red">
    Accented <i class="vi vi-angle-down"></i>
  </summary>

  <div class="dropdown-menu accent">
    <a class="dropdown-item active" href="#">Profile</a>
    <a class="dropdown-item" href="#">Settings</a>
  </div>
</details>
{{</example>}}
