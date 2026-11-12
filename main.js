// Mobile menu, current year. No inline scripts, so the site can run under a strict Content-Security-Policy.
(function () {
  var header = document.querySelector(".site-header");
  var hero = document.querySelector(".hero");
  function updateHeader() {
    if (!header || !hero) return;
    header.classList.toggle("is-scrolled", window.scrollY >= hero.offsetHeight - header.offsetHeight);
  }
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
  window.addEventListener("resize", updateHeader);

  var btn = document.getElementById("menu-btn");
  var nav = document.getElementById("nav-links");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target && e.target.tagName === "A") {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }
  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
})();
