let currentStep = 0;
const steps = document.querySelectorAll(".step");

function nextStep() {
  if (currentStep < steps.length - 1) {
    steps[currentStep].classList.remove("active");
    currentStep++;
    steps[currentStep].classList.add("active");
  }
}

document.getElementById("multiStepForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Account created successfully. Redirecting to dashboard...");
  window.location.href = "dashboard.html";
});
