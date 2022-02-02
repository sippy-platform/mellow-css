---
title: Text
description: Change the way your text is displayed on your pages.
---

## Alignment
Center your text to any side. As per usual, these have responsive variants in the format of `.text-<breakpoint>-*`.

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


## Wrap
You can tell text to wrap with the `.text-wrap` class. Or tell it not to do that with the `.text-nowrap` class.

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
Longs strings can break your layout. The `.text-break` class prevents that.

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
