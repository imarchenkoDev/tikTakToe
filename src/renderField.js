let h1 = document.createElement('h1');
h1.id = "XO";
h1.innerHTML = 'Крестики-Нолики';
document.body.append(h1);

let div = document.createElement('div');
    div.className = "field";
    div.id = "0";
    document.body.append(div);

for (let i =0; i<9; i++){
    let div = document.createElement('div');
    div.className = "cell";
    div.id = [1+i];
    document.getElementById(0).append(div);
}
let div1 = document.createElement('div');
div1.id = "modalResultWrapper";
document.body.appendChild(div1);

let div3 = document.createElement('div');
div3.id = "modal-window";
document.getElementById("modalResultWrapper").appendChild(div3);

let div4 = document.createElement('div');
div4.id = "content";
div4.innerHTML = 'content';
document.getElementById('modal-window').appendChild(div4);

let div5 = document.createElement('div');
div5.id = "btn-close";
div5.innerHTML = 'Сыграем еще раз???';
document.getElementById('modal-window').appendChild(div5);

