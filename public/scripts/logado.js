var bt = document.querySelector("#bt");
var perfil = document.getElementsByClassName('menus')[1]
var menu = document.getElementsByClassName('menus')[0];
var overvil = document.getElementsByClassName('overvil')[0]
var overvil2 = document.getElementsByClassName('overvil2')[0]

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
        overvil2.style.display = 'none';
        overvil.style.display = 'flex';
    }
});
menu.addEventListener('click', function (){
    if (overvil2.style.display == 'flex'){
        overvil2.style.display = 'none';
    }else {
        overvil.style.display = 'none';
        overvil2.style.display = 'flex';
    }
})