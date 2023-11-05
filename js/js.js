const searchProductsInput = document.querySelector("#searchProducts");
const products = document.querySelectorAll(".product");
const priceInput = document.querySelector("#priceInput");
const priceBtn = document.querySelector("#priceBtn");
const categoryBtn = document.querySelectorAll(".categoryBtn");

function searchProducts(e) {
  const searchName = e.target.value.toLowerCase().trim();

  products.forEach((div) => {
    const productName = div.children[1].innerText.toLowerCase();

    productName.includes(searchName)
      ? (div.style.display = "block")
      : (div.style.display = "none");
  });
}

searchProductsInput.addEventListener("keyup", searchProducts);

// ========== Search Products Name End ==========
function changeClass(filter) {
  categoryBtn.forEach((btn) => {
    btn.dataset.filter === filter
      ? btn.classList.add("selected")
      : btn.classList.remove("selected");
  });
}

function categoryHandler(e) {
  const filter = e.target.dataset.filter;
  changeClass(filter);
  products.forEach((div) => {
    const category = div.dataset.category;
    if (filter === "all") {
      div.style.display = "block";
    } else {
      if (filter === category) {
        div.style.display = "block";
      } else {
        div.style.display = "none";
      }
    }
  });
}

categoryBtn.forEach((btn) => {
  btn.addEventListener("click", categoryHandler);
});
searchProductsInput.addEventListener("click", categoryHandler);
// ========== Category Products End ==========

function searchPriceHandler() {
  const searchPrice = +priceInput.value;

  products.forEach((div) => {
    const productPrice = +div.children[2].innerText.split(" ")[1];

    if (!searchPrice) {
      div.style.display = "block";
    } else {
      searchPrice === productPrice
        ? (div.style.display = "block")
        : (div.style.display = "none");
    }
  });
}

priceBtn.addEventListener("click", searchPriceHandler);

// ========== Search Products Name End ==========
