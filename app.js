gsap.to("#image",{
    scrollTrigger : {
        scrub:0.5,
    },
    x: 1500,
    y:700
})



const card = document.querySelector(".card__inner");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});