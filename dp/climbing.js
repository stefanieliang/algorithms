/**
 * #### **题一、爬楼问题（一个维度）：**
有一座高度是**10**级台阶的楼梯，从下往上走，每跨一步只能向上**1**级或者**2**级台阶。要求用程序来求出一共有多少种走法。
 */

// 递归求解
function getClimbingWays1(n) {
    if (n < 1) {
        return 0;
    }
    if (n === 1) {
        return 1
    }
    if (n === 2) {
        return 2
    }
    return getClimbingWays1(n - 1) + getClimbingWays1(n - 2)
}

// 备忘录算法：增加了缓存
function getClimbingWays2(n) {
    let map = new Map();
    if (n < 1) {
        return 0;
    }
    if (n === 1) {
        return 1
    }
    if (n === 2) {
        return 2
    }
    if (map.has(n)) {
        return map.get(n)
    } else {
        let value = getClimbingWays2(n - 1) + getClimbingWays2(n - 2);
        map.set(n, value)
        return value
    }
}

// 动态规划：自底向上计算，可只缓存2个数据
function getClimbingWays3(n) {
    if (n < 1) {
        return 0;
    }
    if (n === 1) {
        return 1
    }
    if (n === 2) {
        return 2
    }

    let a = 1;
    let b = 2;
    let temp = 0;

    for (let i = 3; i <= n; i++) {
        temp = a + b;
        [a, b] = [b, temp]
    }
    return temp;
}