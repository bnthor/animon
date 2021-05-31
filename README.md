# Animon

A simple way to animate DOM elements when they enter the viewport. [See the demo](https://bnthor.github.io/animon-site/)

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

```html
<link rel="stylesheet" href="https://unpkg.com/animon/dist/animon.css"/>
```

## Usage

### Importing the library

#### As an ES module

```js
// From node_modules
import { animon } from 'animon';
// OR from a CDN
import { animon } from 'https://unpkg.com/animon';

// Initialize it with default selector
animon();

// Or with a custom selector
animon('h1');
```

#### As an IIFE

```html
<script type="text/javascript" src="https://unpkg.com/animon/dist/animon.iife.js"></script>
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

In addition, animon also detects three data-attributes that gives you more control:

#### Data-effect

This is the easing function that will be used on the element entrance:

```html
<h1 class="animonItem" data-effect="fadeInUp">Hey yah!</h1>
```

There's a few effects available at the moment:

- fadeIn
- fadeInLeft (default)
- fadeInRight
- fadeInDown
- fadeInUp
- scaleUp
- scaleDown

#### Data-delay

Delays the entrace by `x` milliseconds:

```html
<h1 class="animonItem" data-delay="800">
```

#### Data-duration

The transition duration, it must be expressed as a CSS "transition-duration" value (120ms, 2s etc...).

```html
<h1 class="animonItem" data-duration="4s">
```

### Custom effects

You can skip importing the default stylesheet entirely and create your own effects. All you have to do is declare a default state and its `.is-visible` CSS properties.

You may want to start with this:

```css
/* Base */
.animonItem {
    opacity: 0;
    will-change: opacity, transform;
    transition:
        opacity 640ms 400ms cubic-bezier(0.5, 1, 0.89, 1),
        transform 640ms 400ms cubic-bezier(0.5, 1, 0.89, 1);
}
.animonItem.is-visible {
    opacity: 1;
}

/* Custom effect */
.animonItem[data-effect="myEffect"] {
    transform: translateY(20rem);
}
.animonItem[data-effect="myEffect"].is-visible {
    transform: translateY(0);
}
```
