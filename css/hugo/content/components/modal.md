---
title: Modals
description: Show modals to users.
section: components
---

## Example
Mellow's modal uses the `dialog` element, this native HTML element is supported in all modern browsers.

{{<example>}}
<dialog class="modal" id="exampleDialog">
  <form method="dialog" class="modal-header">
    <h3 class="h5">This is a modal</h3>
    <button value="cancel" class="btn-close"><i class="vi vi-xmark"></i></button>
  </form>
  <div class="modal-body">
    <p>Hello world!</p>
    <p>This modal can be closed with the <kb>esc</kb> button.</p>
  </div>
  <form method="dialog" class="modal-footer">
    <button value="cancel" class="btn btn-danger"><i class="vi vi-xmark"></i> Close</button>
  </form>
</dialog>
<button class="btn btn-default" onclick="window.exampleDialog.showModal();">Open modal</button>
{{</example>}}

### `show()` and `showModal()`
There are 2 methods to open a model: `show()` and `showModal()`. We'll refer to the `showModal()` method in this documentation, but you can use `show()` too.

The `showModal()` method does everything the `show()` method does, but also respects the `autofocus` property, and makes sure the dialog is displayed on top of the stack.

{{<example>}}
<dialog class="modal" id="showDialog">
  <form method="dialog" class="modal-header">
    <h3 class="h5">This is a modal</h3>
    <button value="cancel" class="btn-close"><i class="vi vi-xmark"></i></button>
  </form>
  <div class="modal-body">
    <p>Hello world!</p>
    <p>This modal can be closed with the <kb>esc</kb> button.</p>
  </div>
</dialog>
<button class="btn btn-default" onclick="window.showDialog.showModal();">Use show()</button>
<button class="btn btn-default" onclick="window.showDialog.showModal();">Use showModal()</button>
{{</example>}}

## Sizes
{{<example>}}
<button class="btn btn-default" onclick="window.smallDialog.showModal();">Open Small</button>
<button class="btn btn-default" onclick="window.largeDialog.showModal();">Open Large</button>
<button class="btn btn-default" onclick="window.extraLargeDialog.showModal();">Open Extra Large</button>

<dialog class="modal modal-sm" id="smallDialog">
  <form method="dialog" class="modal-header">
    <h3 class="h5">This is a modal</h3>
    <button value="cancel" class="btn-close"><i class="vi vi-xmark"></i></button>
  </form>
  <div class="modal-body">
    <p>Tiny modal says "hi".</p>
  </div>
</dialog>

<dialog class="modal modal-lg" id="largeDialog">
  <form method="dialog" class="modal-header">
    <h3 class="h5">This is a modal</h3>
    <button value="cancel" class="btn-close"><i class="vi vi-xmark"></i></button>
  </form>
  <div class="modal-body">
    <p>This is big.</p>
  </div>
</dialog>

<dialog class="modal modal-xl" id="extraLargeDialog">
  <form method="dialog" class="modal-header">
    <h3 class="h5">This is a modal</h3>
    <button value="cancel" class="btn-close"><i class="vi vi-xmark"></i></button>
  </form>
  <div class="modal-body">
    <p>There is so much space in here! (echo)</p>
  </div>
</dialog>

<p class="mt-3">Pick a dialog to open</p>
{{</example>}}
