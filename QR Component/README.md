# 🚀 3D Interactive QR Component 

![Design Preview](/QR%20Component%20Card/images/Screenshot.png)

<div align="center">
  <a href="https://glassmorphism-qr-component.netlify.app/">See The Magic</a>
  <span> | </span>

## 📄 Overview

This is a "High Level" page of the QR code component.
Instead of a static card, I engineered a **3D Parallax Tilt Effect** using vanilla JavaScript and CSS perspective to create a premium, interactive user experience.

### ✨ Key Features

- **3D Tilt Interaction:** The card follows the user's mouse movement in 3D space.
- **Glassmorphism:** Modern frosted glass aesthetic using `backdrop-filter`.
- **Z-Axis Layering:** The QR code and text float at different depths (TranslateZ) for a realistic depth effect.
- **Responsive:** Works seamlessly on mobile and desktop.
- **Accessibility:** Semantic HTML5 and proper ARIA labels.

## 🛠️ Built With

- **HTML5:** Semantic markup.
- **CSS3:** Custom Properties (Variables), Flexbox, CSS Perspective & Transforms.
- **JavaScript (ES6):** Logic for mouse-tracking coordinate calculation.

## 💡 What I Learned

This project helped me master CSS 3D environments. A key snippet I used to create the depth effect:

```css
.card {
  transform-style: preserve-3d; /* Tells child elements to exist in 3D space */
}

.qr-container {
  transform: translateZ(20px); /* Pushes the image "closer" to the user */
}
```

And the JavaScript logic to map mouse coordinates to rotation degrees:

```js

const xAxis = (window.innerWidth / 2 - e.pageX) / 20; 
const yAxis = (window.innerHeight / 2 - e.pageY) / 20;
card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

```