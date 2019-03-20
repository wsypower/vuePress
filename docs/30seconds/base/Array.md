# Array
## all
   如果提供的谓词函数对集合中的所有元素都返回  true ，则返回  true，否则返回 false 。使用   Array.prototype.every（） 测试集合中的所有元素是否基于  fn  返回  true  。省略第二个参数  fn  ，将布尔值用作默认值。
   
``` js
const all = (arr, fn = Boolean) => arr.every(fn);

EXAMPLES
all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
```

