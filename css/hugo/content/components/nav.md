---
title: Navigation
description: Provide easy-to-use navigation on your website.
---

## Basic
A basic navigation bar can contain a brand, and 2 lists of links.
{{<example>}}
<nav class="nav nav-light bg-light">
  <div class="container">
    <a class="nav-brand" href="#">Mellow</a>
    <ul class="nav-bar me-auto">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Watch</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Products</a>
      </li>
    </ul>
    <ul class="nav-bar">
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
    </ul>
  </div>
</nav>
{{</example>}}

### Dark
Swap out the `nav-light` and `bg-light` classes for `nav-dark` and `bg-dark` to get a dark navigation bar.

{{<example>}}
<nav class="nav nav-dark bg-dark">
  <div class="container">
    <a class="nav-brand" href="#">Mellow</a>
    <ul class="nav-bar me-auto">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Watch</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Products</a>
      </li>
    </ul>
    <ul class="nav-bar">
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
    </ul>
  </div>
</nav>
{{</example>}}

### Colored
Or use any of the other `bg-*` utility classes. You can match the `nav-light` or `nav-dark` classes with whatever fits best for the color you opt for.

{{<example>}}
<nav class="nav nav-dark bg-blue">
  <div class="container">
    <a class="nav-brand" href="#">Mellow</a>
    <ul class="nav-bar me-auto">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Watch</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Products</a>
      </li>
    </ul>
    <ul class="nav-bar">
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
    </ul>
  </div>
</nav>
{{</example>}}
