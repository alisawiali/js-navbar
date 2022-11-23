
let btnOpen = document.getElementById('open');
let btnClose = document.getElementById('close');
let container = document.querySelector('.container');


btnClose.onclick = function (){
container.classList.add('heid');
btnClose.classList.add('heid');
btnOpen.classList.remove('heid');
};

btnOpen.onclick = function (){
    this.classList.add('heid');
    btnClose.classList.remove('heid');
    container.classList.remove('heid');
}
