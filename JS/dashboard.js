document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".stat-card strong").forEach((value) => {
    const raw = value.textContent.replace(/,/g, "");
    const target = Number.parseFloat(raw);
    if (Number.isNaN(target)) return;

    let frame = 0;
    const suffix = value.textContent.includes("%") ? "%" : "";
    const tick = () => {
      frame += 1;
      const next = target * Math.min(frame / 24, 1);
      value.textContent = target < 10
        ? next.toFixed(3)
        : Math.round(next).toLocaleString("ko-KR") + suffix;
      if (frame < 24) requestAnimationFrame(tick);
    };
    tick();
  });

  const routes = [
    "3. RAG System.html",
    "4. Image Labeling.html",
    "5. Report.html",
    "2. Natural Language Query.html"
  ];

  document.querySelectorAll(".quick-grid button").forEach((button, index) => {
    button.addEventListener("click", () => {
      window.location.href = routes[index];
    });
  });

  document.querySelector(".hero-row .primary")?.addEventListener("click", () => {
    window.location.href = "2. Natural Language Query.html";
  });
});
