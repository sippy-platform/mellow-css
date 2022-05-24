---
title: Progressive Web Apps
description: Mellow provides a number of classes to make it easier to integrate your website with PWA features.
section: advanced
---

## Custom Titlebar
In modern browsers, websites with a manifest and `display_override` set to `window-controls-overlay` can customize the content of the titlebar by removing it entirely and having the page content move up the height of the titlebar. The browser will only show its controls (window manipulation and a browser menu most of the time).

Mellow CSS includes classes to help you make sure that your content won't appear underneath these controls.

### Safe space
Your website doesn't know how wide and high the window controls are, you'll have to tell it that yourself. These classes help you out with that:

- `ps-pwa`: add padding to the start of the element as wide as the window controls that are aligned on the left hand side of the window.
  - For example, on Windows this value will always be 0 because window controls always appear on the right. For macOS this will be the width of the "stoplight" controls.
- `w-pwa`: limit the width of the element to the width that is not used by the window controls.
  - This is the width of the window minus all controls the browser shows.
- `pt-pwa`: add padding to the top of the element.
- `h-pwa`: limit the height of the element.
  - This will basically be the height of the default titlebar of the OS you're using.

#### CSS variable
Mellow CSS also provides these values in CSS variable for you to use in more complex situations.

{{<example lang="css" show_preview="false">}}
:root {
  --titlebar-left-safe-space: env(titlebar-area-x, 0);
  --titlebar-top-safe-space: env(titlebar-area-y, 0);
  --titlebar-height: env(titlebar-area-height, 33px);
  --titlebar-width: env(titlebar-area-width, 33px);
}
{{</example>}}

### Drag area
A native titlebar is draggable and allows users to move the window around. By default your browser will provide a small safe space where the user can drag the window. However, your users probably expect all "dead" areas at the top of the window to allow them to drag the window around. The `app` classes help you with this.

- `app-drag`: makes the element and all of its children draggable areas.
- `app-no-drag`: makes the element and all of its children none-draggable areas.

These classes can be nested. You can for example make the titlebar of your app draggable with `app-drag` and display a textfield within the titlebar (e.g.: a searchbar) and add the `app-no-drag` class to make sure users cannot drag the window with the input control.
