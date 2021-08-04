const modalOverlay = document.querySelector(".modal-overlay")
const modal = document.querySelector(".modal")
const cards = document.querySelectorAll(".card")

for (let card of cards) {
    let cardId = card.getAttribute("id")

    card.addEventListener("click", function () {
        window.location.href = `/article/${cardId}`
    })
}