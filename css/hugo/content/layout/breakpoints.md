---
title: Breakpoints
description: All you need to know about the breakpoints in Mellow.
section: layout
---

## Breakpoints
Breakpoints determine at which points Mellow changes the behavior of any breakpoint-related class.

| Breakpoint | Suffix | Pixels |
| ---------- | ------ | ------ |
| Extra Small | - | < 600px |
| Small | `sm` | >= 600px |
| Medium | `md` | >= 800px |
| Large | `lg` | >= 1000px |
| Extra Large | `xl` | >= 1200px |
| Ultra Large | `ul` | >= 1400px |

## Usage in documentation
To indicate that a class has support for these responsive breakpoints, we'll often refer to them as `[breakpoint]` as a placeholder for the suffix. Note that the extra small breakpoint does not have a suffic. As a result, when we say that you can use `flex-[breakpoint]-shrink-[0|1]` this would result in the following classes:

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
