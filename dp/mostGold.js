/**
 *#### **题二、工人挖矿问题（两个维度）：**
​	有一个国家发现了5座金矿，每座金矿的黄金储量不同，需要参与挖掘的工人数也不同。
参与挖矿工人的总数是10人。每座金矿要么全挖，要么不挖，不能派出一半人挖取一半金矿。
要求用程序求解出，要想得到尽可能多的黄金，应该选择挖取哪几座金矿？
 *
 */

// 排列组合
function getMostGold1() {}

// 简单递归
function getMostGold2() {}

// 动态规划
function getMostGold3(n, w) {
    // n 金矿, w 工人

    // g[] 金矿的含金量, p[] 挖金矿所需工人数
    let g = [400, 500, 200, 300, 350];
    let p = [5, 5, 3, 4, 3];

    let preResults = [];
    let results = [];

    // 填充边界格子的值
    for (let i = 0; i <= w; i++) {
        if (i < p[0]) {
            preResults[i] = 0;
        } else {
            preResults[i] = g[0];
        }
    }

    // 填充其余格子的值，外层循环是金矿数量，内层循环的工人数
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= w; j++) {
            if (j < p[i]) {
                results[j] = preResults[j];
            } else {
                results[j] = Math.max(preResults[j], preResults[j - p[i]] + g[i])
            }
        }
        // 注意此处，深度赋值
        preResults = [].concat(results);
    }
    return results[w];
}

getMostGold3(5, 10)