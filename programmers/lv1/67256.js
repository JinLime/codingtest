function solution(numbers, hand) {
    let answer = "";
    let keyPad = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ["*", 0, "#"],
    ];
    let curLeft = "*",
        curRight = "#";

    for (let i = 0; i < numbers.length; i++) {
        let dn = [],
            dl = [],
            dr = [];
        let l = 0,
            r = 0;
        for (let j = 0; j < keyPad.length; j++) {
            for (let k = 0; k < keyPad[0].length; k++) {
                if (keyPad[j][k] === numbers[i]) dn.push(j, k);
                if (keyPad[j][k] === curLeft) dl.push(j, k);
                if (keyPad[j][k] === curRight) dr.push(j, k);
            }
        }

        l = Math.abs(dn[0] - dl[0]) + Math.abs(dn[1] - dl[1]);
        r = Math.abs(dn[0] - dr[0]) + Math.abs(dn[1] - dr[1]);

        if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
            answer = answer.concat("L");
            curLeft = keyPad[dn[0]][dn[1]];
        } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
            answer = answer.concat("R");
            curRight = keyPad[dn[0]][dn[1]];
        } else if (l < r) {
            answer = answer.concat("L");
            curLeft = keyPad[dn[0]][dn[1]];
        } else if (l > r) {
            answer = answer.concat("R");
            curRight = keyPad[dn[0]][dn[1]];
        } else if (l === r && hand === "left") {
            answer = answer.concat("L");
            curLeft = keyPad[dn[0]][dn[1]];
        } else if (l === r && hand === "right") {
            answer = answer.concat("R");
            curRight = keyPad[dn[0]][dn[1]];
        }
    }

    return answer;
}

let numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
let hand = "right";

console.log(solution(numbers, hand));
