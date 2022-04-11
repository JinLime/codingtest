function recursiveFunction(n) {
    if (n === 0) return;
    else {
        recursiveFunction(n - 1);
        console.log(n);
    }
}

recursiveFunction(3);
