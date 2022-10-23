 /**
  * 原始数据类型包括
  *     Boolean 
  *     Null
  *     Undefined
  *     Number
  *     BigInt
  *     String
  *     Symbol
  */


  let isDone: boolean = false

  let age : number = 10

  let fristName : string = 'KK'

  let u : undefined = undefined

  let n : null = null

  // null 和 undefined 是所有类型的子类。 也就是说 undefined 类型的变量  可以赋值给 number 以及其他类型的变量

  let num : number =  1

  // tsConfig 中 strictNullChecks": true 的情况下 这样赋值会报错 ts 默认 严格模式

//   let numu : number = undefined  // error 不能将类型“undefined”分配给类型“number”。