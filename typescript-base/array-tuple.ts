//最简单的方法是使用「类型 + 方括号」来表示数组：
let arrOfNumbers: number[] = [1, 2, 3, 4]
//数组的项中不允许出现其他的类型：
//数组的一些方法的参数也会根据数组在定义时约定的类型进行限制：
arrOfNumbers.push(3)
// arrOfNumbers.push('abc') // error 类型“string”的参数不能赋给类型“number”的参数

// 元祖的表示和数组非常类似，只不过它将类型写在了里面 这就对每一项起到了限定的作用
let user: [string, number] = ['viking', 20]
//但是当我们写少一项 就会报错 同样写多一项也会有问题
// user = ['molly', 20, true]  // error 不能将类型“[string, number, boolean]”分配给类型“[string, number]”。源具有 3 个元素，但目标仅允许 2 个。
