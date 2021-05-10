# Animon

A simple way to animate DOM elements when they enter the viewport.

## Installation

Install with npm:

```
npm install animon --save
```

Install with yarn:

```
yarn add animon
```

Add animon styles from a CDN:

```
@TODO
```

## Usage

### Importing the library

#### As an ES module

```js
import { animon } from '<path-to>/animon.esm.js';

// Initialize it with default selector
animon();

// Or with a custom selector
animon('h1');
```

#### With webpack

#### As an IIFE

```html
<script type="text/javascript" src="<path-to>/animon.iife.js"></script>
<script type="text/javascript">
  Animon.animon();
</script>
```

### DOM syntax

Animon will detect all elements that has a 'animonItem' classname, for example:

```html
<section>
    <h1 class="animonItem">Hello World</h1>
    <p class="animonItem">Lorem ipsum dolor sit amet, tu quoque mi filii.</p>
</section>
```

In addition, animon also detects two data-attributes that gives you more control:

#### Data-effect

This is the easing function that will be used on the element entrance:

```html
<h1 class="animonItem" data-effect="fadeInUp">Hey yah!</h1>
```

#### Data-delay

Delays the entrace by `x` milliseconds:

```html
<h1 class="animonItem" data-delay="800">
```
