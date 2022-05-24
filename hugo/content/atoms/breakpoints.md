---
title: Breakpoints
description: All you need to know about the breakpoints in Mellow.
section: atoms
---

## Breakpoints
Breakpoints determine at which points Mellow changes the behavior of any breakpoint-related class.

<table class="table">
  <thead>
    <tr>
      <th>Breakpoint</th>
      <th>Class</th>
      <th>Pixels</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Extra Small</td>
      <td>-</td>
      <td>&lt; 600px</td>
    </tr>
    <tr>
      <td>Small</td>
      <td><code>sm</code></td>
      <td>&ge; 600px</td>
    </tr>
    <tr>
      <td>Medium</td>
      <td><code>md</code></td>
      <td>&ge; 800px</td>
    </tr>
    <tr>
      <td>Large</td>
      <td><code>lg</code></td>
      <td>&ge; 1000px</td>
    </tr>
    <tr>
      <td>Extra Large</td>
      <td><code>xl</code></td>
      <td>&ge; 1200px</td>
    </tr>
    <tr>
      <td>Ultra Large</td>
      <td><code>xxl</code></td>
      <td>&ge; 1400px</td>
    </tr>
  </tbody>
</table>

## Usage in documentation
To indicate that a class has support for these responsive breakpoints, we'll often refer to them as `[breakpoint]` as a placeholder for the infix. Note that the extra small breakpoint does not have a infix. As a result, when we say that you can use `flex-[breakpoint]-shrink-[0|1]` this would result in the following classes:

* `flex-shrink-0`
* `flex-shrink-1`
* `flex-sm-shrink-0`
* `flex-sm-shrink-1`
* `flex-md-shrink-0`
* `flex-md-shrink-1`
* `flex-lg-shrink-0`
* `flex-lg-shrink-1`
* `flex-xl-shrink-0`
* `flex-xl-shrink-1`
* `flex-ul-shrink-0`
* `flex-ul-shrink-1`
