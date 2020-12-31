/** 169. 多数元素
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 *  
 * 示例 1： 
 * 输入：[3,2,3]
 * 输出：3
 * 
 * 示例 2： 
 * 输入：[2,2,1,1,1,2,2]
 * 输出：2
 *  
 * 题解：https://leetcode-cn.com/problems/majority-element/solution/duo-shu-yuan-su-by-leetcode-solution/
 */


/** 平凡解：哈希表
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
var majorityElement = function (nums) {
    let len = nums.length;
    let ret;
    var book = {}
    for (let i = 0; i < len; i++) {
        if (book[nums[i]]) {
            book[nums[i]]++;
        } else {
            book[nums[i]] = 1
        }
    }
    for (key in book) {
        if (book[key] > nums.length / 2) {
            ret = key
        }
    }
    return ret;
};


console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
console.log(majorityElement([-1]))