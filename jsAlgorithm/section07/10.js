function binarySearch(target, arr) {
    let low = 0;
    let high = arr.length - 1;

    arr.sort((a, b) => a - b);

    while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        let guess = arr[mid];

        if (guess === target) return mid + 1;
        else if (guess > target) high = mid - 1;
        else low = mid + 1;
    }
    return false;
}

console.log(binarySearch(32, [23, 87, 65, 12, 57, 32, 99, 81]));
