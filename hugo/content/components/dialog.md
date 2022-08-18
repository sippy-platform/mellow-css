---
title: Dialogs
description: Show dialogs to users.
section: components
---

## Example
Mellow's dialog uses the `dialog` element, this native HTML element is supported in all modern browsers.

{{<example>}}
<dialog class="dialog" id="exampleDialog">
  <form method="dialog" class="dialog-header">
    <h3 class="dialog-title h5">This is a dialog</h3>
    <button value="cancel" class="btn-close"><i class="vi vi-xmark"></i></button>
  </form>
  <div class="dialog-body">
    <p>Hello world!</p>
    <p>This dialog can be closed with the <kb>esc</kb> button.</p>
  </div>
  <form method="dialog" class="dialog-footer">
    <button value="cancel" class="btn btn-danger"><i class="vi vi-xmark"></i> Close</button>
  </form>
</dialog>
<button class="btn btn-default" type="button" onclick="window.exampleDialog.showModal();">Open dialog</button>
{{</example>}}

### `show()` and `showModal()`
There are 2 methods to open a model: `show()` and `showModal()`. We'll refer to the `showModal()` method in this documentation, but you can use `show()` too.

The `showModal()` method does everything the `show()` method does, but also respects the `autofocus` property, and makes sure the dialog is displayed on top of the stack.

{{<example>}}
<dialog class="dialog" id="showDialog">
  <form method="dialog" class="dialog-header">
    <h3 class="dialog-title h5">This is a dialog</h3>
    <button value="cancel" class="btn-close"><i class="vi vi-xmark"></i></button>
  </form>
  <div class="dialog-body">
    <p>Hello world!</p>
    <p>This dialog can be closed with the <kb>esc</kb> button.</p>
  </div>
</dialog>
<button class="btn btn-default" type="button" onclick="window.showDialog.show();">Use show()</button>
<button class="btn btn-default" type="button" onclick="window.showDialog.showModal();">Use showModal()</button>
{{</example>}}

## Sizes
{{<example>}}
<button class="btn btn-default" type="button" onclick="window.smallDialog.showModal();">Open Small</button>
<button class="btn btn-default" type="button" onclick="window.largeDialog.showModal();">Open Large</button>
<button class="btn btn-default" type="button" onclick="window.extraLargeDialog.showModal();">Open Extra Large</button>

<dialog class="dialog dialog-sm" id="smallDialog">
  <form method="dialog" class="dialog-header">
    <h3 class="dialog-title h5">This is a dialog</h3>
    <button value="cancel" class="btn-close"><i class="vi vi-xmark"></i></button>
  </form>
  <div class="dialog-body">
    <p>Tiny dialog says "hi".</p>
  </div>
</dialog>

<dialog class="dialog dialog-lg" id="largeDialog">
  <form method="dialog" class="dialog-header">
    <h3 class="dialog-title h5">This is a dialog</h3>
    <button value="cancel" class="btn-close"><i class="vi vi-xmark"></i></button>
  </form>
  <div class="dialog-body">
    <p>This is big.</p>
  </div>
</dialog>

<dialog class="dialog dialog-xl" id="extraLargeDialog">
  <form method="dialog" class="dialog-header">
    <h3 class="dialog-title h5">This is a dialog</h3>
    <button value="cancel" class="btn-close"><i class="vi vi-xmark"></i></button>
  </form>
  <div class="dialog-body">
    <p>There is so much space in here! (echo)</p>
  </div>
</dialog>

<p class="mt-3">Pick a dialog to open</p>
{{</example>}}
