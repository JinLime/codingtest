function bubbleSort(list) {
    let result = list;
    for (let i = 0; i < list.length-1; i++) {
        for (let j = 0; j < list.length-i-1; j++) {
            if(list[j] > 0 && list[j+1] < 0) {
                [list[j], list[j+1]] = [list[j+1], list[j]];
            }
        }
    }
    return result;
}

let list = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(bubbleSort(list));