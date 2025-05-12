document.getElementById("btnToggleSkills").addEventListener("click", function () {
  const section = document.getElementById("skills");
  if (section.style.display === "none") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
});

document.getElementById("btnChangeColor").addEventListener("click", function () {
  const colors = ["#ffffff", "#f2f2f2", "#e6f9f0"];
  const body = document.body;
  const current = body.style.backgroundColor;
  const next = colors[(colors.indexOf(current) + 1) % colors.length];
  body.style.backgroundColor = next;
});
 function toggleMenu() {
      document.getElementById("navLinks").classList.toggle("show");
    }