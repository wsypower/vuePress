# Array
[[toc]]
## all - 元素是否都通过了函数的测试*
::: tip all
   如果提供的谓词函数对集合中的所有元素都返回true，则返回true，否则返回 false。使用Array.prototype.every（） 测试集合中的所有元素是否基于fn返回true。省略第二个参数fn，将布尔值用作默认值。
:::

``` js
const all = (arr, fn = Boolean) => arr.every(fn);

EXAMPLES
all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
```

## allEqual - 判断所有元素是否相等*
::: tip allEqual
   检查数组中的所有元素是否相等。使用 Array.prototype.every（） 检查数组中的所有元素是否与第一个元素相同。
:::

``` js
const allEqual = arr => arr.every(val => val === arr[0]);

EXAMPLES
allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```

#### Array.prototype.every()
><font color="#5291F0">[MDN 描述 Array.prototype.every()案例](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)</font>

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
><font color="#5291F0">[MDN 描述 Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)</font>

every 方法为数组中的每个元素执行一次 callback 函数，直到它找到一个使 callback 返回 false（表示可转换为布尔值 false 的值）的元素。如果发现了一个这样的元素，every 方法将会立即返回 false。否则，callback 为每一个元素返回 true，every 就会返回 true。callback 只会为那些已经被赋值的索引调用。不会为那些被删除或从来没被赋值的索引调用。

callback 被调用时传入三个参数：元素值，元素的索引，原数组。

如果为 every 提供一个 thisArg 参数，则该参数为调用 callback 时的 this 值。如果省略该参数，则 callback 被调用时的 this 值，在非严格模式下为全局对象，在严格模式下传入 undefined。

<font color="red">every 不会改变原数组。</font>

every 遍历的元素范围在第一次调用 callback 之前就已确定了。在调用 every 之后添加到数组中的元素不会被 callback 访问到。如果数组中存在的元素被更改，则他们传入 callback 的值是 every 访问到他们那一刻的值。那些被删除的元素或从来未被赋值的元素将不会被访问到。

every 和数学中的"所有"类似，当所有的元素都符合条件才返回true。另外，空数组也是返回true。(空数组中所有元素都符合给定的条件，注：因为空数组没有元素)。

## any - 是否至少一个元素通过函数测试
::: tip any
   如果提供的谓词函数对集合中的至少一个元素返回  true  ，则返回  true   ，否则返回  false   。使用 Array.prototype.some（） 测试集合中的任何元素是否基于  fn  返回  true 。省略第二个参数  fn ，将布尔值用作默认值。
:::

``` js
const any = (arr, fn = Boolean) => arr.some(fn);

EXAMPLES
any([0, 1, 2, 0], x => x >= 2); // true
any([0, 0, 1, 0]); // true
```

#### Array.prototype.some()
><font color="#5291F0">[MDN 解析 Array.prototype.some() 案例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)</font>

some() 方法测试是否至少有一个元素通过由提供的函数实现的测试。

::: tip 语法
  arr.some(callback(element[, index[, array]])[, thisArg])</br>
  </br>
  callback <Badge text="用来测试每个元素的函数，接受三个参数："/> </br>
  </br>
    element<Badge text="数组中正在处理的元素" type="warn"/></br>
    </br>
    index<Badge text="可选，数组中正在处理的元素的索引值" type="warn"/></br>
    </br>
    array<Badge text="可选，some()被调用的数组" type="warn"/></br>
    </br>
  thisArg<Badge text="执行 callback 时使用的 this 值。"/>
:::



``` js
var array = [1, 2, 3, 4, 5];

var even = function(element) {
  // checks whether an element is even
  return element % 2 === 0;
};

console.log(array.some(even));
// expected output: true
```


``` js
EXAMPLES
console.log([2, 5, 8, 1, 4].some(x => x > 10));//false
console.log([12, 5, 8 ,1 , 4].some( x => x >10));//true
```
><font color="#5291F0">[MDN 描述 Array.prototype.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)</font>

some() 为数组中的每一个元素执行一次 callback 函数，直到找到一个使得 callback 返回一个“真值”（即可转换为布尔值 true 的值）。如果找到了这样一个值，some() 将会立即返回 true。否则，some() 返回 false。callback 只会在那些”有值“的索引上被调用，不会在那些被删除或从来未被赋值的索引上调用。

callback 被调用时传入三个参数：元素的值，元素的索引，被遍历的数组。

将会把它传给被调用的 callback，作为 this 值。否则，在非严格模式下将会是全局对象，严格模式下是 undefined。

some() 被调用时不会改变数组。

some() 遍历的元素的范围在第一次调用 callback. 时就已经确定了。在调用 some() 后被添加到数组中的值不会被 callback 访问到。如果数组中存在且还未被访问到的元素被 callback 改变了，则其传递给 callback 的值是 some() 访问到它那一刻的值。

::: warning 示例
测试数组元素的值（下面的例子检测在数组中是否有元素大于 10）
:::

``` js
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```
>使用箭头函数测试数组元素的值

``` js
[2, 5, 8, 1, 4].some(x => x > 10);  // false
[12, 5, 8, 1, 4].some(x => x > 10); // true
```

## arrayToCSV - 将2D数组转换为逗号分隔值(CSV)字符串*
::: tip arrayToCSV
将2D数组转换为逗号分隔值(CSV)字符串。
使用 Array.prototype.map() 和 Array.prototype.join(delimiter) 将一个一维数组转换为字符串。
使用 Array.prototype.join('\n') 将所有行合并成CSV字符串, 用换行符分割每一行。
如果没有第二哥参数, delimiter会使用一个默认分隔符 ,.
:::

``` js
const arrayToCSV = (arr, delimiter = ',') =>
  arr
    .map(v => v.map(x => (isNaN(x) ? `"${x.replace(/"/g, '""')}"` : x)).join(delimiter))
    .join('\n');

EXAMPLES
arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'
arrayToCSV([['a', '"b" great'], ['c', 3.1415]]); // '"a","""b"" great"\n"c",3.1415'
```

#### Array.prototype.map()
><font color="#5291F0">[MDN 解析 Array.prototype.map()案例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)</font>

map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

::: tip 语法
  arr.map(callback(element[, index[, array]])[, thisArg])</br>
  </br>
  callback <Badge text="用来测试每个元素的函数，接受三个参数："/> </br>
  </br>
    element<Badge text="数组中正在处理的元素" type="warn"/></br>
    </br>
    index<Badge text="可选，数组中正在处理的元素的索引值" type="warn"/></br>
    </br>
    array<Badge text="可选，some()被调用的数组" type="warn"/></br>
    </br>
  thisArg<Badge text="执行 callback 时使用的 this 值。"/>
:::



``` js
var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

```
><font color="#5291F0">[MDN 描述 Array.prototype.map()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)</font>

map 方法会给原数组中的每个元素都按顺序调用一次  callback 函数。callback 每次执行后的返回值（包括 undefined）组合起来形成一个新数组。 callback 函数只会在有值的索引上被调用；那些从来没被赋过值或者使用 delete 删除的索引则不会被调用。

callback 函数会被自动传入三个参数：数组元素，元素索引，原数组本身。

如果 thisArg 参数有值，则每次 callback 函数被调用的时候，this 都会指向 thisArg 参数上的这个对象。如果省略了 thisArg 参数,或者赋值为 null 或 undefined，则 this 指向全局对象 。

map 不修改调用它的原数组本身（当然可以在 callback 执行时改变原数组）。

使用 map 方法处理数组时，数组元素的范围是在 callback 方法第一次调用之前就已经确定了。在 map 方法执行的过程中：原数组中新增加的元素将不会被 callback 访问到；若已经存在的元素被改变或删除了，则它们的传递到 callback 的值是 map 方法遍历到它们的那一时刻的值；而被删除的元素将不会被访问到。


::: tip 通俗形象的比喻
  map([🐂,🐥,🥔],👨🏾‍🍳)
  =>[🥩,🍗,🍟]
:::

#### Array.prototype.join()
><font color="#5291F0">[MDN 解析 Array.prototype.join()案例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join)</font>

join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。

::: tip 语法
  arr.join([separator])</br>
  </br>
  separator<Badge text="指定一个字符串来分隔数组的每个元素。如果需要，将分隔符转换为字符串。如果省略()，数组元素用逗号分隔。默认为 ","。如果separator是空字符串("")，则所有元素之间都没有任何字符。"/> </br>
:::



``` js
var elements = ['Fire', 'Wind', 'Rain'];

console.log(elements.join());
// expected output: "Fire,Wind,Rain"

console.log(elements.join(''));
// expected output: "FireWindRain"

console.log(elements.join('-'));
// expected output: "Fire-Wind-Rain"

```
><font color="#5291F0">[MDN 描述 Array.prototype.join()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)</font>

所有的数组元素被转换成字符串，再用一个分隔符将这些字符串连接起来。


## bifurcate - 数据分为两组*
::: tip bifurcate
   将值分成两组。如果filter中的元素为true，则集合中对应的元素属于第一组;否则，它属于第二组。
   使用Array.prototype.reduce()和Array.prototype.push()根据filter向组添加元素。
:::

``` js
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);

EXAMPLES
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); // [ ['beep', 'boop', 'bar'], ['foo'] ]
```

## bifurcateBy - 数据分为两组*
::: tip bifurcateBy
根据谓词函数将值分成两组，谓词函数指定输入集合中的元素属于哪一组。如果谓词函数返回一个真值，则集合元素属于第一组;否则，它属于第二组。
使用Array.prototype.reduce()和Array.prototype.push()根据fn为每个元素返回的值向组添加元素。
:::

``` js
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);

EXAMPLES
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); // [ ['beep', 'boop', 'bar'], ['foo'] ]
```
#### Array.prototype.reduce()
><font color="#5291F0">[MDN 解析 Array.prototype.reduce()案例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)</font>

reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。

::: tip Array.reduce()参数（4个）
Accumulator (acc)<Badge text="累计器" type="warn"/></br>
</br>
Current Value<Badge text="当前值" type="warn"/></br>
</br>
 Current Index (idx)<Badge text="当前索引" type="warn"/></br>
</br>
Source Array (src)<Badge text="源数组"/>
:::



``` js
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
```
><font color="#5291F0">[MDN 描述 Array.prototype.map()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)</font>

reduce为数组中的每一个元素依次执行callback函数，不包括数组中被删除或从未被赋值的元素，接受四个参数：

* accumulator 累计器
* currentValue 当前值
* currentIndex 当前索引
* array 数组

回调函数第一次执行时，accumulator 和currentValue的取值有两种情况：如果调用reduce()时提供了initialValue，accumulator取值为initialValue，currentValue取数组中的第一个值；如果没有提供 initialValue，那么accumulator取数组中的第一个值，currentValue取数组中的第二个值。
#### Array.prototype.push()
><font color="#5291F0">[MDN 解析 Array.prototype.push()案例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)</font>

reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。

::: tip 语法
 arr.push(element1, ..., elementN)</br>
  </br>
  elementN<Badge text="被添加到数组末尾的元素。"/> </br>
:::



``` js
var animals = ['pigs', 'goats', 'sheep'];

console.log(animals.push('cows'));
// expected output: 4

console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens');

console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens"]

```
><font color="#5291F0">[MDN 描述 Array.prototype.push()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)</font>
push方法将值追加到数组中。

push 方法有意具有通用性。该方法和 call() 或 apply() 一起使用时，可应用在类似数组的对象上。push 方法根据 length 属性来决定从哪里开始插入给定的值。如果 length 不能被转成一个数值，则插入的元素索引为 0，包括 length 不存在时。当 length 不存在时，将会创建它。

唯一的原生类数组（array-like）对象是 Strings，尽管如此，它们并不适用该方法，因为字符串是不可改变的。


## chunk -数组分块*
::: tip 数组分块
   把一个数组分块成指定大小的小数组。
   使用 Array.from() 创建一个新的数组，它的长度就是生成 chunk(块) 的数量。 使用 Array.slice() 将新数组的每个元素映射到长度为 size 的 chunk 中。 如果原始数组不能均匀分割，最后的 chunk 将包含剩余的元素。
:::

``` js
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
  
EXAMPLES
chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]
```

## compact -过滤掉数组中所有假值元素*
::: tip 过滤掉数组中所有假值元素
   从数组中移除 falsey 值元素。
   使用 Array.filter() 过滤掉数组中所有 假值元素(false, null, 0, "", undefined, 和 NaN)。
:::

``` js
const compact = arr => arr.filter(Boolean);
  
EXAMPLES
compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); // [ 1, 2, 3, 'a', 's', 34 ]
```
## countBy -返回每个分组数组中元素的数量*
::: tip 返回每个分组数组中元素的数量
   根据给定的函数对数组的元素进行分组，并返回每个分组中元素的数量。
   使用 Array.map() 将数组的值映射到函数或属性名称。 使用 Array.reduce() 创建一个对象，其中的键是从映射的结果中产生的。
:::

``` js
const countBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
  
EXAMPLES
countBy([6.1, 4.2, 6.3], Math.floor); // {4: 1, 6: 2}
countBy(['one', 'two', 'three'], 'length'); // {3: 2, 5: 1}
```
## countOccurrences-计数数组中某个值的出现次数*
::: tip 计数数组中某个值的出现次数
   计算数组中值的出现次数。
   每次遇到数组中的某个特定值时，使用 Array.reduce() 来递增计数器。
:::

``` js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a + 0), 0);
EXAMPLES
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
```
## deepFlatten-深度平铺数组*
::: tip 深度平铺数组
  深度平铺一个数组。
  使用递归。 通过空数组([]) 使用 Array.concat() ，结合 展开运算符( ... ) 来平铺数组。 递归平铺每个数组元素。
:::

``` js
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
EXAMPLES
deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```
## difference-数组比较*
::: tip  数组比较
  返回两个数组之间的差异。
  
  根据数组 b 创建一个 Set 对象，然后在数组 a 上使用 Array.filter() 方法，过滤出数组 b 中不包含的值。
:::

``` js
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};
EXAMPLES

difference([1, 2, 3], [1, 2, 4]); // [3]
```
## differenceBy- 数组比较*
::: tip  数组比较
  返回两个数组之间的差异。
  
  根据数组 b 创建一个 Set 对象，然后在数组 a 上使用 Array.filter() 方法，过滤出数组 b 中不包含的值。
:::

``` js
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.map(fn).filter(el => !s.has(el));
};
EXAMPLES
differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [2]
```
## differenceWith- 数组比较*
::: tip  通过比较函数比较两个数组的差异
 过滤出数组中比较函数不返回 true 的所有值。 类似于difference ,除了接受一个 comparator （比较函数）。
 
 使用 Array.filter() 和 Array.findIndex() 来查找合适的值。
:::

``` js
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);
EXAMPLES
differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); // [1, 1.2]
```
## drop-删除元素*
::: tip  删除元素
返回一个新数组，从左侧删除n个元素。

使用Array.prototype.slice()从左边删除指定数量的元素。
:::

``` js
const drop = (arr, n = 1) => arr.slice(n);
EXAMPLES
drop([1, 2, 3]); // [2,3]
drop([1, 2, 3], 2); // [3]
drop([1, 2, 3], 42); // []
```
## dropRight-从右面删除元素*
::: tip  从右面删除元素
返回一个新数组，从右边删除n个元素。

使用Array.prototype.slice()从右边删除指定数量的元素。
:::

``` js
const dropRight = (arr, n = 1) => arr.slice(0, -n);
EXAMPLES
dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []
```
## dropRightWhile-从左面删除元素*
::: tip  从左面删除元素
从数组末尾移除元素，直到传递的函数返回true。返回数组中剩余的元素。

循环遍历数组，使用array .prototype.slice()删除数组的最后一个元素，直到函数返回的值为true为止。返回剩余的元素。
:::

``` js
const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};
EXAMPLES
dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
```

## dropWhile-移除返回false的项*
::: tip  移除返回false的项
移除数组中的元素，直到传递的函数返回true。返回数组中剩余的元素。

循环遍历数组，使用array .prototype.slice()删除数组的第一个元素，直到函数返回的值为true。返回剩余的元素。
:::

``` js
const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};
EXAMPLES
dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]
```

## everyNth-获得数组中的每个第 n 个元素*
::: tip  获得数组中的每个第 n 个元素
返回数组中的每个第 n 个元素。

使用 Array.filter() 创建一个包含给定数组的每个第 n 个元素的新数组。
:::

``` js
const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
EXAMPLES
everyNth([1, 2, 3, 4, 5, 6], 2); // [ 2, 4, 6 ]
```


## filterFalsy-过滤数组中的错误值*
::: tip 过滤数组中的错误值。
过滤数组中的错误值。
使用array .prototype.filter()获得只包含真实值的数组。
:::

``` js
const filterFalsy = arr => arr.filter(Boolean);
EXAMPLES
filterFalsy(['', true, {}, false, 'sample', 1, 0]); // [true, {}, 'sample', 1]
```

## filterNonUnique -过滤掉数组中的非唯一值*
::: tip 过滤掉数组中的非唯一值
过滤掉数组中的非唯一值。
使用 Array.filter() 滤除掉非唯一值，使数组仅包含唯一值。
:::

``` js
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
```
## filterNonUniqueBy-返回数组中的唯一值*
::: tip 返回数组中的唯一值
根据提供的比较器函数过滤数组中的非惟一值。

使用array .prototype.filter()和array .prototype.every()来处理只包含唯一值的数组，这是基于比较器函数fn的。comparator函数接受四个参数:正在比较的两个元素的值及其索引。
:::

``` js
const filterNonUniqueBy = (arr, fn) =>
  arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));
EXAMPLES
filterNonUniqueBy(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' }
  ],
  (a, b) => a.id == b.id
); // [ { id: 2, value: 'c' } ]
```
## findLast-提供的函数返回真(truthy)值的最后一个元素
::: tip 提供的函数返回真(truthy)值的最后一个元素。
返回 提供的函数返回真(truthy)值的最后一个元素。
使用 Array.filter() 移除 fn 返回 falsey 值的元素，Array.slice(-1) 得到最后一个元素。
:::

``` js
const findLast = (arr, fn) => arr.filter(fn).pop();
EXAMPLES
findLast([1, 2, 3, 4], n => n % 2 === 1); // 3
```
## findLastIndex-返回所提供函数返回真实值的最后一个元素的索引
::: tip 返回所提供函数返回真实值的最后一个元素的索引
返回所提供函数返回真实值的最后一个元素的索引。
使用array .prototype.map()将每个元素映射到具有其索引和值的数组。使用Array.prototype.filter()删除fn返回falsey值的元素，使用Array.prototype.pop()获取最后一个元素。
:::

``` js
const findLastIndex = (arr, fn) =>
  arr
    .map((val, i) => [i, val])
    .filter(([i, val]) => fn(val, i, arr))
    .pop()[0];
EXAMPLES
findLastIndex([1, 2, 3, 4], n => n % 2 === 1); // 2 (index of the value 3)
```
## flatten-平铺数组
::: tip 平铺数组
将数组平铺到指定的深度。
使用递归，为每个深度级别 depth 递减 1 。 使用 Array.reduce() 和 Array.concat() 来合并元素或数组。 基本情况下，depth 等于 1 停止递归。 省略第二个参数，depth 只能平铺到 1 (单层平铺) 的深度。
:::

``` js
const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);
EXAMPLES
flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
```
## forEachRight-从右为每个数组元素执行一次提供的函数
::: tip 
从数组的最后一个元素开始，为每个数组元素执行一次提供的函数。
使用 Array.slice(0) 克隆给定的数组，Array.reverse() 反转数组，Array.forEach() 遍历这个反向数组。
:::

``` js
const forEachRight = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);
EXAMPLES
forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
```
## groupBy - 数组分组
::: tip 
根据给定的函数对数组元素进行分组。
使用 Array.map() 将数组的值映射到函数或属性名称。使用 Array.reduce() 来创建一个对象，其中的 key 是从映射结果中产生。
:::

``` js
const groupBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
    acc[val] = (acc[val] || []).concat(arr[i]);
    return acc;
  }, {});
  
EXAMPLES

groupBy([6.1, 4.2, 6.3], Math.floor); // {4: [4.2], 6: [6.1, 6.3]}
groupBy(['one', 'two', 'three'], 'length'); // {3: ['one', 'two'], 5: ['three']}
```

## head - 返回数组的第一个元素
::: tip  返回数组的第一个元素
返回数组的第一个元素。
使用 arr[0] 返回传递数组的第一个元素。
:::

``` js
const head = arr => arr[0];

EXAMPLES
head([1, 2, 3]); // 1
```

## indexOfAll - 返回指定元素的所有索引
::: tip 返回指定元素的所有索引
返回数组中所有 val 的索引。 如果 val 从不出现，则返回 [] 。
使用 Array.forEach() 循环元素和 Array.push() 来存储匹配元素的索引。 返回索引数组。
:::

``` js
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
EXAMPLES
indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
indexOfAll([1, 2, 3], 4); // []
```
## initial - 排除数组中最后一个元素
::: tip 排除数组中最后一个元素
返回一个数组中除了最后一个元素以外的所有元素。
使用 arr.slice(0,-1) 返回排除了最后一个元素的数组。
:::

``` js
const initial = arr => arr.slice(0, -1);
EXAMPLES
initial([1, 2, 3]); // [1,2]
```
## initialize2DArray - 初始化一个二维数组
::: tip 初始化一个二维数组
初始化一个给定行数和列数，及值的二维数组。
使用 Array.map() 生成 h 行，其中每个行都是一个长度为 w 的新数组。 如果未提供值 val ，则默认为 null。
:::

``` js
const initialize2DArray = (w, h, val = null) =>
  Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val));
EXAMPLES
initialize2DArray(2, 2, 0); // [[0,0], [0,0]]
```

## initializeArrayWithRange - 初始化特定范围的数字数组
::: tip 初始化一个二维数组
初始化一个给定行数和列数，及值的二维数组。
使用 Array.map() 生成 h 行，其中每个行都是一个长度为 w 的新数组。 如果未提供值 val ，则默认为 null。
:::

``` js
const initializeArrayWithRange = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end - start + 1) / step) }, (v, i) => i * step + start);
EXAMPLES
initializeArrayWithRange(5); // [0,1,2,3,4,5]
initializeArrayWithRange(7, 3); // [3,4,5,6,7]
initializeArrayWithRange(9, 0, 2); // [0,2,4,6,8]
```

## initializeArrayWithValues - 初始化特定范围和值的数组
::: tip 初始化特定范围和值的数组
使用指定的值初始化和填充数组。
使用 Array(n) 创建所需长度的数组，使用 fill(v) 以填充所需的值。 你可以忽略 val ，使用默认值 0。
:::

``` js
const initializeArrayWithValues = (n, val = 0) => Array(n).fill(val);
EXAMPLES
initializeArrayWithValues(5, 2); // [2, 2, 2, 2, 2]
```

## initializeNDArray - 建一个具有给定值的n维数组
::: tip 初始化特定范围和值的数组
创建一个具有给定值的n维数组。
使用递归。使用array .prototype.map()生成行，其中每个行都是使用initializeNDArray初始化的新数组。
:::

``` js
const initializeNDArray = (val, ...args) =>
  args.length === 0
    ? val
    : Array.from({ length: args[0] }).map(() => initializeNDArray(val, ...args.slice(1)));
EXAMPLES
initializeNDArray(1, 3); // [1,1,1]
initializeNDArray(5, 2, 2, 2); // [[[5,5],[5,5]],[[5,5],[5,5]]]
```
