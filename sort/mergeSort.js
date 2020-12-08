/** 
 * 归并排序
 * 从小到大
 */
function merge(left, right) {
    let result = []
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            /*shift()⽅法⽤于把数组的第⼀个元素从其中删除，并返回第⼀个元素的值。*/
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return result.concat(left).concat(right)
}

function mergeSort(arr) {
    if (arr.length == 1) {
        return arr
    }
    let middle = Math.floor(arr.length / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([1, 8, 4, 9, 2, 10, 0, -1]))