function selectionSort(list) {
    let result = list;
    for (let i = 0; i < list.length-1; i++) {
        let index = i;
        for (let j = i+1; j < list.length; j++) {
            if (list[j] < list[index]) index = j;
        }
        [list[i], list[index]] = [list[index], list[i]];
    }
    
    return result;
}

let list = [13, 5, 11, 7, 23, 15];
console.log(selectSort(list));