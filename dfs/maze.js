/**
 * 小哼解救小哈。
 * 迷宫由`n`行`m`列的单元格组成（`n` 和 `m` 都小于等于50），每个单元格要么是空地，要么是障碍物。
 * 注意障碍物是不能走的，且不能走到迷宫之外。
 * 你的任务是帮助小哼找到一条从迷宫的**起点**通往小哈所在位置的最短路径。
 */

// 初始化一个5行4列的迷宫，1表示障碍物
let n = 5,
    m = 4;
let map = [
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 1]
]
// 小哈所在的位置
let p = 3,
    q = 2;


// 用来标记迷宫上某一点有没有走过，1表示走过
let book = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]
let min = 999999; // 存储最短路径

let dfs = function (x, y, step) {
    // 下一步是四种走法
    let next = [
        [0, 1], // 向右走
        [1, 0], // 向下走
        [0, -1], // 向左走
        [-1, 0] // 向上走
    ]

    let tx, ty, k;

    // 判断找到小哈，并返回最短路径
    if (x == p && y == q) {
        min = Math.min(step, min)
    }

    // 循环下一步的四种走法
    for (k = 0; k <= 3; k++) {

        // 计算下一点的坐标
        tx = x + next[k][0];
        ty = y + next[k][1];

        // 越界退出
        if (tx < 0 || tx > n - 1 || ty < 0 || ty > m - 1) {
            continue; // !!注意，仅需跳出本次循环即可
        }

        // 判断有效点，即该点不是障碍物 && 未走过
        if (map[tx][ty] == 0 && book[tx][ty] == 0) {
            book[tx][ty] = 1; // 标记该点走过
            dfs(tx, ty, step + 1); // 尝试下一点
            book[tx][ty] = 0; // 取消这个点的标记
        }
    }

}
dfs(0, 0, 0);
console.log("找到小哈需要走的最短路径：：", min)