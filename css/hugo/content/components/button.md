---
title: Button
description: Make buttons and anchors look great with button styles.
---

Buttons are used to indication clickable surface that perform actions like sending a form, navigating through the app, etc. The button style should be applied to buttons or anchors.

When applying to a button, make sure to set the `type` attribute. When applying to an anchor, make sure to set its `role` always to `button`.

{{<example>}}
<button type="button" class="btn btn-default">Button</button>
<a role="button" href="#" class="btn btn-default">Anchor</a>
{{</example>}}

## Styles
Mellow provides 3 variants for button coloring.

### Default button
The default button has no variants. It's a plain, grey button. Simple.

{{<example>}}
<button type="button" class="btn btn-default">Default</button>
{{</example>}}

### Colored buttons
Colored buttons take on the color of the class you assign to it. These are in general great for primary actions.

{{<example>}}
<button type="button" class="btn btn-color red">Red</button>
<button type="button" class="btn btn-color orange">Orange</button>
<button type="button" class="btn btn-color amber">Amber</button>
<button type="button" class="btn btn-color yellow">Yellow</button>
<button type="button" class="btn btn-color lime">Lime</button>
<button type="button" class="btn btn-color green">Green</button>
<button type="button" class="btn btn-color teal">Teal</button>
<button type="button" class="btn btn-color cyan">Cyan</button>
<button type="button" class="btn btn-color blue">Blue</button>
<button type="button" class="btn btn-color indigo">Indigo</button>
<button type="button" class="btn btn-color violet">Violet</button>
<button type="button" class="btn btn-color purple">Purple</button>
<button type="button" class="btn btn-color pink">Pink</button>
<button type="button" class="btn btn-color rose">Rose</button>
<button type="button" class="btn btn-color brown">Brown</button>
<button type="button" class="btn btn-color grey">Grey</button>
{{</example>}}

### Colored on hover
colored on hover buttons are button with colored text on a grey background that turn fully colored on hover. These are great for secondary actions or destructive actions.

{{<example>}}
<button type="button" class="btn btn-hover red">Red</button>
<button type="button" class="btn btn-hover orange">Orange</button>
<button type="button" class="btn btn-hover amber">Amber</button>
<button type="button" class="btn btn-hover yellow">Yellow</button>
<button type="button" class="btn btn-hover lime">Lime</button>
<button type="button" class="btn btn-hover green">Green</button>
<button type="button" class="btn btn-hover teal">Teal</button>
<button type="button" class="btn btn-hover cyan">Cyan</button>
<button type="button" class="btn btn-hover blue">Blue</button>
<button type="button" class="btn btn-hover indigo">Indigo</button>
<button type="button" class="btn btn-hover violet">Violet</button>
<button type="button" class="btn btn-hover purple">Purple</button>
<button type="button" class="btn btn-hover pink">Pink</button>
<button type="button" class="btn btn-hover rose">Rose</button>
<button type="button" class="btn btn-hover brown">Brown</button>
<button type="button" class="btn btn-hover grey">Grey</button>
{{</example>}}

## Semantic buttons
Having so many variants to customize your interface is great, but often you probably would prefer to refer to these buttons in a more semantically correct way. This is why Mellow has mapped a number of these buttons to semantic classes.

{{<example>}}
<button type="button" class="btn btn-default">Default</button>
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-success">Success</button>
{{</example>}}

{{<note>}}
The `.btn-primary` and `.btn-secondary` classes aren't remapped versions of the `.blue` variants, instead they use a special accent variant.
{{</note>}}

## Active
You can use the `active` class to make the button appear as if it is `:active`.

{{<example>}}
<button type="button" class="btn btn-default active">Default</button>
<button type="button" class="btn btn-primary active">Primary</button>
<button type="button" class="btn btn-secondary active">Secondary</button>
<button type="button" class="btn btn-danger active">Danger</button>
<button type="button" class="btn btn-success active">Success</button>
{{</example>}}

## Disabled
Buttons can be disabled with the `aria-disabled` property. This will reduce the opacity of the buttons and disable `pointer-events`.

{{<example>}}
<button type="button" class="btn btn-default" aria-disabled="true">Default</button>
<button type="button" class="btn btn-primary" aria-disabled="true">Primary</button>
<button type="button" class="btn btn-secondary" aria-disabled="true">Secondary</button>
<button type="button" class="btn btn-danger" aria-disabled="true">Danger</button>
<button type="button" class="btn btn-success" aria-disabled="true">Success</button>
{{</example>}}

{{<note>}}
Note the use of the `aria-disabled` property instead of `disabled`. Unlike `disabled`, `aria-disabled` leaves the button discoverable for assistive technologies and will remain in the tab-flow when navigating with a keyboard (so that any tooltips that may be connected to it can still appear for users without a pointer).
{{</note>}}

When disabling an anchor, note that you should not inlcude the `href` property:

{{<example>}}
<a class="btn btn-default" role="button" aria-disabled="true">Default</a>
<a class="btn btn-primary" role="button" aria-disabled="true">Primary</a>
<a class="btn btn-secondary" role="button" aria-disabled="true">Secondary</a>
<a class="btn btn-danger" role="button" aria-disabled="true">Danger</a>
<a class="btn btn-success" role="button" aria-disabled="true">Success</a>
{{</example>}}

### `disabled` class
Additionally, you can also disable buttons by adding the `disabled` class to it. Note that while the button won't respond to clicks, it is still in the tab flow and will respond to interactions. This button acts disabled, but isn't. We strongly recommend against using this class.

{{<example>}}
<button type="button" class="btn btn-default disabled">Disabled button</button>
{{</example>}}

## Sizes
Aside from the normal button size, Mellow also provides the `btn-sm` and `btn-lg` classes for all your button needs.

{{<example>}}
<button type="button" class="btn btn-default btn-sm">Small</button>
<button type="button" class="btn btn-default">Default</button>
<button type="button" class="btn btn-default btn-lg">Large</button>
{{</example>}}

If you want to make a button take on the full width of its container, you can do so with the `btn-block` class.

{{<example>}}
<button type="button" class="btn btn-default btn-block btn-sm mb-3">Small</button>
<button type="button" class="btn btn-default btn-block mb-3">Default</button>
<button type="button" class="btn btn-default btn-block btn-lg">Large</button>
{{</example>}}

### Icons
Every button type supports icons.

{{<example>}}
<button type="button" class="btn btn-default">
  <i class="vi vi-magnifying-glass"></i>
</button>
<button type="button" class="btn btn-primary">
  <i class="vi vi-arrow-down-to-line"></i>
  Download
</button>
<button type="button" class="btn btn-secondary">
  Get started
  <i class="vi vi-arrow-right"></i>
</button>
<button type="button" class="btn btn-danger">
  <i class="vi vi-trash-can"></i>
  Delete
</button>
<button type="button" class="btn btn-success">
  <i class="vi vi-floppy-disk"></i>
  Save
</button>
{{</example>}}
