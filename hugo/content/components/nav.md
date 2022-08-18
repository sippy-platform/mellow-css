---
title: Navigation
description: Provide easy-to-use navigation on your website.
section: components
---

## Basic
A basic navigation bar can contain a brand, and 2 lists of links.
{{<example>}}
<nav class="nav nav-light bg-light">
  <div class="container">
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

### Dark theme
Swap out the `nav-light` and `bg-light` classes for `nav-dark` and `bg-dark` to get a dark navigation bar.

{{<example>}}
<nav class="nav nav-dark bg-dark">
  <div class="container">
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

### System theme
Swap out the `nav-light` and `bg-light` classes for `nav-system` and `bg-system` to get a navigation bar that follows the system theme.

{{<example>}}
<nav class="nav nav-system bg-system">
  <div class="container">
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

## Content

### Branding
Use the `nav-brand` class to add a brand to your navbar.

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

### Buttons
You can put a button in the `nav-item`.

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
        <button type="button" class="btn btn-primary">Login</button>
      </li>
    </ul>
  </div>
</nav>
{{</example>}}

### Forms
Instead of just a button, an entire form can be used as well:

{{<example>}}
<nav class="nav nav-system bg-system">
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
        <form class="d-flex input-group">
          <input class="input" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-default" type="submit">
            <i class="vi vi-magnifying-glass"></i>
          </button>
        </form>
      </li>
    </ul>
  </div>
</nav>
{{</example>}}

## Sizes
Fancy a smaller or larger navigation? Use the `nav-sm` and `nav-lg` classes.

{{<example>}}
<nav class="nav nav-light bg-light nav-sm">
  <div class="container">
    <a class="nav-brand" href="#">Small</a>
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
<nav class="nav nav-light bg-light">
  <div class="container">
    <a class="nav-brand" href="#">Medium</a>
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
<nav class="nav nav-light bg-light nav-lg">
  <div class="container">
    <a class="nav-brand" href="#">Large</a>
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

## Responsive
Or use any of the other `bg-*` utility classes. You can match the `nav-light` or `nav-dark` classes with whatever fits best for the color you opt for.

{{<example>}}
<nav class="nav nav-dark bg-blue">
  <div class="container">
    <a class="nav-brand" href="#">Mellow</a>
    <div class="nav-collapse-md nav-collapse-end" tabindex="-1" id="navCollapse" aria-labelledby="navCollapseLabel">
      <div class="nav-collapse-header">
        <h5 class="nav-collapse-title" id="offcanvasLabel">Mellow</h5>
        <button type="button" class="btn-close" data-mellow-dismiss="offcanvas" data-mellow-target="#navCollapse" aria-label="Close">
          <i class="vi vi-xmark"></i>
        </button>
      </div>
      <div class="nav-collapse-body">
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
    </div>
    <button class="nav-btn-expand d-md-none" type="button" data-mellow-toggle="offcanvas" data-mellow-target="#navCollapse">
      <i class="vi vi-bars"></i>
    </button>
  </div>
</nav>
{{</example>}}
