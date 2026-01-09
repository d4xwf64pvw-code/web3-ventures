let currentStep = 0;
const steps = document.querySelectorAll(".step");

function showStep(index) {
  steps.forEach(step => step.classList.remove("active"));
  steps[index].classList.add("active");
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Hide signup
  document.getElementById("signupForm").style.display = "none";

  // Show loading
  document.getElementById("loadingScreen").style.display = "flex";

  // Fake loading before dashboard
  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 3000);
});
