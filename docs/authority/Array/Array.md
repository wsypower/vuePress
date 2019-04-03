
# 创建数组
## 数组直接量(字面量)创建数组。
``` js
var empty = [];    //没有元素的数组
var primes = [2,3,4,5,6];       //有5个数值的数组
var misc = [1.1,true,"a", ];    //3个不同类型的元素和结尾的逗号
```
><font color="#2B3E50">数组直接量中的值不一定要是常量；它们可以是任意的表达式</font>

``` js
var base = 1024;
var table = [base,base+1,base+2,base+3];
```
><font color="#2B3E50">它可以包含对象直接量或其他数组直接量</font>

``` js
var b = [[1,{x:1,y:2}],[2,{x:3,y:4}]];
```
><font color="#2B3E50">如果省略数组直接量中的某个值，省略的元素将被赋予undefined值：</font>

``` js
var count = [1,,3];   //数组有3个元素，中间的那个元素值为undefined
var undefs = [,,];   //数组有2个元素，都是undefined
```
::: warning 注意
数组直接量的语法允许有可选的结尾的逗号，故[,,]只有两个元素而非三个This is a warning
:::


## 构造函数Array()创建数组

><font color="#2B3E50">调用时没有参数</font>

``` js
var a = new Array();
```
><font color="#2B3E50">调用时有一个数值参数，它指定长度</font>

``` js
var a = new Array(10);
```
><font color="#2B3E50">显示指定两个或多个数组元素或者数组的一个非数组元素</font>

``` js
var a = new Array(5,4,3,2,1,"testing,testing") //Array(6)0:5 1:4 2:3 3:2 4:1 5: "testing,testing"length: 6;
```

---


::: tip ES6新增的构造函数方法
  鉴于数组的常用性，ES6专门扩展了数组构造器Array ，新增2个方法：Array.of、Array.from
:::

### ES6: Array.of
Array.of用于将参数依次转化为数组中的一项，然后返回这个新数组，而不管这个参数是数字还是其它。它基本上与Array构造器功能一致，唯一的区别就在单个数字参数的处理上。如下：

``` js
Array.of(8.0); // [8]
Array(8.0); // [empty × 8]
```
参数为多个，或单个参数不是数字时，Array.of 与 Array构造器等同。
::: danger 缘故 Array 有两个参数分别是elementN,arrayLength
elementN</br>
Array 构造器会根据给定的元素创建一个 JavaScript 数组，但是当仅有一个参数且为数字时除外（详见下面的 arrayLength 参数）。注意，后面这种情况仅适用于用 Array 构造器创建数组，而不适用于用方括号创建的数组字面量。</br>
arrayLength</br>
一个范围在 0 到 232-1 之间的整数，此时将返回一个 length 的值等于 arrayLength 的数组对象（言外之意就是该数组此时并没有包含任何实际的元素，不能理所当然地认为它包含 arrayLength 个值为 undefined 的元素）。如果传入的参数不是有效值，则会抛出 RangeError 异常。</br>
:::

``` js
Array.of(8.0, 5); // [8, 5]
Array(8.0, 5); // [8, 5]

Array.of('8'); // ["8"]
Array('8'); // ["8"]
```
>因此，若是需要使用数组包裹元素，推荐优先使用Array.of方法。

---

### ES6: Array.from()
Array.from的设计初衷是快速便捷的基于其他对象创建新数组，准确来说就是从一个类似数组的可迭代对象创建一个新的数组实例，说人话就是，只要一个对象有迭代器，Array.from就能把它变成一个数组（当然，是返回新的数组，不改变原对象）。
从语法上看，Array.from拥有3个形参，第一个为类似数组的对象，必选。第二个为加工函数，新生成的数组会经过该函数的加工再返回。第三个为this作用域，表示加工函数执行时this的值。后两个参数都是可选的。我们来看看用法。

::: tip 语法
Array.from(arrayLike[, mapFn[, thisArg]])
:::
::: tip 参数
arrayLike</br>
想要转换成数组的伪数组对象或可迭代对象。</br>
mapFn (可选参数)</br>
如果指定了该参数，新数组中的每个元素会执行该回调函数。</br>
thisArg (可选参数)</br>
可选参数，执行回调函数 mapFn 时 this 对象。</br>
:::

---
``` js
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
```

``` js
var obj = {0: 'a', 1: 'b', 2:'c', length: 3};
Array.from(obj, function(value, index){
  console.log(value, index, this, arguments.length);
  return value.repeat(3); //必须指定返回值，否则返回undefined
}, obj);


// expected output:
//a 0 Object{0:"a",1:"b",2:"c",length:3} 2
//b 1 Object{0:"a",1:"b",2:"c",length:3} 2
//c 2 Object{0:"a",1:"b",2:"c",length:3} 2

//["aaa","bbb","ccc"]
```
如果不需要指定this，加工函数完全可以是一个箭头函数。上述代码可以简化如下：

``` js
Array.from(obj, (value) => value.repeat(3));
```
除了上述obj对象以外，拥有迭代器的对象还包括这些：String，Set，Map，arguments 等，Array.from统统可以处理。如下所示：

``` js
// String
Array.from('abc'); // ["a", "b", "c"]
// Set
Array.from(new Set(['abc', 'def'])); // ["abc", "def"]
// Map
Array.from(new Map([[1, 'abc'], [2, 'def']])); // [[1
, 'abc'], [2, 'def']]
// 天生的类数组对象arguments
function fn(){
  return Array.from(arguments);
}
fn(1, 2, 3); // [1, 2, 3]
```
::: danger 到这你可能以为Array.from就讲完了，实际上还有一个重要的扩展场景必须提下。比如说生成一个从0到指定数字的新数组，Array.from就可以轻易的做到。


``` js
Array.from({length: 10}, (v, i) => i); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```
:::


