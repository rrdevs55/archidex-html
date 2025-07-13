/***************************************************
==================== JS INDEX ======================
01. Data Background Set

****************************************************/

(function ($) {
  "use strict";

  /* === Service list Hover Animation (index 01) === */
  function Team_animation() {
    const wrappers = [".services__wrapper", ".service-9__wrapper", ".service-10__wrapper"];

    wrappers.forEach(wrapperClass => {
      const wrapper = $(wrapperClass);
      const active_bg = wrapper.find(".active-bg");

      function moveBgTo(target) {
        if (!target.length) return;

        const offsetTop = target.offset().top;
        const height = target.outerHeight();
        const wrapperTop = wrapper.offset().top;
        const translateY = offsetTop - wrapperTop;

        active_bg.css({
          transform: `translateY(${translateY}px)`,
          height: `${height}px`,
          opacity: 1
        });
      }

      // On hover
      wrapper.find(`${wrapperClass.replace("services__wrapper", "services__item")}`).on("mouseenter", function () {
        moveBgTo($(this));
      });

      // On leave, hide background
      wrapper.on("mouseleave", function () {
        active_bg.css({
          opacity: 0,
          height: 0
        });
      });
    });
  }

  $(document).ready(function () {
    Team_animation();
  });


  /* === panel (index 01) === */
  gsap.utils.toArray(".panel").forEach(panel => {
    gsap.to(panel, {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration: 2,
      ease: "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
      scrollTrigger: {
        trigger: panel,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  });


  /* === design-showcase__active (index 02) === */

  if ($(".design-showcase__active").length > 0) {
    var design_showcase = new Swiper(".design-showcase__active", {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 10,
      speed: 2000,
      pagination: {
        el: ".design-showcase-pagination",
        clickable: true,
      },
    });
  }


  /* === project-showcase-2 (index 03) === */
  if ($('.project-showcase-2')) {
    document.querySelectorAll('.project-showcase-2__item').forEach(item => {
      const media = item.querySelector('.project-showcase-2__media');
      const viewProjects = item.querySelector('.view-projects');

      // 🔒 Ensure closed state on load
      gsap.set(media, {
        height: 0,
        marginTop: 0,
        marginBottom: 0,
      });

      gsap.set(viewProjects, {
        height: 0,
      });

      // 🔀 Shuffle images
      const thumbs = Array.from(media.querySelectorAll('.thumb'));
      const shuffledThumbs = thumbs.sort(() => 0.5 - Math.random());

      media.innerHTML = '';
      shuffledThumbs.forEach(thumb => media.appendChild(thumb));

      // Hover Animation
      item.addEventListener('mouseenter', () => {
        gsap.to(media, {
          height: media.scrollHeight,
          marginTop: 30,
          marginBottom: 26,
          duration: 0.9,
          ease: "power2.out"
        });

        gsap.to(viewProjects, {
          height: viewProjects.scrollHeight,
          duration: 0.9,
          ease: "power2.out"
        });
      });

      item.addEventListener('mouseleave', () => {
        gsap.to(media, {
          height: 0,
          marginTop: 0,
          marginBottom: 0,
          duration: 0.9,
          ease: "power2.inOut"
        });

        gsap.to(viewProjects, {
          height: 0,
          duration: 0.9,
          ease: "power2.inOut"
        });
      });
    });
  }


})(jQuery);


