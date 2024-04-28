let container = document.querySelector("#container");


for (let j = 0; j < 900; j++){
    let div = document.createElement("div");
    div.classList.add("pixels");
    container.appendChild(div);
}

const pixels = document.querySelectorAll(".pixels");

pixels.forEach((pixel) => {
    pixel.addEventListener("mouseenter", () => {
        pixel.style.backgroundColor = "black"
    });
});

pixels.forEach((pixel) => {
    pixel.addEventListener("click", () => {
        pixel.style.backgroundColor = "azure"
    });
});