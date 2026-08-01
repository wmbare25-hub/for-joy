const button = document.getElementById("open");
const letter = document.getElementById("letter");

button.addEventListener("click", () => {

    letter.style.display = "block";

    letter.animate(
        [
            {opacity:0, transform:"translateY(80px)"},
            {opacity:1, transform:"translateY(0px)"}
        ],
        {
            duration:1000,
            fill:"forwards"
        }
    );

    button.innerHTML = "❤️ Forever ❤️";

    window.scrollTo({
        top: letter.offsetTop,
        behavior:"smooth"
    });

});
