const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const currentlyActive = document.querySelector('.accordion-item.active');

    if (currentlyActive && currentlyActive !== item) {
      currentlyActive.classList.remove('active');
    }

    item.classList.toggle('active');
  });
});
