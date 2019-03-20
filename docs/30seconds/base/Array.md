# Array
## all
[[toc]]
::: tip all
   如果提供的谓词函数对集合中的所有元素都返回  true ，则返回  true，否则返回 false 。使用   Array.prototype.every（） 测试集合中的所有元素是否基于  fn  返回  true  。省略第二个参数  fn  ，将布尔值用作默认值。
:::

``` js
const all = (arr, fn = Boolean) => arr.every(fn);

EXAMPLES
all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
```
><font color="#5291F0">MDN 解析 Array.prototype.every() 案例</font>

该 every() 方法测试数组中的所有元素是否都通过了由提供的函数实现的测试。对于空数组，任何情况下调用该方法都会返回 true。

::: tip 语法
  arr.every(callback[, thisArg])</br>
  </br>
  callback <Badge text="用来测试每个元素的函数"/> </br>
  </br>
  thisArg<Badge text="执行 callback 时使用的 this 值。"/>
:::



``` js
function isBelowThreshold(currentValue) {
  return currentValue < 40;
}

var array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true
```


``` js
EXAMPLES
console.log([12, 5, 8, 130, 44].every(x => x >= 10));//false
console.log([12, 54, 18, 130, 44].every(x => x >=10));//true
console.log([].every(x => x));//true
```
><font color="#5291F0">MDN 描述 Array.prototype.every()</font>

every 方法为数组中的每个元素执行一次 callback 函数，直到它找到一个使 callback 返回 false（表示可转换为布尔值 false 的值）的元素。如果发现了一个这样的元素，every 方法将会立即返回 false。否则，callback 为每一个元素返回 true，every 就会返回 true。callback 只会为那些已经被赋值的索引调用。不会为那些被删除或从来没被赋值的索引调用。

callback 被调用时传入三个参数：元素值，元素的索引，原数组。

如果为 every 提供一个 thisArg 参数，则该参数为调用 callback 时的 this 值。如果省略该参数，则 callback 被调用时的 this 值，在非严格模式下为全局对象，在严格模式下传入 undefined。

<font color="red">every 不会改变原数组。</font>

every 遍历的元素范围在第一次调用 callback 之前就已确定了。在调用 every 之后添加到数组中的元素不会被 callback 访问到。如果数组中存在的元素被更改，则他们传入 callback 的值是 every 访问到他们那一刻的值。那些被删除的元素或从来未被赋值的元素将不会被访问到。

every 和数学中的"所有"类似，当所有的元素都符合条件才返回true。另外，空数组也是返回true。(空数组中所有元素都符合给定的条件，注：因为空数组没有元素)。
