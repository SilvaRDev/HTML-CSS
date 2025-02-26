let btnBurger = document.querySelector('#burger')
btnBurger.addEventListener('click', clickMenu)

let itens = document.querySelector('#itens')
let menuAberto = false

function clickMenu() {
  if (itens.style.display == 'block') {
    itens.style.display = 'none'
  } else {
    itens.style.display = 'block'
  }
}
