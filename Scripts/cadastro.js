var bt = document.querySelector("#bt");
var perfil = document.getElementsByClassName('menus')[0];
var overvil = document.getElementsByClassName('overvil')[0];

bt.addEventListener('click', function () {
    var lupa = document.querySelector("#lupa");
    lupa.classList.add('animacao');
    setTimeout(function(){
        lupa.classList.remove('animacao');
    },200)
    
})

perfil.addEventListener('click', function (){
    if (overvil.style.display == 'flex') {
        overvil.style.display = 'none';
    }else {
        overvil.style.display = 'flex';
    }
})
/*Fim do config padrao*/


