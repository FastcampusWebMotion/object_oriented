
class Box {
    constructor(selector){
        this.el = document.querySelector(selector);  
        this.el.addEventListener('click', ()=>this.changeBg(this.el) );    
    }

    changeBg(selector){
        selector.style.backgroundColor = 'hotpink';
    }
}

new Box('.box1');
new Box('.box2');
new Box('.box3');
