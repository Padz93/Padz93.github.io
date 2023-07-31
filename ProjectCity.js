const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "LONDON",
    price: 299,
  },
  {
    id: 2,
    title: "PARIS",
    price: 399,
  },
  {
    id: 3,
    title: "BARCELONA",
    price: 249,
  },
  {
    id: 4,
    title: "ROME",
    price: 349,
  },
  {
    id: 5,
    title: "AMSTERDAM",
    price: 199,
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {

    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    choosenProduct = products[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "€" + choosenProduct.price;
  });
});

function toggleCheckout() {
  const checkoutSection = document.getElementById("checkout");
  const closeButton = document.querySelector(".close-button");

  if (checkoutSection.style.display === "none") {
    checkoutSection.style.display = "block";
    closeButton.style.display = "block";
  } else {
    checkoutSection.style.display = "none";
    closeButton.style.display = "none";
  }
}

function scrollToNavBar() {
  const navbar = document.getElementById("nav");
  navbar.scrollIntoView({ behavior: "smooth" });
}

function submitForm(event) {
  event.preventDefault();
  const emailInput = document.getElementById("email").value;

  const popupBox = document.getElementById("popupBox");
  popupBox.style.display = "block";
}

function closePopup() {
  const popupBox = document.getElementById("popupBox");
  popupBox.style.display = "none";


}