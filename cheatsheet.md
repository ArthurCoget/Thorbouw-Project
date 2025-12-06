# 📱 Responsive Design Cheat Sheet

A quick reference guide for modern CSS techniques to build flexible, accessible layouts.

---

## 1. Sizing & Spacing (`min()`, `max()`)
Use `min()` to create smart, conditional values for padding or margins. It selects the smaller of the two values, preventing elements from getting too large on small screens.

* **Syntax:** `min(fixed-value, relative-value)`
* **Use case:** Padding that feels spacious on desktop but doesn't squish content on mobile.
* **Example:**
    ```css
    .container {
      /* Uses 5% padding until that value exceeds 20px */
      padding: min(20px, 5%);
    }
    ```

## 2. Fluid Typography (`clamp()`, `calc()`, `rem`)
Avoid fixed pixel sizes. Use relative units and fluid functions for text that scales smoothly between viewports.

* **Units:** Always use `rem` for font-size (accessible/zoomable) instead of `px`.
    * *Note: 1rem ≈ 16px (browser default).*
* **The Clamp Function:** `clamp(minimum, preferred, maximum)`
* **Best Practice:** Combine `rem` (base) with `vw` (viewport width) using `calc()` to ensure text zooms correctly while remaining fluid.
* **Example:**
    ```css
    h1 {
      /* Min: 2rem, Ideal: 5vw + 1rem, Max: 4rem */
      font-size: clamp(2rem, calc(5vw + 1rem), 4rem);
    }
    ```

## 3. Responsive Images & Aspect Ratio
Control how images occupy space before they load to prevent layout shifts (CLS), and handle different shapes for different devices.

* **Aspect Ratio:** define the shape without calculating padding hacks.
    * **Desktop:** `aspect-ratio: 16/9;`
    * **Mobile:** `aspect-ratio: 9/16;` (or `1/1` for squares).
* **Object Fit:** Ensure images fill their container without distortion.
    * `object-fit: cover;` (Crops to fill).
* **HTML Attributes:** Always add `width` and `height` attributes in HTML to reserve layout space.
* **Example:**
    ```css
    img {
      width: 100%;
      aspect-ratio: 16/9;
      object-fit: cover;
    }
    ```

## 4. Viewport Units (`dvh` vs `vh`)
Standard `vh` (viewport height) often causes bugs on mobile browsers where address bars appear/disappear.

* **The Fix:** Use `dvh` (Dynamic Viewport Height).
* **Why:** `dvh` adjusts automatically when the mobile browser UI (URL bar) expands or retracts.
* **Example:**
    ```css
    .hero-section {
      height: 100dvh; /* Fits the actual visible screen */
    }
    ```

## 5. Accessibility & Interaction (`inert`)
Use the `inert` attribute to completely disable a section of the DOM.

* **Function:** Makes elements non-clickable and removes them from the tab/focus order and accessibility tree.
* **Use Case:** When opening a modal, set the main background content to `inert` so users can't tab 'behind' the modal.
* **Example:**
    ```html
    <main inert>
      ...
    </main>
    
    <dialog open>
      ...
    </dialog>
    ```

---

### 💡 Extra Quick Tips

* **Grid for Layouts:** Use `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));` for instant responsive card layouts without media queries.
* **Gap:** Use `gap` instead of margins for spacing elements in flex/grid containers to avoid calculating first/last child margins.
* **Dark Mode:** Use CSS variables (custom properties) for colors to easily switch themes.