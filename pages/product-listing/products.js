const showFilterBtn = document.querySelector("#show-filter-btn");
const filters = document.querySelector("#filters");
const filterCloseBtn = document.querySelector("#filter-close-btn");

showFilterBtn.addEventListener("click", () => {
  filters.classList.add("show-filters");
  document.body.style.overflow = "hidden";
});
filterCloseBtn.addEventListener("click", () => {
  filters.classList.remove("show-filters");
  document.body.style.overflow = "visible";
});
