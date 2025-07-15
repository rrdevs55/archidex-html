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
  if (document.querySelector('.project-showcase-2')) {
    const items = document.querySelectorAll('.project-showcase-2__item');

    items.forEach(item => {
      const media = item.querySelector('.project-showcase-2__media');
      const viewProjects = item.querySelector('.view-projects');

      // 🔒 Initial closed state
      gsap.set(media, {
        height: 0,
        marginTop: 0,
        marginBottom: 0,
      });

      gsap.set(viewProjects, {
        height: 0,
        marginBottom: 0,
      });

      // 🔁 No shuffle — keep original image order
      const thumbs = Array.from(media.querySelectorAll('.thumb'));
      media.innerHTML = '';
      thumbs.forEach(thumb => media.appendChild(thumb));
    });

    // Accordion toggle click
    items.forEach(currentItem => {
      currentItem.addEventListener('click', () => {
        const currentMedia = currentItem.querySelector('.project-showcase-2__media');
        const currentViewProjects = currentItem.querySelector('.view-projects');
        const isOpen = currentMedia.offsetHeight > 0;

        // 🔒 Close all first
        items.forEach(item => {
          const media = item.querySelector('.project-showcase-2__media');
          const viewProjects = item.querySelector('.view-projects');

          gsap.to(media, {
            height: 0,
            marginTop: 0,
            marginBottom: 0,
            duration: 0.7,
            ease: "power2.inOut"
          });

          gsap.to(viewProjects, {
            height: 0,
            marginBottom: 0,
            duration: 0.7,
            ease: "power2.inOut"
          });
        });

        // ✅ Open clicked item if it was previously closed
        if (!isOpen) {
          gsap.to(currentMedia, {
            height: currentMedia.scrollHeight,
            marginTop: 30,
            marginBottom: 26,
            duration: 0.9,
            ease: "power2.out"
          });

          gsap.to(currentViewProjects, {
            height: currentViewProjects.scrollHeight,
            marginBottom: 20,
            duration: 0.9,
            ease: "power2.out"
          });
        }
      });
    });
  }


  document.addEventListener("DOMContentLoaded", () => {
    const textEls = document.querySelectorAll(".text-drow");

    textEls.forEach(textEl => {
      // Store original child nodes (text nodes and <br> nodes)
      const nodes = Array.from(textEl.childNodes);
      textEl.innerHTML = ""; // Clear the container

      nodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          // For each text node, wrap every character in a span
          node.textContent.split("").forEach(char => {
            const span = document.createElement("span");
            span.textContent = char === " " ? "\u00A0" : char;
            span.style.opacity = 0;
            textEl.appendChild(span);
          });
        } else if (node.nodeName === "BR") {
          // Append the <br> node as is
          textEl.appendChild(node);
        }
        // You can add more conditions if you want to support other elements
      });

      gsap.to(textEl.querySelectorAll("span"), {
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
      });
    });
  });



})(jQuery);


