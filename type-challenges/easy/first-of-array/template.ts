// type First<T extends any[]> = T extends [] ? never : T[0]
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]
// type First<T extends any[]> = T[0] extends T[number] ?  T[0] : never
type First<T extends (string | number | Function | Object | undefined | null)[]> 
    =
    T extends [infer First, ...infer Rest] ? First : never


/**
 *  知识点：
 * 1 extends 类型条件判断
 * 2 获取tuple的length 属性
 * 3 extends union 判断规则
 * 4 infer 的使用
 */

// T[number]
type ages = [1, 2, 3]
// union ages 为 空数组时 t1 为 never
type t1 = ages[number]

//看看值是不是在union里
type t2 = 1 extends ages[number] ? true : false