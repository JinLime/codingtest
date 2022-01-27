const oddsumAndMin = function (arr) {
    let answer, oddArray = [Number.MAX_SAFE_INTEGER];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            if (oddArray[0] > arr[i]) oddArray.unshift(arr[i]);
            else oddArray.push(arr[i]);
        }
    }
    answer = oddArray[0];
    return answer
}

let array = [12, 77, 38, 41, 53, 92, 85];

console.log(oddsumAndMin(array));