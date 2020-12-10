/** 
 * 桶排序
 * 从小到大
 */
function bucketSort(arr, bucketSize) {
    if (arr.length === 0) {
        return arr;
    }

    var i;
    var minValue = arr[0];
    var maxValue = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i]; // 输入数据的最小值
        } else if (arr[i] > maxValue) {
            maxValue = arr[i]; // 输入数据的最大值
        }
    }

    //桶的初始化
    var DEFAULT_BUCKET_SIZE = 5; // 设置桶的默认数量为5
    bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    var buckets = new Array(bucketCount);
    for (i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    //利用映射函数将数据分配到各个桶中
    for (i = 0; i < arr.length; i++) {
        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
    }

    arr.length = 0;
    for (i = 0; i < buckets.length; i++) {
        insertionSort(buckets[i]); // 对每个桶进行排序，这里使用了插入排序
        for (var j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j]);
        }
    }

    return arr;
}

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

console.log(bucketSort([1, 8, 4, 9, 2, 10, 0, -1]))