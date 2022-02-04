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

## Variants

### Contextual buttons
Contextual buttons are ment to be used in situations where the action performed by the button is important.

{{<example>}}
<button type="button" class="btn btn-default">Default</button>
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-success">Success</button>
{{</example>}}

### Colored buttons
Colored buttons are variations of the button component that use one of the colors in the color pallette.

{{<example>}}
<button type="button" class="btn btn-blue">Blue</button>
<button type="button" class="btn btn-purple">Purple</button>
<button type="button" class="btn btn-pink">Pink</button>
<button type="button" class="btn btn-red">Red</button>
<button type="button" class="btn btn-orange">Orange</button>
<button type="button" class="btn btn-yellow">Yellow</button>
<button type="button" class="btn btn-lime">Lime</button>
<button type="button" class="btn btn-green">Green</button>
<button type="button" class="btn btn-grey">Grey</button>
{{</example>}}

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

Note the use of the `aria-disabled` property instead of `disabled`. Unlike `disabled`, `aria-disabled` leaves the button discoverable for assistive technologies and will remain in the tab-flow when navigating with a keyboard (so that any tooltips that may be connected to it can still appear for users without a pointer).

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
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="currentColor" style="width: 20px; height: 16px; margin-top: -.25rem;"><path fill-rule="evenodd" d="M17 6.5a5.5 5.5 0 0 1-8.82 4.38L4.06 15A.75.75 0 1 1 3 13.94l4.12-4.12A5.5 5.5 0 1 1 17 6.5Zm-1.5 0a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"/></svg>
</button>
<button type="button" class="btn btn-primary">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="currentColor" style="width: 20px; height: 16px; margin-top: -.25rem;"><path fill-rule="evenodd" d="m9.25 1.75-.03 7.97-3.19-3.19a.75.75 0 0 0-1.06 1.06l4.3 4.3a1 1 0 0 0 1.4 0l4.3-4.3a.75.75 0 1 0-1.06-1.06l-3.19 3.19.03-7.97a.75.75 0 0 0-1.5 0ZM4.75 13.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H4.75Z"/></svg>
  Download
</button>
<button type="button" class="btn btn-secondary">
  Get started
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="currentColor" style="width: 20px; height: 16px; margin-top: -.25rem;"><path fill-rule="evenodd" d="M14.16 8.78H3.72a.75.75 0 0 1 0-1.5h10.44l-3.69-3.69a.75.75 0 1 1 1.06-1.06l4.8 4.8a1 1 0 0 1 0 1.4l-4.8 4.8c-.3.3-.77.3-1.06 0a.75.75 0 0 1 0-1.06l3.69-3.69Z"/></svg>
</button>
<button type="button" class="btn btn-danger">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="currentColor" style="width: 20px; height: 16px; margin-top: -.25rem;"><path d="M7.5 12.5v-6c0-.28.22-.5.5-.5h.5c.28 0 .5.22.5.5v6a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5Zm3.5-6v6c0 .28.22.5.5.5h.5a.5.5 0 0 0 .5-.5v-6A.5.5 0 0 0 12 6h-.5a.5.5 0 0 0-.5.5Z"/><path fill-rule="evenodd" d="M7 3V2c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1h3.25a.75.75 0 0 1 0 1.5H16V14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4.5h-.25a.75.75 0 0 1 0-1.5H7Zm1.5 0h3V2a.5.5 0 0 0-.5-.5H9a.5.5 0 0 0-.5.5v1Zm-3 11c0 .28.22.5.5.5h8a.5.5 0 0 0 .5-.5V4.5h-9V14Z"/></svg>
  Delete
</button>
<button type="button" class="btn btn-success">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="currentColor" style="width: 20px; height: 16px; margin-top: -.25rem;"><path fill-rule="evenodd" d="M3 3v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V5.83a2 2 0 0 0-.59-1.42L13.6 1.6a2 2 0 0 0-1.43-.6H5a2 2 0 0 0-2 2Zm1.5 0c0-.28.22-.5.5-.5h1V5a1 1 0 0 0 1 1h4.5a1 1 0 0 0 1-1V2.62l.03.03 2.82 2.82c.1.1.15.23.15.36V13a.5.5 0 0 1-.5.5h-1V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v3.5H5a.5.5 0 0 1-.5-.5V3Zm8 10.5h-5V11c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v2.5Zm-5-11H11V4a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V2.5Z"/></svg>
  Save
</button>
{{</example>}}
