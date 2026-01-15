// ===============================
// SIGNUP STEP-BY-STEP CONTROLLER
// ===============================

let currentStep = 0;

// Get all step sections
const steps = document.querySelectorAll(".step");

// Buttons
const nextBtn = document.getElementById("nextBtn");
const createAccountBtn = document.getElementById("createAccountBtn");

// Show only one step at a time
function showStep(stepIndex) {
  steps.forEach((step, index) => {
    step.style.display = index === stepIndex ? "block" : "none";
  });

  // Toggle buttons
  if (stepIndex === steps.length - 1) {
    nextBtn.style.display = "none";
    createAccountBtn.style.display = "block";
  } else {
    nextBtn.style.display = "block";
    createAccountBtn.style.display = "none";
  }
}

// Initialize
showStep(currentStep);

// NEXT BUTTON CLICK
if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  });
}

// CREATE ACCOUNT CLICK
if (createAccountBtn) {
  createAccountBtn.addEventListener("click", () => {

    // Collect data (for Firebase later)
    const userData = {
      name: document.getElementById("name")?.value || "",
      email: document.getElementById("email")?.value || "",
      phone: document.getElementById("phone")?.value || "",
      security: document.getElementById("security")?.value || "",
      wallet: document.getElementById("wallet")?.value || ""
    };

    console.log("Signup data:", userData);

    // Redirect to dashboard
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  });
}
