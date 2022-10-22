import type { Equal, Expect } from '@type-challenges/utils'

// type Includes<T extends readonly any[], U> = U extends T[number] ? true : false
export type Includes<T extends readonly any[], U> = T extends [infer F, ...infer R] ? Equal<F , U> extends true ? true : Includes<R , U> : false