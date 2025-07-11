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

  // Swiper initialization
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

  // FAQ Answer Toggle
  const faqButtons = document.querySelectorAll(".qestion__btn");
  faqButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Find the closest .questions__item and then its answer
      const item = btn.closest(".questions__item");
      const answer = item.querySelector(".questions__item__answer");
      if (answer) {
        answer.style.display = "block";
        btn.style.display = "none";
      }
    });
  });
});
