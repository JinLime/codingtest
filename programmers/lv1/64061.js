function solution(board, moves) {
    let answer = 0;
    let basket = [];
    let p1 = 0,
        p2 = 1,
        i = 0;

    for (let x of moves) {
        while (i < board.length) {
            if (board[i][x - 1] !== 0) {
                basket.push(board[i][x - 1]);
                board[i][x - 1] = 0;
                break;
            }
            i++;
        }
        i = 0;
    }

    while (p2 < basket.length) {
        if (basket[p1] === basket[p2]) {
            answer += 2;
            basket.splice(p1, 2);
            (p1 = 0), (p2 = 1);
        } else {
            (p1 += 1), (p2 += 1);
        }
    }

    return answer;
}

let board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board, moves));
