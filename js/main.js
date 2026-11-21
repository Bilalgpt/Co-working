/* Hustle Hub — interactions */
(function () {
  "use strict";

  /* nav background on scroll */
  var nav = document.getElementById("nav");
  function onScroll() {
    if (window.scrollY > 24) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* mobile menu */
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("mobileMenu");
  function closeMenu() {
    toggle.classList.remove("open");
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
  }
  toggle.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-hidden", String(!open));
  });
  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", closeMenu);
  });

  /* scroll reveal — add .in to section blocks, reveal on view */
  var revealEls = document.querySelectorAll(
    ".section__head, .card, .amenity, .plan, .quote, .ph, .book__form, .location__info"
  );
  revealEls.forEach(function (el) { el.classList.add("in"); });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("show");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("show"); });
  }

  /* tour form — demo handler.
     To make it really send, connect a free form service (see README):
     set FORM_ENDPOINT to your Formspree/Web3Forms URL. */
  var FORM_ENDPOINT = ""; // e.g. "https://formspree.io/f/xxxxxx"
  var form = document.getElementById("tourForm");
  var success = document.getElementById("formSuccess");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }

    if (FORM_ENDPOINT) {
      var data = new FormData(form);
      fetch(FORM_ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } })
        .then(function () { showSuccess(); })
        .catch(function () { fallbackMail(); });
    } else {
      // no backend connected yet → open WhatsApp / email with the details
      fallbackMail();
    }
  });

  function showSuccess() {
    success.hidden = false;
    form.reset();
  }

  function fallbackMail() {
    var name = encodeURIComponent(document.getElementById("name").value || "");
    var phone = encodeURIComponent(document.getElementById("phone").value || "");
    var plan = encodeURIComponent(document.getElementById("plan").value || "");
    var msg = encodeURIComponent(document.getElementById("msg").value || "");
    var text =
      "Hi Hustle Hub! I'd like to book a tour.%0A" +
      "Name: " + name + "%0APhone: " + phone + "%0AInterested in: " + plan + "%0AWhen: " + msg;
    // open WhatsApp chat prefilled (update the number in index.html too)
    window.open("https://wa.me/923001234567?text=" + text, "_blank");
    showSuccess();
  }

  /* year in footer */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
