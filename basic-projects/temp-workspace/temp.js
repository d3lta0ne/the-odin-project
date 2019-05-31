const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const pItem = document.createElement("p");
pItem.style.color = "red";
pItem.textContent = "Hey I'm red!";

const h3Item = document.createElement("h3");
h3Item.style.color = "blue";
h3Item.textContent = "I'm a blue h3!";

container.appendChild(content);
container.appendChild(pItem);
container.appendChild(h3Item);


const divItem = document.createElement('div');
divItem.style.backgroundColor = "pink";
divItem.style.border = "5px black dashed";

const h1Item = document.createElement("h1");
h1Item.textContent = "I am in a div";

const p2Item = document.createElement("p");
p2Item.textContent = "ME TOO!";

divItem.appendChild(h1Item);
divItem.appendChild(p2Item);

container.appendChild(divItem);
