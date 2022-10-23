// 我们定义了一个接口 Person
interface PersonA {
    name: string;
    age: number;
}

// 接着定义了一个变量 viking，它的类型是 Person。这样，我们就约束了 viking 的形状必须和接口 Person 一致。
let vikingA: PersonA = {
name: 'viking',
age: 20
}
  
// 有时我们希望不要完全匹配一个形状，那么可以用可选属性 ( ? ) ：
interface PersonB {
    name: string;
    age?: number;
}
let vikingB: PersonB = {
    name: 'Viking'
}
  
//接下来还有只读属性，有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性

interface PersonC {
    readonly id: number;
    name: string;
    age?: number;
}

let viking: PersonC = {
    id: 712344,
    name: "viking"
}

// viking.id = 9527 // error 无法分配到 "id" ，因为它是只读属性
  
  type X = { x: number }

  type xy<T> = X & { y: X }

  const printXY: xy<X> = { x: 1, y: {x: 1}}




  function func(value: string | number):boolean{
    value as string
    return !!value
  }

  console.log(func(1))