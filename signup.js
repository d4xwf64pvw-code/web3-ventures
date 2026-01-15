const steps = document.querySelectorAll(".step");
const nextBtns = document.querySelectorAll(".next-btn");
const prevBtns = document.querySelectorAll(".prev-btn");

let currentStep = 0;

function showStep(index) {
  steps.forEach(step => step.classList.remove("active"));
  steps[index].classList.add("active");
}

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  });
});

prevBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });
});

showStep(currentStep);   
const createAccountBtn = document.getElementById("createAccountBtn");

if (createAccountBtn) {
  createAccountBtn.addEventListener("click", () => {
    // Show loading screen
    document.body.innerHTML = `
      <div style="
        height:100vh;
        display:flex;
        align-items:center;
        justify-content:center;
        background:#0b3d2e;
        color:white;
        font-size:20px;
      ">
        Please hold on, your account is being created...
      </div>
    `;

    // Fake loading then redirect
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 3000);
  });
}
