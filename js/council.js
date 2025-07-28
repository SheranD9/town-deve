// $(window).scroll(function () {
//       $('.fadein').each(function () {
//             var elemPos = $(this).offset().top,
//                   scroll = $(window).scrollTop(),
//                   windowHeight = $(window).height();

//             if (scroll > elemPos - windowHeight + 150) {
//                   $(this).addClass('scrollin');
//             }
//       });
// });

const fadeIns = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
            if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  observer.unobserve(entry.target); // 一度表示されたら監視終了
            }
      });
}, {
      threshold: 0.1  // 要素の10%が画面に入ったら発火
});

fadeIns.forEach(el => {
      observer.observe(el);
});