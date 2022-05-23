---
title: Breadcrumb
description: Show the path of the current page to the user.
section: components
---

## Example
Breadcrumbs are a simple component to show a visual hiarchy within your site.

{{<example>}}
<nav aria-label="breadcrumb" class="breadcrumb breadcrumbs-divider">
  <span class="breadcrumb-item"><a href="#">Home</a></span>
  <span class="breadcrumb-item"><a href="#">Categories</a></span>
  <span class="breadcrumb-item active" aria-current="page"><span>Tags</span></span>
</nav>
{{</example>}}

## Custom divider
If you'd rather include your own divider, you can disable the divider by leaving out the `breadcrumbs-divider` class.

{{<example>}}
<nav aria-label="breadcrumb" class="breadcrumb">
  <span class="breadcrumb-item"><a href="#">Home</a></span>
  <span class="breadcrumb-item text-muted"><i class="vi vi-angle-right"></i></span>
  <span class="breadcrumb-item"><a href="#">Categories</a></span>
  <span class="breadcrumb-item text-muted"><i class="vi vi-angle-right"></i></span>
  <span class="breadcrumb-item active" aria-current="page"><span>Tags</span></span>
</nav>
{{</example>}}

## Colors
Like other components, the breadcrumb will follow your accent color or a custom color you can specify.

{{<example>}}
<nav aria-label="breadcrumb" class="breadcrumb breadcrumbs-divider red">
  <span class="breadcrumb-item"><a href="#">Home</a></span>
  <span class="breadcrumb-item"><a href="#">Categories</a></span>
  <span class="breadcrumb-item active" aria-current="page"><span>Tags</span></span>
</nav>
<nav aria-label="breadcrumb" class="breadcrumb breadcrumbs-divider orange">
  <span class="breadcrumb-item"><a href="#">Home</a></span>
  <span class="breadcrumb-item"><a href="#">Categories</a></span>
  <span class="breadcrumb-item active" aria-current="page"><span>Tags</span></span>
</nav>
<nav aria-label="breadcrumb" class="breadcrumb breadcrumbs-divider amber">
  <span class="breadcrumb-item"><a href="#">Home</a></span>
  <span class="breadcrumb-item"><a href="#">Categories</a></span>
  <span class="breadcrumb-item active" aria-current="page"><span>Tags</span></span>
</nav>
<nav aria-label="breadcrumb" class="breadcrumb breadcrumbs-divider yellow">
  <span class="breadcrumb-item"><a href="#">Home</a></span>
  <span class="breadcrumb-item"><a href="#">Categories</a></span>
  <span class="breadcrumb-item active" aria-current="page"><span>Tags</span></span>
</nav>
<nav aria-label="breadcrumb" class="breadcrumb breadcrumbs-divider lime">
  <span class="breadcrumb-item"><a href="#">Home</a></span>
  <span class="breadcrumb-item"><a href="#">Categories</a></span>
  <span class="breadcrumb-item active" aria-current="page"><span>Tags</span></span>
</nav>
<nav aria-label="breadcrumb" class="breadcrumb breadcrumbs-divider green">
  <span class="breadcrumb-item"><a href="#">Home</a></span>
  <span class="breadcrumb-item"><a href="#">Categories</a></span>
  <span class="breadcrumb-item active" aria-current="page"><span>Tags</span></span>
</nav>
<nav aria-label="breadcrumb" class="breadcrumb breadcrumbs-divider teal">
  <span class="breadcrumb-item"><a href="#">Home</a></span>
  <span class="breadcrumb-item"><a href="#">Categories</a></span>
  <span class="breadcrumb-item active" aria-current="page"><span>Tags</span></span>
</nav>
<nav aria-label="breadcrumb" class="breadcrumb breadcrumbs-divider cyan">
  <span class="breadcrumb-item"><a href="#">Home</a></span>
  <span class="breadcrumb-item"><a href="#">Categories</a></span>
  <span class="breadcrumb-item active" aria-current="page"><span>Tags</span></span>
</nav>
<nav aria-label="breadcrumb" class="breadcrumb breadcrumbs-divider blue">
  <span class="breadcrumb-item"><a href="#">Home</a></span>
  <span class="breadcrumb-item"><a href="#">Categories</a></span>
  <span class="breadcrumb-item active" aria-current="page"><span>Tags</span></span>
</nav>
<nav aria-label="breadcrumb" class="breadcrumb breadcrumbs-divider indigo">
  <span class="breadcrumb-item"><a href="#">Home</a></span>
  <span class="breadcrumb-item"><a href="#">Categories</a></span>
  <span class="breadcrumb-item active" aria-current="page"><span>Tags</span></span>
</nav>
<nav aria-label="breadcrumb" class="breadcrumb breadcrumbs-divider violet">
  <span class="breadcrumb-item"><a href="#">Home</a></span>
  <span class="breadcrumb-item"><a href="#">Categories</a></span>
  <span class="breadcrumb-item active" aria-current="page"><span>Tags</span></span>
</nav>
<nav aria-label="breadcrumb" class="breadcrumb breadcrumbs-divider purple">
  <span class="breadcrumb-item"><a href="#">Home</a></span>
  <span class="breadcrumb-item"><a href="#">Categories</a></span>
  <span class="breadcrumb-item active" aria-current="page"><span>Tags</span></span>
</nav>
<nav aria-label="breadcrumb" class="breadcrumb breadcrumbs-divider pink">
  <span class="breadcrumb-item"><a href="#">Home</a></span>
  <span class="breadcrumb-item"><a href="#">Categories</a></span>
  <span class="breadcrumb-item active" aria-current="page"><span>Tags</span></span>
</nav>
<nav aria-label="breadcrumb" class="breadcrumb breadcrumbs-divider rose">
  <span class="breadcrumb-item"><a href="#">Home</a></span>
  <span class="breadcrumb-item"><a href="#">Categories</a></span>
  <span class="breadcrumb-item active" aria-current="page"><span>Tags</span></span>
</nav>
<nav aria-label="breadcrumb" class="breadcrumb breadcrumbs-divider brown">
  <span class="breadcrumb-item"><a href="#">Home</a></span>
  <span class="breadcrumb-item"><a href="#">Categories</a></span>
  <span class="breadcrumb-item active" aria-current="page"><span>Tags</span></span>
</nav>
<nav aria-label="breadcrumb" class="breadcrumb breadcrumbs-divider grey">
  <span class="breadcrumb-item"><a href="#">Home</a></span>
  <span class="breadcrumb-item"><a href="#">Categories</a></span>
  <span class="breadcrumb-item active" aria-current="page"><span>Tags</span></span>
</nav>
{{</example>}}
