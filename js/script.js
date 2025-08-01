document.addEventListener("DOMContentLoaded", () => {
  // Constants
  const COLOR_COUNCIL = "#52b3e6";
  const COLOR_DEFAULT = "#fa4b06";

  // FirstView animation
  const firstView = document.querySelector(".FirstView");
  if (firstView) {
    firstView.classList.add("active");
  }

  // Scroll Button
  const scrollBtn = document.querySelector(".scrollBtn");
  const nextSection = document.getElementById("sectionOne");
  if (scrollBtn && nextSection) {
    scrollBtn.addEventListener("click", (e) => {
      e.preventDefault();
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
      footer.style.backgroundColor = COLOR_COUNCIL;
    } else {
      footer.style.backgroundColor = COLOR_DEFAULT;
    }
  }

  // Change header color by page
  const header = document.querySelector(".header");
  if (header) {
    if (window.location.pathname.includes("index.html")) {
      header.style.backgroundColor = "transparent";
    } else {
      header.style.backgroundColor = COLOR_COUNCIL;
    }
  }

  // Weather API
  const API_KEY = "5050b88ea33d4f7ab6323530252807";
  const location = "nagoya";
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&lang=ja`;

  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    })
    .then((data) => {
      const temp = data.current.temp_c;
      const icon = data.current.condition.icon;
      const condition = data.current.condition.text;

      const weatherImg = document.querySelector(".weather__icon img");
      const weatherText = document.querySelector(".weather__icon span");

      // Choose icon based on condition text
      let iconSrc = "/images/sunny.svg"; // default

      if (condition.includes("晴")) {
        // sunny
        iconSrc = "/images/sunny.svg";
      } else if (condition.includes("雨")) {
        // rainy
        iconSrc = "/images/rainy.svg";
      } else if (condition.includes("雪")) {
        // snowy
        iconSrc = "/images/snowy.svg";
      } else if (condition.includes("曇")) {
        // cloudy
        iconSrc = "/images/cluody.svg";
      }

      if (weatherImg && weatherText) {
        weatherImg.src = iconSrc;
        weatherImg.alt = condition;
        weatherText.textContent = `${temp}°C`;
      }
    })
    .catch((error) => {
      console.error("Failed to fetch weather data:", error);
      const weatherText = document.querySelector(".weather__icon span");
      if (weatherText) {
        weatherText.textContent = "取得できません";
      }
    });

  // Remove border from third card
  const cards = document.querySelectorAll(".sectionOne__card");
  if (cards.length >= 3) {
    cards[2].classList.add("no-border");
  }

  // FAQ toggle behavior
  const faqButtons = document.querySelectorAll(".faq__toggle");

  faqButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq__item");
      if (!item) return;

      item.classList.toggle("is-open");

      const isOpen = item.classList.contains("is-open");
      btn.textContent = isOpen ? "−" : "＋";

      const answer = item.querySelector(".faq__answer");
      if (answer) {
        answer.style.display = isOpen ? "flex" : "none";
      }
    });
  });
});

// Add shake animation for event icon
document.addEventListener("DOMContentLoaded", () => {
  const icon = document.querySelector(".FirstView__eventIcon");
  if (!icon) return;

  icon.addEventListener("mouseenter", () => {
    for (let i = 0; i < 16; i++) {
      // More particles
      const firework = document.createElement("div");
      firework.className = "firework";

      // Random color
      const colors = [
        "#fa4b06",
        "#52b3e6",
        "#fffae2",
        "#ff1493",
        "#88cf3c",
        "#fff",
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];
      firework.style.setProperty("--fw-color", color);

      // Random angle and distance
      const angle = (360 / 16) * i + Math.random() * 10;
      const distance = 120 + Math.random() * 60;
      firework.style.left =
        icon.getBoundingClientRect().left + icon.offsetWidth / 2 + "px";
      firework.style.top =
        icon.getBoundingClientRect().top + icon.offsetHeight / 2 + "px";
      firework.style.setProperty("--angle", angle + "deg");
      firework.style.setProperty("--distance", distance + "px");

      document.body.appendChild(firework);

      setTimeout(() => {
        firework.remove();
      }, 1300);
    }
  });
});

// Add floating question marks animation
document.addEventListener("DOMContentLoaded", () => {
  const icon = document.querySelector('.FirstView__questionIcon');
  if (!icon) return;

  icon.addEventListener('mouseenter', () => {
    for (let i = 0; i < 8; i++) {
      const qm = document.createElement('div');
      qm.className = 'question-mark';
      qm.textContent = '?';

      // Random angle and distance
      const angle = (360 / 8) * i + Math.random() * 10;
      const distance = 80 + Math.random() * 40;
      qm.style.left = (icon.getBoundingClientRect().left + icon.offsetWidth / 2) + 'px';
      qm.style.top = (icon.getBoundingClientRect().top + icon.offsetHeight / 2) + 'px';
      qm.style.setProperty('--angle', angle + 'deg');
      qm.style.setProperty('--distance', distance + 'px');

      document.body.appendChild(qm);

      setTimeout(() => {
        qm.remove();
      }, 1000);
    }
  });
});
