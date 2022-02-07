const longString = function (arr) {
    let answer = "";
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > answer.length) answer = arr[i];
    }

    return answer;
}

let arr = ["teacher", "time", "student", "beautiful", "good"];

console.log(longString(arr));