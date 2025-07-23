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

//wether
document.addEventListener("DOMContentLoaded", () => {
  const API_KEY = "145fc348fce54cfc84433152250906";
  const location = "nagoya";
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&lang=ja`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const temp = data.current.temp_c;
      const icon = "./images/cloudy.png";
      // const icon = data.current.condition.icon;
      const condition = data.current.condition.text;

      // Update HTML
      document.querySelector(".weather__icon img").src = icon;
      document.querySelector(".weather__icon img").alt = condition;
      document.querySelector(".weather__icon span").textContent = `${temp}°C`;
    })
    .catch((error) => {
      console.error("Failed to fetch weather data:", error);
    });
});

const cards = document.querySelectorAll(".sectionOne__card");
if (cards.length >= 3) {
  cards[2].style.border = "none"; // 3rd card (index 2)
}
