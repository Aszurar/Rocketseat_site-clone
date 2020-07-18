
const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");
const modalCards = document.querySelector(".modal");

for (const card of cards) {
    card.addEventListener("click", function () {
        const linkId = card.getAttribute("id");
        modalOverlay.classList.add("active");
        modalCards.classList.add(linkId);
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${linkId}`;
    });
}

document.querySelector(".max-modal").addEventListener("click", function () {
    modalCards.classList.add("maximize");
})
document.querySelector(".min-modal").addEventListener("click", function () {
    modalCards.classList.remove("maximize");
})
document.querySelector(".close-modal").addEventListener("click", function () {
    modalOverlay.classList.remove("active");
    modalCards.classList.remove("maximize");

});



for (const card of cards) {

    const linkId = card.getAttribute("id");
    document.querySelector(".close-modal").addEventListener("click", function () {
        modalCards.classList.remove(linkId);

    });
}
