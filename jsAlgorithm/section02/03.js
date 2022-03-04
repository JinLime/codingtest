const rock_paer_scissors = function (arr_A, arr_B) {
    for (let i = 0; i < arr_A.length; i++) {
        if ((arr_A[i] - arr_B[i] === 1) | (arr_A[i] - arr_B[i] === -2)) console.log("A");
        else if ((arr_A[i] - arr_B[i] === -1) | (arr_A[i] - arr_B[i] === 2)) console.log("B");
        else console.log("D");
    }
};

let arr_A = [2, 3, 3, 1, 3],
    arr_B = [1, 1, 2, 2, 3];

rock_paer_scissors(arr_A, arr_B);
