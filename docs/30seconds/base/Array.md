# Array
## all
::: tip all
   如果提供的谓词函数对集合中的所有元素都返回  true ，则返回  true，否则返回 false 。使用   Array.prototype.every（） 测试集合中的所有元素是否基于  fn  返回  true  。省略第二个参数  fn  ，将布尔值用作默认值。
:::

``` js
const all = (arr, fn = Boolean) => arr.every(fn);

EXAMPLES
all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
```

## allEqual
::: tip allEqual
   检查数组中的所有元素是否相等。使用 Array.prototype.every（） 检查数组中的所有元素是否与第一个元素相同。
:::

``` js
const allEqual = arr => arr.every(val => val === arr[0]);

EXAMPLES
allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```

### Array.prototype.every()
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

## any
::: tip any
   如果提供的谓词函数对集合中的至少一个元素返回  true  ，则返回  true   ，否则返回  false   。使用 Array.prototype.some（） 测试集合中的任何元素是否基于  fn  返回  true 。省略第二个参数  fn ，将布尔值用作默认值。
:::

``` js
const any = (arr, fn = Boolean) => arr.some(fn);

EXAMPLES
any([0, 1, 2, 0], x => x >= 2); // true
any([0, 0, 1, 0]); // true
```

### Array.prototype.some()
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

## arrayToCSV
::: tip arrayToCSV
  将二维数组转换为逗号分隔值（  csv  ）字符串。使用 Array.prototype.map () 和  Array.prototype.join（delimiter）  将一维数组组合成字符串。使用   Array.prototype.join（'\n'） （  ，换行符号）两个组合的全行到  CSV  格式的字符串，每排分捡和一个换行符。在第二  omit  参数delimiter ，使用  delimiter（默认）。
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

### Array.prototype.map()
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

### Array.prototype.join()
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


## bifurcate
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

## bifurcateBy
::: tip bifurcateBy
   将值分成两组。如果filter中的元素为true，则集合中对应的元素属于第一组;否则，它属于第二组。
   使用Array.prototype.reduce()和Array.prototype.push()根据filter向组添加元素。
:::

``` js
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);

EXAMPLES
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); // [ ['beep', 'boop', 'bar'], ['foo'] ]
```
### Array.prototype.reduce()
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
### Array.prototype.push()
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
