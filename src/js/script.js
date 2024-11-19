const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");
const premierItem = document.querySelector(".carousel__item");
const scrollAmount = premierItem.clientWidth;

// Largeur de défilement d’un item
if (carousel) {
    // Scroll au clic sur le bouton précédent
    prevButton.addEventListener("click", (event) => {
        carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    // Scroll au clic sur le bouton suivant
    nextButton.addEventListener("click", (event) => {
        carousel.scrollBy({ left: +scrollAmount, behavior: "smooth" });
    });
}