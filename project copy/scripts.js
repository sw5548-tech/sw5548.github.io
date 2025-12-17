// ============================
// AVAILABILITY TOGGLE (HOME)
// ============================

const checkAvailability = document.getElementById("check-availability");
const availabilityResult = document.getElementById("availability-result");

if (checkAvailability && availabilityResult) {
  function toggleAvailability() {
    if (!availabilityResult.classList.contains("hidden")) {
      availabilityResult.classList.add("hidden");
      return;
    }

    const day = new Date().getDay(); // 0 = Sun, 6 = Sat
    availabilityResult.classList.remove("hidden");

    if (day >= 1 && day <= 5) {
      availabilityResult.textContent = "Available";
      availabilityResult.style.color = "green";
    } else {
      availabilityResult.textContent = "Please leave a message";
      availabilityResult.style.color = "orange";
    }
  }

  checkAvailability.addEventListener("click", toggleAvailability);
  checkAvailability.addEventListener("keydown", e => {
    if (e.key === "Enter") toggleAvailability();
  });
}


// ============================
// BACKGROUND SHADE TOGGLE
// ============================

const body = document.body;
const pageType = body.className;

const backgrounds = {
  home: [
    "linear-gradient(135deg, #bcd7f5, #ccebdc)",
    "linear-gradient(135deg, #a8c7f0, #b6e2cd)",
    "linear-gradient(135deg, #d1e4fa, #e3f5eb)"
  ],
  resume: [
    "linear-gradient(135deg, #f6e6a9, #cde6c4)",
    "linear-gradient(135deg, #f2d98b, #b8dbb0)",
    "linear-gradient(135deg, #fff1c1, #e1f2db)"
  ],
  contact: [
    "linear-gradient(135deg, #f3c6c6, #d7c6e8, #c6d9f3)",
    "linear-gradient(135deg, #eab1b1, #cbb3e3, #b4ccef)",
    "linear-gradient(135deg, #f8dede, #e5d8f2, #d9e6fb)"
  ]
};

let currentIndex = 0;

function changeBackground() {
  if (!backgrounds[pageType]) return;
  currentIndex = (currentIndex + 1) % backgrounds[pageType].length;
  body.style.background = backgrounds[pageType][currentIndex];
}

body.addEventListener("click", event => {
  // Ignore clicks inside interactive elements
  if (
    event.target.closest(
      "a, nav, button, video, audio, img"
    )
  ) return;

  changeBackground();
});
