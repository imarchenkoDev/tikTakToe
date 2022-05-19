const modalResult = document.getElementById('modalResultWrapper');
const btnClose = document.getElementById('btn-close');
const modalWindow = document.getElementById('modal - window');
const content = document.getElementById('content');
let result = '';
const check = () => {
    const boxes = document.getElementsByClassName('cell');
    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2],
    ];
    for (i = 0; i < arr.length; i++) {
        if (
            boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X'
        ) {
            result = 'крестики';
            prepareResult(result);
        } else if (
            boxes[arr[i][0]].innerHTML == 'O' && boxes[arr[i][1]].innerHTML == 'O' && boxes[arr[i][2]].innerHTML == 'O'
        ) {
            result = 'нолики';
            prepareResult(result);
        } else if (step == 9
        ) {
            result = 'ни те ни другие';
            prepareResult(result);
        }
    }  
}

const prepareResult = winner => {
    content.innerHTML = (`Выиграли ${winner}!`);
    modalResult.style.display = "block";
}
const closeModalWindow = () => {
    modalResult.style.display = "none";
    location.reload();
}
btnClose.addEventListener('click', closeModalWindow);