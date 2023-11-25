const consumibles = document.getElementById('consumibles')
const objetos = document.getElementById('objetos')

let bnt1 = document.getElementById('uno')
let bnt2 = document.getElementById('dos')
let bnt3 = document.getElementById('tres')
let bnt4 = document.getElementById('cuatro')
let cArt = document.getElementById('cArt')

let botones = document.getElementsByClassName('botonesFamilias')
let family2 = document.getElementById('family2')
let artic = document.getElementById('artic')


function escribirFamilias(){
    bnt1.style.display = 'block'
    bnt2.style.display = 'block'
    bnt3.style.display = 'block'
}
function escribirFamilias2(){
    bnt4.style.display = 'block'
}

function cargaArt(){
    let listaArtic = ['COCACOLA', 'PAPAS']
    artic.textContent = listaArtic
}