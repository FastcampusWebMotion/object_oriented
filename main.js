const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');

box1.addEventListener('click', e=> changeBg(box1))

box2.addEventListener('click', e=> changeBg(box2))

box3.addEventListener('click', e=> changeBg(box3))

function changeBg(selector){
    selector.style.backgroundColor = 'hotpink';
}