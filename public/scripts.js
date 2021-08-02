const modalOverlay = document.querySelector(".modal-overlay")
const modal = document.querySelector(".modal")
const cards = document.querySelectorAll(".card")

for (let card of cards) {
    let cardId = card.getAttribute("id")

    card.addEventListener("click", function () {
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = `https://blog.rocketseat.com.br/${cardId}/`
    })
}

document.querySelector(".close").addEventListener("click", function () {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
    
    if (modal.classList.contains("open-max")) {
        modal.classList.remove("open-max")
    }
})

document.querySelector(".max").addEventListener("click", function () {
    if (modal.classList.contains("open-max")){
        modal.classList.remove("open-max")
    }
    else {
        modal.classList.add("open-max")
    }
})