function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle("active", i === index);
  });
}

function nextStep() {
  if (currentStep < steps.length - 2) {
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

function createAccount() {
  currentStep++;
  showStep(currentStep);

  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 2000);
}

showStep(currentStep);

// LOGOUT
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    window.location.href = "login.html";
  });
}
