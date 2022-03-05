function mischievousBoy(height) {
    let result = [];
    let sortArr = height.slice();
    sortArr.sort((a,b) => a - b);

    for (let i = 0; i < height.length; i++) {
        if (height[i] !== sortArr[i]) result.push(i+1);
    }

    return result;
}

let list = [120, 125, 152, 130, 135, 135, 143, 127, 160];

console.log(mischievousBoy(list));
