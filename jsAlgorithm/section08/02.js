function binaryNumber(n) {
    if (n === 0) {
        return;
    } else {
        binaryNumber(Math.floor(n / 2));
        console.log(n % 2);
    }
}

binaryNumber(11);
