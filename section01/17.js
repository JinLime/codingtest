const removeDuplicatedWord = function(arr) {
    let answer;
    
    answer = arr.filter((v,i) => arr.indexOf(v)===i)
    
    return answer;
}

let arr = ["teacher", "time", "time", "good", "good"];

console.log(removeDuplicatedWord(arr));