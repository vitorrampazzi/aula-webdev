// console.log('hello world')

const titulo = document.querySelector('h1')
const div = document.querySelector('#container')
const img = document.querySelector('img')



img.setAttribute('src', './images/avatar.avif')
img.setAttribute('width', '200px')
img.setAttribute('alt', 'profile')
titulo.textContent = 'novo titulo'
div.innerHTML = '<p>novo paragrafo <b>html</b></p>'

const caixa = document.querySelector('.box')
const botao = document.getElementById('meuBotao')

botao.addEventListener('click', () => {
    caixa.classList.toggle('oculta')
})

const novoItem = document.createElement('li')
novoItem.textContent = 'novo item'

document.querySelector('ul').appendChild(novoItem)


localStorage.setItem('nome', 'daniel')
localStorage.setItem('nome2', 'pedro')
const nome = localStorage.getItem('nome')
localStorage.removeItem('nome2')
console.log(nome)

// localStorage.clear()

const usuario = {nome: 'daniel', idade: 35}

localStorage.setItem('usuario', JSON.stringify(usuario))

const usuarioRecuperado = localStorage.getItem('usuario')

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

// Função para renderizar lista
function renderizarTarefas() {
  const lista = document.getElementById("lista-tarefas");
  lista.innerHTML = "";
  tarefas.forEach((t, i) => {
    const li = document.createElement("li");
    li.textContent = t;
    lista.appendChild(li);
  });
}

renderizarTarefas();

document.getElementById("form-tarefa").onsubmit = function (e) {
  e.preventDefault();
  const input = document.getElementById("input-tarefa");
  tarefas.push(input.value);
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
  input.value = "";
  renderizarTarefas();
};

document.getElementById("btn-limpar").onclick = function () {
  tarefas = [];
  localStorage.removeItem("tarefas");
  renderizarTarefas();
};