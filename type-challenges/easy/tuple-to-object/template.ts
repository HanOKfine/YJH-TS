type TupleToObject<T extends readonly (string | number)[]> = {
    [P in T[number]] : P
}

const tuple =  ['tesla', 'model 3', 'model X', 'model Y'] as const

type r = TupleToObject<typeof tuple>

/**
 * 类型遍历 array [number]
 * const something 固定值的类型
 * const s = 'sss' 固定s的类型为string
 * as const 固定 值 作为类型
 * const s = 'sss' 固定s 的类型为 'sss'
 */