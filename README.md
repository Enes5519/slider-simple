# Simple Slider
A dependency-free, fast and lightweight slider.

[![Simple Slider Minified Size](https://img.shields.io/bundlephobia/min/slider-simple?style=for-the-badge)](https://www.npmjs.com/package/slider-simple)
[![Simple Slider Version](https://img.shields.io/github/package-json/v/Enes5519/slider-simple?color=%2300C853&style=for-the-badge)](https://www.npmjs.com/package/slider-simple)

## Example
```html
<!-- Import CSS -->
<link rel="stylesheet" href="node_modules/slider-simple/slider.css">

<!-- Implement Slider -->
<div class="test slider">
    <div class="slider-navigation">&#11013;</div>
    <div class="slider-content">
        <div class="slider-items">
            <!-- Put your slider items (Custom CSS) -->
            <div class="slider-item">1</div>
            <div class="slider-item">2</div>
            <div class="slider-item">3</div>
            <div class="slider-item">4</div>
            <div class="slider-item">5</div>
            <div class="slider-item">6</div>
        </div>
    </div>
    <div class="slider-navigation">&#10145;</div>
</div>
```
```js
// for Node Modules
const Slider = require("slider-simple");

// for ES6 Modules
import Slider from "slider-simple";

new Slider(".test", { gap: 8 });
```

## Options
| Option | Type | Description |
| ---- | ---- | ---- |
| gap | number | A size of the space between slides. (px) |
| perPage | number | A number of visible slides. |
