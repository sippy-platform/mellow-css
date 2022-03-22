---
title: Navigation
description: Provide easy-to-use navigation on your website.
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

### Dark
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
        <form class="d-flex input-group">
          <input class="input" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-default" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="currentColor" style="height: 1em; margin-top: -.25rem;"><path fill-rule="evenodd" d="M17 6.5a5.5 5.5 0 0 1-8.82 4.38L4.06 15A.75.75 0 1 1 3 13.94l4.12-4.12A5.5 5.5 0 1 1 17 6.5Zm-1.5 0a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"/></svg>
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" style="height: 1em;" fill="currentColor"><path d="M3.75 2a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H3.75ZM3 8c0-.41.34-.75.75-.75h12.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 8Zm0 5.25c0-.41.34-.75.75-.75h12.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"/></svg>
    </button>
  </div>
</nav>
{{</example>}}
