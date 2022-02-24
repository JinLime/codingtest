function bubbleSort(list) {
    let unsortedIndex = list.length - 1;
    let sorted = false;

    while (!sorted) {
        let swap;
        sorted = true;
        for (let i = 0; i < unsortedIndex; i++) {
            if (list[i] > list[i + 1]) {
                swap = list[i];
                list[i] = list[i + 1];
                list[i + 1] = swap;
                sorted = false;
            }
        }
        unsortedIndex -= 1;
    }

    return list;
}
let list = [65, 55, 45, 1, 35, 25, 10, 15];
console.log(bubbleSort(list));
