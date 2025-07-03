document.addEventListener("DOMContentLoaded", () => {
  // Scroll Button
  const scrollBtn = document.getElementById("scrollBtn");
  const nextSection = document.getElementById("nextSection");
  if (scrollBtn && nextSection) {
    scrollBtn.addEventListener("click", () => {
      nextSection.scrollIntoView({ behavior: "smooth" });
    });
  } else {
    console.warn("scrollBtn or nextSection not found in the DOM.");
  }

  const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // Responsive settings
      768: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 2,
      },
    },
  });
});
