const container = document.querySelector("#game-container");
for(i = 0; i < 16*16; ++i){
        const block = document.createElement("div");
        block.classList.add("square");
        block.addEventListener("mouseenter", () => {
            block.classList.toggle("sketch");
          });
        block.textContent = i;
        container.appendChild(block);   
}



