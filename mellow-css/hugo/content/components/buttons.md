---
title: Button
description: Make buttons and anchors look great with button styles.
---

Buttons are used to indication clickable surface that perform actions like sending a form, navigating through the app, etc. The button style should be applied to buttons or anchors.

When applying to a button, make sure to set the `type` attribute. When applying to an anchor, make sure to set its `role` always to `button`.

{{<example>}}
<button type="button" class="btn btn-default">Button</button>
<a role="button" class="btn btn-default">Anchor</a>
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
