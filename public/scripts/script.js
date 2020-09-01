const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener("click", () => {
        const curseId = card.getAttribute("id");
        console.log(curseId);
        window.location.href = `/courses/${curseId}`;
    });
});