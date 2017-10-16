// Console Adicionado para checar o link da página com o HTML
console.log(`Working`);

// Typos: document e nome da variáveis
const modalH5 = document.querySelector(".modal-title");
const modalDiv = document.querySelector(".modal-body");


// // Sinal de == modificado para =
// 1 = se lê atribui
// 2 == é o operador que checa por igualdade
function mudarBoostrap() {
  modalH5.innerHTML = "Boostrap";
  modalDiv.innerHTML = "Neste curso conheceremos o Bootstrap, um framework para desenvolvimento web front-end (HTML, CSS e JavaScript) que adiciona às páginas recursos de responsividade, diversos componentes de interface e estilos leves e modernos. O Bootstrap é atualmente o principal framework front-end (HTML, CSS e JavaScript) para desenvolvimento web responsivo. Além de um poderoso sistema de grid, que facilita a criação de páginas que se adequam aos mais diversos tamanhos de tela, o Bootstrap conta, ainda, com vários componentes de uso comum em aplicações web, como botões, menus, tabelas, etc. Tudo isso é alinhado a um conjunto de estilos visuais elegante e moderno, que reduz a necessidade de escrita de código CSS em boa parte das situações.";
}

function mudarNodejs() {
  modalH5.innerHTML = "mudou nodejs";
  modalDiv.innerHTML = "testo sobre nodejs";
}

function mudarSass() {
  modalH5.innerHTML = "mudousass";
  modalDiv.innerHTML = "texto sobre sass";
}
