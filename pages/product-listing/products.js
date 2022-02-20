//*Filter
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

//*Alert
const toasts = document.querySelectorAll(".toast");
const addToCartBtns = document.querySelectorAll(".add-to-cart");
const [topRightToast] = toasts;

addToCartBtns.forEach(addToCartBtn => {
  addToCartBtn.addEventListener("click", () => {
    topRightToast.style.display = "flex";
    setTimeout(() => {
      topRightToast.style.display = "none";
    }, 3000);
  });
});
