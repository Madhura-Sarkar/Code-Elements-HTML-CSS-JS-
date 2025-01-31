const searchContainer = document.querySelector(".search-container");
const searchInput = document.querySelector("#search-input");

searchContainer.addEventListener("click", () => {
  searchContainer.classList.add("active");
  searchInput.focus();
});

document.addEventListener("click", (e) => {
  if (!searchContainer.contains(e.target)) {
    searchContainer.classList.remove("active");
  }
});
