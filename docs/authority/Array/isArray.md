# 类型判断
判断一个变量是否数组类型,我们至少有如下5种方式去判断一个值是否数组
``` js
var a = [];
// 1.基于instanceof
a instanceof Array;
// 2.基于constructor
a.constructor === Array;
// 3.基于Object.prototype.isPrototypeOf
Array.prototype.isPrototypeOf(a);
// 4.基于getPrototypeOf
Object.getPrototypeOf(a) === Array.prototype;
// 5.基于Object.prototype.toString
Object.prototype.toString.apply(a) === '[object Array]';
```
既然说到这里就简单分析一下常用的数据类型判断，
js 中的类型检测也是很重要的一部分，所以说这篇文章我们就来讲一下怎么对 JavaScript 中的基本数据类型进行检测  

* <font color="red">typeof  </font>
* <font color="red">instanceof  </font>
* <font color="red">Object.prototype.toString  </font>
* <font color="red">construcor  </font>
* <font color="red">getPrototypeOf </font>
                       
## instanceof
::: tip instanceof 判断类型
  instanceof运算符用于测试构造函数的prototype属性是否出现在对象的原型链中的任何位置</br>
  instanceof 运算时会递归查找L的原型链，即 L.__proto__.__proto__.__proto__.__proto__... 
  直到找到了或者找到顶层为止。</br>
  L instanceof R //instanceof运算时，通过判断L的原型链上是否存在R.prototype</br>
  L.__proto__.__proto__ ..... === R.prototype ？ //如果存在返回true 否则返回false
:::
通常解释:在JS中，用typeof来判断基本类型，instanceof判断引用类型
``` js
console.log('aa' instanceof String) // 都说了判断引用类型，拿个基本类型出来坑爹么
let obj_string = new String('aa');
console.log(obj_string instanceof String)
```
``` js
// 大家伙们都属于object(所有对象都是Object实例)
console.log({} instanceof Object)  //true
console.log([] instanceof Array) //true
console.log([] instanceof Object) //true
console.log(function() {} instanceof Function) //true
console.log(function() {} instanceof Object) //true
```
``` js
//检测某个对象是不是另一个对象的实例
function Foo(){}
function BFoo(){}
Foo.prototype = new BFoo();//JavaScript 原型继承
let foo = new Foo();
console.log(foo instanceof Foo); //true
console.log(foo instanceof BFoo) //true
```
其实上面三个例子都比较基础，相信都难不倒大家，再看几个复杂点的
``` js
console.log(String instanceof String); //false
console.log(Object instanceof Object); //true
console.log(Function instanceof Function); //true
console.log(Function instanceof Object); //true

function Foo(){} 
function BFoo(){} 
Foo.prototype = new BFoo(); 
console.log(Foo instanceof Function);  //true
console.log(Foo instanceof Foo); //false
```
>MDN的定义</br>
object instanceof constructor</br>
instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。

先看MDN里面的解释，左边是要测试的对象，右边是构造函数
是否能在对象的原型链上（顺着__proto__一直往上找）找到构造函数的原型属性（[constructor].prototype）

直接看实现代码吧

``` js
function instance_of(L, R) {//L 表示左边的object，R 表示右边的constructor
 const R_P = R.prototype;// 取 R 的显式原型
 L = L.__proto__;// 取 L 的隐式原型,并且可能会顺着原型链重新赋值
 while (true) { 
   if (L === null) 
     return false; 
   if (R_P === L)// 这里重点：严格比较 true 
     return true; 
   L = L.__proto__; 
 } 
}
```
再祭出我们的原型链大杀器

![图片alt](./img/37870377-2bc8211a-3007-11e8-92a0-04fa96aabf13.png)

划个重点
* __proto__ 属性，指向了创建该对象的构造函数的原型
* 所有JS 对象都有 __proto__ 属性，除了Object.prototype.__proto__ === null
* 注意Object(),它是由function生成的，所以它的__proto__属性指向了function的构造器Function的原型Function.prototype
* 注意构造器Function,它是唯一一个prototype和__proto__指向相同的对象
* 一般来说，我们日常自行创建的构造器Foo的__proto__属性指向function的构造器Function的原型Function.prototype，但是构造器的原型对象Foo.prototype的__proto__属性是直接指向Object.prototype对象的

直接找一个例子来讲解，相信聪明的你们一定能够融会贯通，举一反三
``` js
console.log(Object instanceof Object); // true
```
再看instanceof的实现代码
``` js
function instance_of(L, R) {//L 表示左边的object，R 表示右边的constructor
 const R_P = R.prototype;// 取 R 的显式原型
 L = L.__proto__;// 取 L 的隐式原型,并且可能会顺着原型链重新赋值
 while (true) { 
   if (L === null) 
     return false; 
   if (R_P === L)// 这里重点：严格比较 true 
     return true; 
   L = L.__proto__; 
 } 
}
```
首先，左右表达式赋值
``` js
L = Object
R = Object
R_P = Object.prototype = Object.prototype
L = Object.__proto__ = Function.prototype
```
2、第一次判断
``` js
L !== null => R_P !== L
判断不为true
继续寻找L的原型链，准备下一轮赋值
```
3、第二轮赋值
``` js
L = Function.prototype.__proto__  =  Object.prototype
```
4、第二次判断
``` js
return true
```
再简单说一个
``` js
console.log(String instanceof String) //false
```
判断过程是
``` js
//L = String => String.__proto__ = Function.prototype  =>Function.prototype.__proto__ =>Object.prototype
//R = String => String.prototype 
:RESULT
L != R
```
## typeof
typeof 一般被用于判断一个变量的类型，我们可以利用 typeof 来判断number,  string,  object,  boolean,  function, undefined,  symbol 这七种类型，这种判断能帮助我们搞定一些问题，比如在判断不是 object 类型的数据的时候，typeof能比较清楚的告诉我们具体是哪一类的类型。但是，很遗憾的一点是，typeof 在判断一个 object的数据的时候只能告诉我们这个数据是 object, 而不能细致的具体到是哪一种 object, 但是Object 下还有很多细分的类型呐，如 Array、Function、Date、RegExp、Error 等

如果用 typeof 去检测这些类型，举个例子：
``` js
function Person() {

}
var p = new Person();
console.log(typeof p === 'object'); //true
console.log(p instanceof Person);  //true
```
``` js
var date = new Date();
var error = new Error();
console.log(typeof date); // object
console.log(typeof error); // object
```
``` js
var date = new Date();
var error = new Error();
console.log(typeof date); // object
console.log(typeof error); // object
```
``` js
console.log(typeof String())      //string
console.log(typeof Function())    //function
console.log(typeof Boolean())     //boolean
console.log(typeof Number())      //number
console.log(typeof Symbol())      //symbol
console.log(typeof undefined)     //undefined
console.log(typeof null)          //object
console.log(typeof Array())       //object
console.log(typeof Object())      //object
console.log(typeof new Date())    //object
console.log(typeof new Error())   //object
console.log(typeof new RegExp())  //object
```
在用typeof判断的时候，只会告诉我们是object，而不会告诉我们具体是哪种object，有一个特例就是  typeof null === ''object'' 返回true ；所以在判断具体是哪种object类型的时候都是用instanceof 来判断，先说说typeof原理:

在 javascript 的最初版本中，使用的 32 位系统，为了性能考虑使用低位存储了变量的类型信息：

| 对象        | 浮点数           | 字符串  | 布尔  | 整数| null | undefined|
| ----------- |-------------:| -----:|-----:|-----:|-----:|-----:|
|  000       | 010 | 100 |110 |1 |0 |−2^30 |

所以，typeof 在判断 null 的时候就出现问题了，由于 null 的所有机器码均为0，因此直接被当做了对象来看待。
## Object.prototype.toString()
所有的数据类型都可以用 Object.prototype.toString 来检测,而且非常的精准。</br>
我们先来看一下 Object.prototype.toString 是怎么进行类型检测的

``` js
    var a = 123;
    console.log(Object.prototype.toString.call(a));    // [object Number]

    var b = "string";
    console.log(Object.prototype.toString.call(b));    // [object String]

    var c = [];
    console.log(Object.prototype.toString.call(c));    // [object Array]

    var d = {};
    console.log(Object.prototype.toString.call(d));    // [object Object]

    var e = true;
    console.log(Object.prototype.toString.call(e));    // [object Boolean]

    var f =  null;
    console.log(Object.prototype.toString.call(f));    // [object Null]

    var g;
    console.log(Object.prototype.toString.call(g));    // [object Undefined]

    var h = function () {};
    console.log(Object.prototype.toString.call(h));    // [object Function]

    var A = new Number();
    console.log(Object.prototype.toString.call(A));    // [object Number]

```
所以说，Object.prototype.toString 还是能够比较准确的检测出对应的类型的。
### Object.prototype.toString 的实现过程
在 ECMAScript 5中，Object.prototype.toString() 被调用时，会进行如下步骤：

* 如果 this 是 undefined ，返回 [object Undefined] ；
* 如果 this 是 null， 返回 [object Null]；
* 令 Object 为以 this 作为参数调用 ToObject 的结果；
* 令 class 为 Object 的内部属性 [[Class]] 的值；
* 返回三个字符串 [object", class, 以及"] 拼接而成的字符串。
### [[Class]]
[[Class]]是一个内部属性，值为一个类型字符串，可以用来判断值的类型。

有这么一段详细的解释：
>本规范的每种内置对象都定义了 [[Class]] 内部属性的值。宿主对象的 [[Class]] 内部属性的值可以是除了 "Arguments", "Array", "Boolean", "Date", "Error", "Function", "JSON", "Math", "Number", "Object", "RegExp", "String" 的任何字符串。[[Class]] 内部属性的值用于内部区分对象的种类。注，本规范中除了通过 Object.prototype.toString没有提供任何手段使程序访问此值。
 
 简单描述一下就是 toString 的调用会返回如下的格式

``` js
[object [[class]]]
```
看到没，通过他就可以拿到对象的内部[[class]]属性了。但这是时候有人就会说了，你瞅瞅下面的

``` js
[1,2,3].toString(); //"1, 2, 3"

(new Date).toString(); //"Sat Aug 06 2011 16:29:13 GMT-0700 (PDT)"

/a-z/.toString(); //"/a-z/"
```

上面现象的原因在于，大部分的内置对象都重写了 Object.prototype.toString 函数。比如Number。

显然直接调用时不行的，但坏就坏在我们在用 js, 好也好在我们在用 js, 估计大家都想到了，我们还有两个方法 call 和 apply， 如下


``` js
Object.prototype.toString.call([1,2,3]); //"[object Array]"

Object.prototype.toString.call(new Date); //"[object Date]"

Object.prototype.toString.call(/a-z/); //"[object RegExp]"
```
## construcor,getPrototypeOf
这两个就是应用了是用了原型链

>constructor 属性返回对创建此对象的数组函数的引用。
```
    var a = 123;
    console.log( a.constructor == Number);    // true

    var b = "string";
    console.log( b.constructor == String);    // true

    var c = [];
    console.log( c.constructor == Array);    // true

    var d = {};
    console.log( d.constructor == Object);    // true

    var e = true;
    console.log( e.constructor == Boolean);    // true

    var f =  null;
    console.log( f.constructor == Null);    //  TypeError: Cannot read property 'constructor' of null

    var g;
    console.log( g.constructor == Undefined);    // Uncaught TypeError: Cannot read property 'constructor' of
    undefined

    var h = function () {};
    console.log( h.constructor == Function);    // true

    var A = new Number();
    console.log( A.constructor == Number);    // true

    var A = new Number();

```
通过上述的实例，我们可以看到，无论是通过字面量或者构造函数创建的基本类型，都可以检测出。并且也可以检测出 Array、Object、Function引用类型，但是不能检测出 Null 和 Undefined


 ## Array.isArray
 回到数组来说判断是不是数组就是Array.isArray（）

Array.isArray([]); // true
Array.isArray({0: 'a', length: 1}); // false
```
实际上，通过Object.prototype.toString去判断一个值的类型，也是各大主流库的标准。因此Array.isArray的polyfill通常长这样：

``` js
if (!Array.isArray){
  Array.isArray = function(arg){
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}
```
