# Array

## 数组去重（unique）
::: tip unique
 利用 Array.prototype.reduce() 和 Array.prototype.push()
:::

``` js
/**
 * 数组去重
 * @param arr {Array}
 * @param initArry {Array}
 * @returns {Array}
 */
let unique = (arr,initArry = [])=>
    arr
        .sort()
        .reduce((init, current) =>
           (init.length === 0 || init[init.length - 1] !== current ? init.push(current): init, init),initArry)
```
