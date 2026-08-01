const button = document.getElementById("open");
const letter = document.getElementById("letter");

if (letter) {
    letter.style.display = "none";
}

button.addEventListener("click", () => {
    letter.style.display = "block";

    button.innerText = "I Love You ❤️";

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
});
