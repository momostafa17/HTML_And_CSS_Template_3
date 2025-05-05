// استهدف العنصر بالسهم
const arrowBtn = document.querySelector(".arrow_2");

// لما المستخدم يعمل Scroll
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    arrowBtn.style.opacity = "1";
    arrowBtn.style.pointerEvents = "auto";
  } else {
    arrowBtn.style.opacity = "0";
    arrowBtn.style.pointerEvents = "none";
  }
});

// عند الضغط على السهم: ارجع لأعلى الصفحة بسلاسة
arrowBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
