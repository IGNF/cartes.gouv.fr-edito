let setCardsView = function() {
    
    let secondRowCards = document.getElementsByName("second-row-cards");

    for(let i = 0; i < secondRowCards.length; i++) {
        secondRowCards[i].classList.toggle("hidden");
    }

    let btn = document.getElementById("fr-button-:r29:");

    if(btn.classList.contains("fr-icon-add-line")) {
        btn.classList.remove("fr-icon-add-line");
        btn.classList.add("fr-icon-subtract-line");

        btn.innerText = "Afficher moins";
    } else {
        btn.classList.remove("fr-icon-subtract-line");
        btn.classList.add("fr-icon-add-line");

        btn.innerText = "Afficher plus";
    }
};