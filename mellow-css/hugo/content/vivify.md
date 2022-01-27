---
---

# Vivify

`vivify` is Mellow's CSS reset. It takes care of a number of important inconsistencies with the goal to provide a usable default environment for unstyled HTML.

Beyond the margin and padding reset you expect from any CSS reset, Vivify does the following too:

* **System font stack**: as established by many CSS frameworks, we use our own variation on the System Font Stack. What's uncommon about our implementation is the use of Segoe UI Variable for Windows 11 users.
* **Set box-sizing  to border-box**: a common rule used in many frameworks to make sure that altering the padding and border of an element don't increase the size of that element.
* **Enable smooth scrolling**: a relatively modern CSS feature that changes the inter-page navigation from snapping instantly from one place to another to a smooth scroll to the target for improved usability and context.
* **Accessible animations**: if the site is being viewed on a device that tells the browser that it prefers recuded motion or has a slow refresh rate, Vivify will reduce all animations to near-instant `0.001ms` ducrations, drop the iteration count to 1, and disable smooth scrolling.
* **Block textarea from resizing horizontally**: because that just breaks layouts.
* **Various Safari and Webkit resets**: Vivify also includes various resets for Safari and Webkit-based browsers, including but not limited to making sure that `type="search"`-inputs appear like normal input fields.
