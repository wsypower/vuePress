# Leetcode之javascript解题
## 1.两数之和
::: tip 题目
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
:::

::: warning 示例:
给定 nums = [2, 7, 11, 15], target = 9</br>
因为 nums[0] + nums[1] = 2 + 7 = 9</br>
所以返回 [0, 1]
:::

><font color="#5291F0">答案</font>

``` js{4}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var arr = [];
    for(var i = 0; i < nums.length-1; i++) {
        for(var j = i+1; j< nums.length; j++) {
            if(nums[i]+nums[j]==target) {
                arr.push(i);
                arr.push(j);
            }
        }
    }
    return arr
};
// 执行用时: 100 ms
```

``` js{4}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) return [map[nums[i]], i];
    else map[target - nums[i]] = i;
  }
};
// 执行用时: 92 ms
```
