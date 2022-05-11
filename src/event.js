const cells = document.getElementById('0');
let step = 0;
cells.addEventListener('click', function (move) {
    if (move.target.className = 'cell') {
        step % 2 === 0 ? move.target.innerHTML = "X" : move.target.innerHTML = "O";
        step++;
        check();
    }
});

// const cells = document.getElementById('0');
// var step = 0;
// cells.addEventListener('click', function (move) {
//     if (move.target.className == 'cell') {
//         step++;
//         move.target.innerHTML = (step % 2) ? 'X' : 'O';
//         // move.target.removeEventListener('click', move);
//     }
// })

// function start(move) {
// 	let step = 0;
//     const cells = document.getElementById('0');
// 		cells.addEventListener('click', function move() {
// 			this.innerHTML = ['X', 'O'][i % 2];
// 			this.removeEventListener('click', move);			
// 			step++;
// 		});
// 	}