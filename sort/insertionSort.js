/** 
 * 插入排序
 * 从小到大
 */
let swap = function (arr, from, to) {
    [arr[from], arr[to]] = [arr[to], arr[from]]
}

let judge = function (arr, a, b) {
    return arr[a] > arr[b]
}

let insertionSort = arr => {
    let len = arr.length; //循环优化
    for (let i = 1; i < len; i++) {
        for (let j = i; j > 0; j--) {
            if (judge(arr, j - 1, j)) {
                swap(arr, j - 1, j)
            }
        }
    }
    return arr;
}

console.log(insertionSort([1, 8, 4, 9, 2, 10, 0, -1]))