/** 
 * 基数排序
 * 从小到大
 */


// LSD Radix Sort
// helper function to get the last nth digit of a number 
var getDigit = function (num, nth) {
    // get last nth digit of a number 
    var ret = 0;
    while (nth--) {
        ret = num % 10;
        num = Math.floor((num - ret) / 10)
    }
    return ret
}

// radixSort
function radixSort(arr) {
    var max = Math.floor(Math.log10(Math.max.apply(Math, arr))),
        // get the length of digits of the max value in this array 
        digitBuckets = [],
        idx = 0;
    for (var i = 0; i < max + 1; i++) {
        // rebuild the digit buckets according to this digit 
        digitBuckets = []
        for (var j = 0; j < arr.length; j++) {
            var digit = getDigit(arr[j], i + 1);
            digitBuckets[digit] = digitBuckets[digit] || [];
            digitBuckets[digit].push(arr[j]);
        }
        // rebuild the arr according to this digit
        idx = 0
        for (var t = 0; t < digitBuckets.length; t++) {
            if (digitBuckets[t] && digitBuckets[t].length > 0) {
                for (j = 0; j < digitBuckets[t].length; j++) {
                    arr[idx++] = digitBuckets[t][j];
                }
            }
        }
    }
    return arr
}
console.log(radixSort([1, 8, 4, 9, 2, 10, 0]))