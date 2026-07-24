(() => {
  "use strict";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const reveals = document.querySelectorAll(".reveal");

  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    reveals.forEach((element) => element.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver((entries, revealObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -6%" });

    reveals.forEach((element) => observer.observe(element));
  }

  document.querySelector("#focus-game")?.addEventListener("click", () => {
    document.querySelector("#game")?.scrollIntoView({
      behavior: reducedMotion.matches ? "auto" : "smooth",
      block: "center"
    });
  });

  const year = document.querySelector("#current-year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
