let categorias = document.getElementsByClassName('categorias');
// for (let i in categorias){
//     categorias[i].style.color = 'black';
//     categorias[i].style.background = 'white';
// }
let url_atual = window.location.href;
url_atual = url_atual.split('/')

let identificador = Number (url_atual[(url_atual.length -1)])
//console.log(categorias[identificador-1])
categorias[identificador-1].style.color = 'white';
categorias[identificador-1].style.background = 'black';
console.log(categorias[identificador-1].style.background)