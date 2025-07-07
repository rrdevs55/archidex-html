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
})(jQuery);


