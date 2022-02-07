const middleStr = function(str) {
    let answer = "";
    let middleIndex = Math.floor(str.length/2);

    if (str.length % 2 === 1) {
        answer = str.substring(middleIndex, middleIndex+1);
    } else if (str.length % 2 === 0) {
        answer = str.substring(middleIndex-1,middleIndex+1);
    }

    return answer;
}

str = "good"

console.log(middleStr(str));