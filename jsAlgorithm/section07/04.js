function insertionSort(list) {
    let result = list;
    for (let i = 0; i < list.length; i++) {
        let tmp = list[i];
        let j;
        for (j = i-1; j >= 0; j--) {
            if (list[j] > tmp) list[j+1] = list[j];
            else break;
        }
        list[j+1] = tmp;
    }
    return result;
}

let list = [11, 7, 5, 6, 10, 9];
console.log(insertSort(list));