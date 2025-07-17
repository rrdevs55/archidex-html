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
            duration: 0.5,
            ease: "power2.inOut"
          });

          gsap.to(viewProjects, {
            height: 0,
            marginBottom: 0,
            duration: 0.5,
            ease: "power2.inOut"
          });
        });

        // ✅ Open clicked item if it was previously closed
        if (!isOpen) {
          gsap.to(currentMedia, {
            height: currentMedia.scrollHeight,
            marginTop: 30,
            marginBottom: 26,
            duration: 0.5,
            ease: "power2.out"
          });

          gsap.to(currentViewProjects, {
            height: currentViewProjects.scrollHeight,
            marginBottom: 20,
            duration: 0.5,
            ease: "power2.out"
          });
        }
      });
    });
  }


  /* === text-drow (index 04) === */
  document.addEventListener("DOMContentLoaded", () => {
    const textEls = document.querySelectorAll(".text-drow");

    textEls.forEach(textEl => {
      const nodes = Array.from(textEl.childNodes);
      textEl.innerHTML = "";

      nodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          node.textContent.split("").forEach(char => {
            const span = document.createElement("span");
            span.textContent = char === " " ? "\u00A0" : char;
            span.style.opacity = 0;
            textEl.appendChild(span);
          });
        } else if (node.nodeName === "BR") {
          textEl.appendChild(node);
        }
      });

      gsap.to(textEl.querySelectorAll("span"), {
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power1.inOut",
      });
    });
  });

  /* === mouse-parallax (index 04) === */
  const elements = document.querySelectorAll(".mouse-parallax");
  elements.forEach((element) => {
    const inner = element.querySelector(".inner");

    element.addEventListener("mousemove", (e) => {
      const rect = element.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const deltaX = offsetX - centerX;
      const deltaY = offsetY - centerY;

      gsap.to(inner, {
        x: deltaX * 0.6,
        y: deltaY * 0.6,
        rotationY: deltaX * 0.25,
        rotationX: -deltaY * 0.25,
        duration: 0.6,
        ease: "power3.out",
      });
    });

    element.addEventListener("mouseleave", () => {
      gsap.to(inner, {
        x: 0,
        y: 0,
        rotationX: 0,
        rotationY: 0,
        duration: 0.7,
        ease: "power4.out",
      });
    });
  });

  /* === mouse-parallax (index 04) === */
  const buttons = document.querySelectorAll(".rr-btn-primary");
  buttons.forEach(button => {
    const textEl = button.querySelector(".text");

    if (!textEl) return;

    const hasIcon = button.querySelector(".left-icon") || button.querySelector("i");
    if (hasIcon) {
      button.classList.add("has-icon");
    }

    const text = textEl.textContent;
    textEl.innerHTML = "";
    text.split("").forEach((char, index) => {
      const span = document.createElement("span");
      span.innerHTML = char === ' ' ? '&nbsp;' : char;
      const delay = (text.length - index) * 0.05;
      span.style.transitionDelay = `${delay}s`;
      textEl.appendChild(span);
    });

    button.addEventListener("mouseenter", () => {
      const spans = textEl.querySelectorAll("span");
      spans.forEach(span => {
        span.classList.remove("animate");
        void span.offsetWidth;
        span.classList.add("animate");
      });
    });
  });

})(jQuery);


