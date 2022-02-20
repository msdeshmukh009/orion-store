//*Apply-coupon-modal
const couponBtn = document.querySelector("#couponBtn");
const couponModal = document.querySelector(".modal-background");
const modalCloseBtn = document.querySelector(".modal-action-btn");

couponBtn.addEventListener("click", () => {
  couponModal.style.display = "flex";
  document.body.style.overflow = "hidden";
});
modalCloseBtn.addEventListener("click", () => {
  couponModal.style.display = "none";
  document.body.style.overflow = "visible";
});
