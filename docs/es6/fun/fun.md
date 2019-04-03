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

## 数组分组（bifurcateBy）
::: tip bifurcateBy(根据fu谓词函数判断分组)
 利用 Array.prototype.reduce() 和 Array.prototype.push()
:::

``` js
/**
 * 数组分组
 * @param arr{Array}
 * @param fn{Function}
 * @returns {Array}
 */
const bifurcateBy = (arr, fn) =>
    arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);

```
## chunk - 数组分块（变二维数组）

::: tip bifurcateBy(根据fu谓词函数判断分组)
 利用 Array.from() 和 Array.prototype.slice()
:::
``` js
/**
 * 数组分块
 * @param arr {Array}
 * @param size {Number}
 * @returns {Array}
 */
const ceChunk = (arr, size) =>
    Array.from({length: Math.ceil(arr.length / size)}, (v, i) =>
        arr.slice(i * size, i * size + size)
    );
```
