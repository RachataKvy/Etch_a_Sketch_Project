// 16x16 grid square divs
const container = document.querySelector("#container");
const btn = document.querySelector("#reset-btn");

function createGrid(size) {
    // Cleat the existing grid
    container.innerHTML = '';
    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("square");

        // Dynamic width/height
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;

        // Etch Style
        div.addEventListener("mouseenter", () => {

            // Rainbow color
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            div.style.backgroundColor = "#" + randomColor;
        })

        container.appendChild(div);
    }
}

btn.addEventListener("click", () => {
    let userSize = prompt("How many square per side? (Max 100)");

    userSize = parseInt(userSize);

    if (isNaN(userSize) || userSize < 1 || userSize > 100) {
        alert("Please enter a number between 1 and 100");
    } else {
        createGrid(userSize);
    }
});

// Create the grid (Initial)
createGrid(16);


