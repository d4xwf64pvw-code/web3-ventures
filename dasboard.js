document.addEventListener("DOMContentLoaded", () => {

  function animateCrypto(id, min, max, speed) {
    const el = document.getElementById(id);
    if (!el) return;

    let value = Math.floor(Math.random() * (max - min)) + min;

    setInterval(() => {
      const change = Math.floor(Math.random() * 50) - 20;
      value = Math.max(0, value + change);
      el.textContent = value.toLocaleString();
    }, speed);
  }

  animateCrypto("ethereum", 1200, 60000, 1200);
  animateCrypto("solana", 300, 25000, 1500);
  animateCrypto("polygon", 150, 18000, 1700);
  animateCrypto("bitcoin", 5000, 120000, 1000);

});
