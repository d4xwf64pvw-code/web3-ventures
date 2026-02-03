document.addEventListener("DOMContentLoaded", () => {
  const assets = {
    ethereum: 1230.45,
    solana: 430.10,
    polygon: 98.32,
    bnb: 670.00
  };

  function updatePrices() {
    Object.keys(assets).forEach(asset => {
      // small smooth change up or down
      const change = (Math.random() * 10 - 5);
      assets[asset] += change;

      // prevent negative values
      if (assets[asset] < 1) assets[asset] = 1;

      const el = document.getElementById(asset);
      if (!el) return;

      el.textContent = "$" + assets[asset].toFixed(2);

      // color movement like real wallets
      el.classList.remove("green", "red");
      if (change >= 0) {
        el.classList.add("green");
      } else {
        el.classList.add("red");
      }
    });
  }

  // initial run
  updatePrices();

  // keep updating
  setInterval(updatePrices, 2000);
});
