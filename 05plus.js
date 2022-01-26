const minNumber = function (arr) {
    // ...[배열] : 전개연산자 arr[0], arr[1] ... 펼쳐짐
    let answer = Math.min(...arr);

    return answer
}

array = [5, 3, 7, 11, 2, 15, 17];

console.log(minNumber(array));