const cards = document.querySelectorAll(".product-card");

cards.forEach(card => {
    card.style.opacity = 0;
});

window.addEventListener("scroll", () =>{
    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if(position < screenHeight - 100){
            card.style.opacity = 1;
            card.style.transition = "opacity 1s ease";
        }
    });
});

//SCROLL

const elements = document.querySelectorAll(".product-card, .about-text, .about-image");

elements.forEach(el => {
    el.classList.add("fade-in");
});

function checkScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if(elementTop < triggerBottom){
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", checkScroll);

checkScroll();