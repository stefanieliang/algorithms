/** 
 * 冒泡排序
 * 从小到大
 */

let swap = function (arr, from, to) {
    [arr[from], arr[to]] = [arr[to], arr[from]]
}

let judge = function (arr, a, b) {
    return arr[a] > arr[b]
}

let bubbleSort = arr => {
    let len = arr.length; //循环优化
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (judge(arr, j, j + 1)) { // 相邻元素两两对比
                swap(arr, j, j + 1) // 元素交换
            }
        }
    }
    return arr;
}

console.log(bubbleSort([1, 8, 4, 9, 2, 10, 0, -1]))