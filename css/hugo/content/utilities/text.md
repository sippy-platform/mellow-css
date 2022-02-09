---
title: Text
description: Change the way your text is displayed on your pages.
---

## Alignment
Center your text to any side. As per usual, these have responsive variants in the format of `text-[breakpoint]-*`.

{{<example>}}
<p class="text-start">To the left.</p>
<p class="text-center">To the center.</p>
<p class="text-end">To the right.</p>
{{</example>}}

## Transforms
Change the capitalization of your text with the transform utilities.

{{<example>}}
<p class="text-lowercase">ALL IS Lowercased.</p>
<p class="text-uppercase">all IS Uppercased.</p>
<p class="text-capitalize">all IS CapiTaliZed.</p>
{{</example>}}

## Font weight
Change the font weight with the font weight utilities.

The `fw-bolder` and `fw-lighter` classes are relative to their parent and as a result can be stacked. While Mellow only provides utility classes to get bold, normal, and light fonts directly, you can stack these utilities to create strong and thin fonts as well.

{{<example>}}
<p class="fw-bold">Bold text.</p>
<p class="fw-bold"><span class="fw-bolder">Strong</span> text.</p>
<p class="fw-light"><span class="fw-bolder">Bolder weight</span> than its parent.</p>
<p class="fw-light"><span class="fw-bolder"><span class="fw-bolder">Even bolder</span> weight</span> than its parent.</p>
<p class="fw-normal">Normal weight text.</p>
<p class="fw-light">Light weight text.</p>
<p class="fw-light"><span class="fw-lighter">Thin</span> text.</p>
<p class="fw-bold"><span class="fw-lighter">Lighter weight</span> than its parent.</p>
<p class="fw-bold"><span class="fw-lighter"><span class="fw-lighter">Even lighter</span> weight</span> than its parent.</p>
{{</example>}}

## Italics
{{<example>}}
<p class="fs-italic">Italic text.</p>
<p><i><span class="fs-normal">This text should be italics, but isn't</span></i></p>
{{</example>}}

## Line height
Change the line height with the line height utilities.

{{<example>}}
<p class="lh-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
<p class="lh-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
<p class="lh-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
<p class="lh-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
{{</example>}}

## Wrap
You can tell text to wrap with the `text-wrap` class. Or tell it not to do that with the `text-nowrap` class.

{{<example>}}
<div class="d-inline-block bg-orange text-white p-3" style="width: 120px;">
  This text is just default behavior
</div>
<div class="d-inline-block bg-blue text-white text-wrap p-3" style="width: 120px;">
  This text will wrap on multiple lines
</div>
<div class="d-inline-block bg-yellow text-nowrap p-3" style="width: 120px;">
  This text will not wrap on multiple lines
</div>
{{</example>}}

## Word break
Longs strings can break your layout. The `text-break` class prevents that.

{{<example>}}
<p class="text-break">mellowmellowmellowmellowmellowmellowmellowmellowmellowmellowmellowmellowmellowmellowmellowmellowmellowmellowmellowmellowmellowmellowmellowmellowmellowmellowmellowmellow</p>
{{</example>}}

## Decoration
Decorate your text with the decoration utility classes.

{{<example>}}
<p class="text-underline">This line appears with a line. Make sure its style remains distinct from achnors.</p>
<p class="text-line-through">This line has been strukken out. Don't confuse it with the `del` and `s` tags in HTML.</p>
<a href="#" class="text-none">This link is not underlined. Make sure its style is distinct from your normal copy.</a>
{{</example>}}
