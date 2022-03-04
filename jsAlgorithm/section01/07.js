const carViolation = function (day ,carArray) {
    let answer = 0;
    for (let i = 0; i < carArray.length; i++) {
        if ((carArray[i] - day) % 10 === 0) answer += 1;
    }
    return answer
}

let carArray = [25, 23, 11, 47, 53, 17, 33];

console.log(carViolation(3, carArray));