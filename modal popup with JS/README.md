# Modal Popup Window

A basic modal popup window created using **HTML**, **CSS**, and **JavaScript**. This modal includes functionality to open and close, with additional features like clicking outside the modal to close it.

---

## Features
- **Responsive Design**: Modal adapts to different screen sizes.
- **Interactive Buttons**: Open and close functionality.
- **Overlay**: Semi-transparent background overlay for focus on the modal.
- **User-Friendly**: Close modal by clicking outside the content area.

---

## How It Works
1. **HTML**: Structure for the modal, button, and close icon.
2. **CSS**: Styling for the modal overlay, content, and animations.
3. **JavaScript**: Event listeners for open and close functionality.

---

## Code Explanation
### HTML
- The `button` opens the modal.
- The modal has a `div` with the class `modal` and the ID `modal`, which contains modal content.

### CSS
- The modal is hidden by default (`display: none`) and appears as a flexbox when active.
- Overlay background with `rgba(0, 0, 0, 0.5)` ensures focus on the modal.
- Animations and hover effects for a polished look.

### JavaScript
- `click` event listeners on:
  - **Open Button**: Makes the modal visible.
  - **Close Button and Overlay**: Hides the modal.

---

## Demo
To see this modal in action:
1. Copy the code into an HTML file.
2. Open the file in a browser.
3. Click the "Open Modal" button to view the popup.

https://github.com/user-attachments/assets/cf3d3d6a-1406-4520-92e0-98f04e211943



---

## Future Enhancements
- Add animations for opening and closing the modal.
- Support for ESC key to close the modal.

---

## License
This project is free to use and distribute. No attribution required.

