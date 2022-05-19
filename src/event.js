const cells = document.getElementById('0');
let step = 0;
cells.addEventListener('click', function (move) {
    if (move.target.className == 'cell' && move.target.innerHTML == "") {
        step % 2 === 0 ? move.target.innerHTML = "X" : move.target.innerHTML = "O";
        step++;
        check();
    }
});