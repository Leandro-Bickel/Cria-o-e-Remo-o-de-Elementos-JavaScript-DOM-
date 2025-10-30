const container = document.getElementById("container");

// 1️⃣ Crie uma <div> e adicione um parágrafo dentro dela
const div1 = document.createElement("div");
const p1 = document.createElement("p");
p1.textContent = "Elemento criado dinamicamente com JavaScript.";
div1.appendChild(p1);
container.appendChild(div1);

// 2️⃣ Três parágrafos diferentes dentro de uma <div>
const div2 = document.createElement("div");
for (let i = 1; i <= 3; i++) {
    const p = document.createElement("p");
    p.textContent = `Parágrafo ${i} criado dinamicamente.`;
    div2.appendChild(p);
}
container.appendChild(div2);

// 3️⃣ Crie uma lista (<ul>) e adicione três itens (<li>)
const ul1 = document.createElement("ul");
for (let i = 1; i <= 3; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${i}`;
    ul1.appendChild(li);
}
container.appendChild(ul1);

// 4️⃣ Adicione cinco frutas diferentes
const ul2 = document.createElement("ul");
const frutas = ["Maçã", "Banana", "Uva", "Laranja", "Morango"];
for (let fruta of frutas) {
    const li = document.createElement("li");
    li.textContent = fruta;
    ul2.appendChild(li);
}
container.appendChild(ul2);

// 5️⃣ Dois parágrafos e remove o segundo
const div3 = document.createElement("div");
const p5a = document.createElement("p");
p5a.textContent = "Primeiro parágrafo.";
const p5b = document.createElement("p");
p5b.textContent = "Segundo parágrafo (será removido).";
div3.appendChild(p5a);
div3.appendChild(p5b);
container.appendChild(div3);
div3.removeChild(p5b);

// 6️⃣ Três parágrafos e remove o primeiro
const div4 = document.createElement("div");
for (let i = 1; i <= 3; i++) {
    const p = document.createElement("p");
    p.textContent = `Parágrafo ${i}`;
    div4.appendChild(p);
}
container.appendChild(div4);
div4.removeChild(div4.firstElementChild);

// 7️⃣ Lista com quatro itens e remove o último
const ul3 = document.createElement("ul");
for (let i = 1; i <= 4; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${i}`;
    ul3.appendChild(li);
}
container.appendChild(ul3);
ul3.removeChild(ul3.lastElementChild);

// 8️⃣ Três elementos de texto e remove o do meio
const div5 = document.createElement("div");
for (let i = 1; i <= 3; i++) {
    const p = document.createElement("p");
    p.textContent = `Elemento ${i}`;
    div5.appendChild(p);
}
container.appendChild(div5);
div5.removeChild(div5.children[1]);

// 9️⃣ Crie cinco blocos coloridos e remova todos com um laço
const div6 = document.createElement("div");
const cores = ["red", "blue", "green", "purple", "orange"];
for (let i = 0; i < cores.length; i++) {
    const bloco = document.createElement("div");
    bloco.classList.add("bloco");
    bloco.style.backgroundColor = cores[i];
    bloco.textContent = `Bloco ${i + 1}`;
    div6.appendChild(bloco);
}
container.appendChild(div6);

// Remover todos os blocos com um while
while (div6.firstChild) {
    div6.removeChild(div6.firstChild);
}

// 🔟 Crie uma div com título e parágrafo, remova apenas o título
const div7 = document.createElement("div");
const titulo = document.createElement("h2");
titulo.textContent = "Título que será removido";
const paragrafo = document.createElement("p");
paragrafo.textContent = "Este parágrafo permanecerá na tela.";
div7.appendChild(titulo);
div7.appendChild(paragrafo);
container.appendChild(div7);
div7.removeChild(titulo);
b