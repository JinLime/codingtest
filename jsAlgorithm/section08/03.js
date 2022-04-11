function binaryTree(n) {
    if (n > 7) return;
    else {
        // console.log(n); // 전위 순회
        binaryTree(n * 2);
        // console.log(n); // 중위 순회
        binaryTree(n * 2 + 1);
        // console.log(n); // 후위 순회
    }
}

binaryTree(1);
