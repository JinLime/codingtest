function bubbleSort(list) {
    let result = list;
    for (let i = 0; i < list.length-1; i++) {
        for (let j = 0; j < list.length-i-1; j++) {
            if (list[j] > list[j+1]) {
                [list[j], list[j+1]] = [list[j+1], list[j]];
            }
        }
    }
    return result;
}

let list = [13, 5, 11, 7, 23, 15];
console.log(bubbleSort(list));