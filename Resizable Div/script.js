const divider = document.querySelector('.divider');
const container = document.querySelector('.container');
const leftPanel = document.querySelector('.left-panel');

let isDragging = false;

divider.addEventListener('mousedown', (e) => {
  isDragging = true;
  document.body.style.cursor = 'col-resize'; // Change cursor to indicate resizing
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const containerRect = container.getBoundingClientRect();
  const offsetX = e.clientX - containerRect.left; // Calculate new left panel width

  const minWidth = 50; // Minimum width for the panels
  const maxWidth = containerRect.width - minWidth;

  if (offsetX > minWidth && offsetX < maxWidth) {
    leftPanel.style.flexBasis = `${offsetX}px`; // Adjust the left panel's width
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  document.body.style.cursor = 'default'; // Reset cursor to normal
});
