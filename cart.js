// CARICA CARRELLO
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// AGGIUNGE PRODOTTO
function addToCart(product) {
  const item = cart.find(p => p.id === product.id);

  if (item) {
    item.quantita += 1;
  } else {
    cart.push({ ...product, quantita: 1 });
  }

  saveCart();
}

// SALVA
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartIcon();
}

// CLICK SUI BOTTONI
document.querySelectorAll(".btn-add-cart").forEach(btn => {
  btn.addEventListener("click", () => {
    addToCart({
      id: btn.dataset.id,
      nome: btn.dataset.nome,
      prezzo: parseFloat(btn.dataset.prezzo),
      img: btn.dataset.img
    });
  });
});

// ICONA CARRELLO
function updateCartIcon() {
  const count = cart.reduce((tot, p) => tot + p.quantita, 0);
  const icon = document.querySelector(".cart");

  if (icon) icon.textContent = `🛒 ${count}`;
}

updateCartIcon();
