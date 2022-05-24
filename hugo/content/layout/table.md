---
title: Table
description: Show data in tables.
section: layout
---

## Basic table
{{<example>}}
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Project</th>
      <th scope="col">Codename</th>
      <th scope="col">Version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Icons</td>
      <td>Valkyrie</td>
      <td>v0.14.2</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>CSS</td>
      <td>Mellow CSS</td>
      <td>v0.1.0</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>React components</td>
      <td>Mellow UI</td>
      <td>v0.1.0</td>
    </tr>
  </tbody>
</table>
{{</example>}}

## Colors
{{<example>}}
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Project</th>
      <th scope="col">Codename</th>
      <th scope="col">Version</th>
    </tr>
  </thead>
  <tbody>
    <tr class="red">
      <th scope="row">red</th>
      <td>Icons</td>
      <td>Valkyrie</td>
      <td>v0.14.2</td>
    </tr>
    <tr class="orange">
      <th scope="row">orange</th>
      <td>CSS</td>
      <td>Mellow CSS</td>
      <td>v0.1.0</td>
    </tr>
    <tr class="amber">
      <th scope="row">amber</th>
      <td>React components</td>
      <td>Mellow UI</td>
      <td>v0.1.0</td>
    </tr>
    <tr class="yellow">
      <th scope="row">yellow</th>
      <td>Icons</td>
      <td>Valkyrie</td>
      <td>v0.14.2</td>
    </tr>
    <tr class="lime">
      <th scope="row">lime</th>
      <td>CSS</td>
      <td>Mellow CSS</td>
      <td>v0.1.0</td>
    </tr>
    <tr class="green">
      <th scope="row">green</th>
      <td>React components</td>
      <td>Mellow UI</td>
      <td>v0.1.0</td>
    </tr>
    <tr class="teal">
      <th scope="row">teal</th>
      <td>Icons</td>
      <td>Valkyrie</td>
      <td>v0.14.2</td>
    </tr>
    <tr class="cyan">
      <th scope="row">cyan</th>
      <td>CSS</td>
      <td>Mellow CSS</td>
      <td>v0.1.0</td>
    </tr>
    <tr class="blue">
      <th scope="row">blue</th>
      <td>React components</td>
      <td>Mellow UI</td>
      <td>v0.1.0</td>
    </tr>
    <tr class="indigo">
      <th scope="row">indigo</th>
      <td>Icons</td>
      <td>Valkyrie</td>
      <td>v0.14.2</td>
    </tr>
    <tr class="violet">
      <th scope="row">violet</th>
      <td>CSS</td>
      <td>Mellow CSS</td>
      <td>v0.1.0</td>
    </tr>
    <tr class="purple">
      <th scope="row">purple</th>
      <td>React components</td>
      <td>Mellow UI</td>
      <td>v0.1.0</td>
    </tr>
    <tr class="pink">
      <th scope="row">pink</th>
      <td>Icons</td>
      <td>Valkyrie</td>
      <td>v0.14.2</td>
    </tr>
    <tr class="rose">
      <th scope="row">rose</th>
      <td>CSS</td>
      <td>Mellow CSS</td>
      <td>v0.1.0</td>
    </tr>
    <tr class="brown">
      <th scope="row">brown</th>
      <td>React components</td>
      <td>Mellow UI</td>
      <td>v0.1.0</td>
    </tr>
    <tr class="light">
      <th scope="row">light</th>
      <td>Icons</td>
      <td>Valkyrie</td>
      <td>v0.14.2</td>
    </tr>
    <tr class="grey">
      <th scope="row">grey</th>
      <td>CSS</td>
      <td>Mellow CSS</td>
      <td>v0.1.0</td>
    </tr>
    <tr class="dark">
      <th scope="row">dark</th>
      <td>React components</td>
      <td>Mellow UI</td>
      <td>v0.1.0</td>
    </tr>
  </tbody>
</table>
{{</example>}}

## Striped table
To improve readability, especially for larger data sets, you can use `table-striped` to give every other row light grey background color.

{{<example>}}
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Project</th>
      <th scope="col">Codename</th>
      <th scope="col">Version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Icons</td>
      <td>Valkyrie</td>
      <td>v0.14.2</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>CSS</td>
      <td>Mellow CSS</td>
      <td>v0.1.0</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>React components</td>
      <td>Mellow UI</td>
      <td>v0.1.0</td>
    </tr>
  </tbody>
</table>
{{</example>}}

## Hover table
If you want even better accessibility, you can make the rows light up when hoving over them. You can use this even in combination with `table-striped` or the colored variants.

{{<example>}}
<table class="table table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Project</th>
      <th scope="col">Codename</th>
      <th scope="col">Version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Icons</td>
      <td>Valkyrie</td>
      <td>v0.14.2</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>CSS</td>
      <td>Mellow CSS</td>
      <td>v0.1.0</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>React components</td>
      <td>Mellow UI</td>
      <td>v0.1.0</td>
    </tr>
    <tr class="red">
      <th scope="row">red</th>
      <td>CSS</td>
      <td>Mellow CSS</td>
      <td>v0.1.0</td>
    </tr>
    <tr class="green">
      <th scope="row">green</th>
      <td>React components</td>
      <td>Mellow UI</td>
      <td>v0.1.0</td>
    </tr>
    <tr class="amber">
      <th scope="row">amber</th>
      <td>Icons</td>
      <td>Valkyrie</td>
      <td>v0.14.2</td>
    </tr>
    <tr class="light">
      <th scope="row">light</th>
      <td>CSS</td>
      <td>Mellow CSS</td>
      <td>v0.1.0</td>
    </tr>
    <tr class="dark">
      <th scope="row">dark</th>
      <td>React components</td>
      <td>Mellow UI</td>
      <td>v0.1.0</td>
    </tr>
  </tbody>
</table>
{{</example>}}

## Colored tables
You can apply a color modifier to the entire table.

{{<example>}}
<table class="table table-striped table-hover red mb-3">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Project</th>
      <th scope="col">Codename</th>
      <th scope="col">Version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Icons</td>
      <td>Valkyrie</td>
      <td>v0.14.2</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>CSS</td>
      <td>Mellow CSS</td>
      <td>v0.1.0</td>
    </tr>
  </tbody>
</table>
<table class="table table-striped table-hover dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Project</th>
      <th scope="col">Codename</th>
      <th scope="col">Version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Icons</td>
      <td>Valkyrie</td>
      <td>v0.14.2</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>CSS</td>
      <td>Mellow CSS</td>
      <td>v0.1.0</td>
    </tr>
  </tbody>
</table>
{{</example>}}

## Small table
Create a denser table by adding the `table-sm` class.

{{<example>}}
<table class="table table-striped table-sm">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Project</th>
      <th scope="col">Codename</th>
      <th scope="col">Version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Icons</td>
      <td>Valkyrie</td>
      <td>v0.14.2</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>CSS</td>
      <td>Mellow CSS</td>
      <td>v0.1.0</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>React components</td>
      <td>Mellow UI</td>
      <td>v0.1.0</td>
    </tr>
  </tbody>
</table>
{{</example>}}

## Borders
### Bordered table
Show all borders by using the `table-bordered` class.

{{<example>}}
<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Project</th>
      <th scope="col">Codename</th>
      <th scope="col">Version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Icons</td>
      <td>Valkyrie</td>
      <td>v0.14.2</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>CSS</td>
      <td>Mellow CSS</td>
      <td>v0.1.0</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>React components</td>
      <td>Mellow UI</td>
      <td>v0.1.0</td>
    </tr>
  </tbody>
</table>
{{</example>}}

### No borders table
Show no borders by using the `table-borderless` class.

{{<example>}}
<table class="table table-borderless">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Project</th>
      <th scope="col">Codename</th>
      <th scope="col">Version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Icons</td>
      <td>Valkyrie</td>
      <td>v0.14.2</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>CSS</td>
      <td>Mellow CSS</td>
      <td>v0.1.0</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>React components</td>
      <td>Mellow UI</td>
      <td>v0.1.0</td>
    </tr>
  </tbody>
</table>
{{</example>}}
