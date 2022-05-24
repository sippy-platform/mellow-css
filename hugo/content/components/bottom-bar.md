---
title: Bottom Bar
description: Provide bottom navigation for your app.
section: components
---

## Example
The bottom navigation is a great component for app-like navigation.

{{<example>}}
<nav class="bottom-bar">
  <a class="bottom-bar-item active">
    <i class="vi vi-house bottom-bar-item-icon"></i>
    <span class="bottom-bar-item-label">Home</span>
  </a>
  <a class="bottom-bar-item">
    <i class="vi vi-users bottom-bar-item-icon"></i>
    <span class="bottom-bar-item-label">Users</span>
  </a>
  <a class="bottom-bar-item" aria-current="page">
    <i class="vi vi-tag bottom-bar-item-icon"></i>
    <span class="bottom-bar-item-label">Tags</span>
  </a>
  <a class="bottom-bar-item" aria-current="page">
    <i class="vi vi-ellipsis bottom-bar-item-icon"></i>
    <span class="bottom-bar-item-label">This is a very long label, does it wrap or...?</span>
  </a>
</nav>
{{</example>}}

## Color
You can change the color of the active item with the color classes.

{{<example>}}
<nav class="bottom-bar red">
  <a class="bottom-bar-item active">
    <i class="vi vi-house bottom-bar-item-icon"></i>
    <span class="bottom-bar-item-label">Home</span>
  </a>
  <a class="bottom-bar-item">
    <i class="vi vi-users bottom-bar-item-icon"></i>
    <span class="bottom-bar-item-label">Users</span>
  </a>
  <a class="bottom-bar-item" aria-current="page">
    <i class="vi vi-tag bottom-bar-item-icon"></i>
    <span class="bottom-bar-item-label">Tags</span>
  </a>
  <a class="bottom-bar-item" aria-current="page">
    <i class="vi vi-ellipsis bottom-bar-item-icon"></i>
    <span class="bottom-bar-item-label">This is a very long label, does it wrap or...?</span>
  </a>
</nav>
{{</example>}}
