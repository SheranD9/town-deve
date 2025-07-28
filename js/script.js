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
    spaceBetween: 20,
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

  // Change footer color by page
  const footer = document.querySelector(".footer");
  if (footer) {
    if (window.location.pathname.includes("council.html")) {
      footer.style.backgroundColor = "#52B3E6"; // Council page color
    } else {
      footer.style.backgroundColor = "#fa4b06"; // Default/home page color
    }
  }

  const header = document.querySelector(".header");
  if (header) {
    if (window.location.pathname.includes("index.html")) {
      header.style.backgroundColor = "transparent"; // index page color
    } else {
      footer.style.backgroundColor = "#52b3e6"; // Default color
    }
  }

  // Weather API
  const API_KEY = "5050b88ea33d4f7ab6323530252807";
  const location = "nagoya"; // Change this to your desired location
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&lang=ja`;

  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    })
    .then((data) => {
      console.log("Weather data:", data);
      const temp = data.current.temp_c;
      const icon = data.current.condition.icon;
      const condition = data.current.condition.text;

      // Update HTML
      const weatherImg = document.querySelector(".weather__icon img");
      const weatherText = document.querySelector(".weather__icon span");

      if (weatherImg && weatherText) {
        weatherImg.src = `https:${icon}`;
        weatherImg.alt = condition;
        weatherText.textContent = `${temp}°C`;
      }
    })
    .catch((error) => {
      console.error("Failed to fetch weather data:", error);
    });

  const cards = document.querySelectorAll(".sectionOne__card");
  if (cards.length >= 3) {
    cards[2].style.border = "none"; // 3rd card (index 2)
  }

  const faqButtons = document.querySelectorAll(".faq__toggle");

  faqButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq__item");

      // Toggle "is-open" class
      item.classList.toggle("is-open");

      // Update the button symbol
      const isOpen = item.classList.contains("is-open");
      btn.textContent = isOpen ? "−" : "＋";

      // Show/hide the answer
      const answer = item.querySelector(".faq__answer");
      if (answer) {
        answer.style.display = isOpen ? "flex" : "none";
      }
    });
  });
});
