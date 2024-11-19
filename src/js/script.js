const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");
const premierItem = document.querySelector(".carousel__item");
//scrollAmount calculé que au chargement de la page donc préférable de rappeller clientWidth à chaque fois
const scrollAmount = premierItem.clientWidth;

// Largeur de défilement d’un item
if (carousel) {
    // Scroll au clic sur le bouton précédent
    prevButton.addEventListener("click", (event) => {
        carousel.scrollBy({ left: -premierItem.clientWidth, behavior: "smooth" });
        if (carousel.scrollLeft <= 0) {
            console.log("reached the end")
        };
    });
    // Scroll au clic sur le bouton suivant
    nextButton.addEventListener("click", (event) => {
        carousel.scrollBy({ left: +premierItem.clientWidth, behavior: "smooth" });
    });
}