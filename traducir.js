const textarea = document.querySelector('.textarea');
const btn = document.querySelector('.play');
const inject = document.querySelector('.textoT');
const volver = document.querySelector('.volver');

volver.addEventListener('click', ()=>{
    window.location.reload();
});
btn.addEventListener('click', trasladar);

function trasladar(){
    let text = textarea.value;
    inject.innerHTML = `${text}`;
    inject.style.background = 'darkviolet';
    inject.style.color = 'white';
}