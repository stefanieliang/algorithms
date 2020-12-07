/** 
 * 选择排序
 * 从小到大
 */

const data = [1, 8, 4, 9, 2, 10, 0, -1]

let swap = function (arr, from, to) {
    [arr[from], arr[to]] = [arr[to], arr[from]]
}

let judge = function (arr, a, b) {
    return arr[a] > arr[b]
}

let selectionSort = arr => {
    let len = arr.length; //循环优化
    let minIndex;
    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (judge(arr, minIndex, j)) { // 寻找最小的数
                minIndex = j; // 将最小数的索引保存
            }
        }
        swap(arr, minIndex, i)
    }
    return arr;
}

console.log(selectionSort(data))