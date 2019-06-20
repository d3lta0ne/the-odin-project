const container = document.querySelector("#game-container");
for(i = 0; i < 2*2; ++i){
        const block = document.createElement("div");
        block.classList.add("square");
        block.addEventListener("mouseenter", () => {
            block.classList.toggle("sketch");
          });
        // block.textContent = i;
        container.appendChild(block);   
}



var btn = document.querySelector('#reset');
btn.addEventListener('click', () => {
  alert("Hello--World");
});

btn = document.querySelector('#color-change');
btn.addEventListener('click', () => {
    alert("Hello--World");
  });