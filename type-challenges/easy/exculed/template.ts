type MyExclude<T, U> = T extends U ? never : T
type MyExcludeTemp<T, U> = T extends U ? '1' : '2'


type t3 = 'a' | 'b' | 'c'
type t4 = 'a'

type _t = MyExcludeTemp<t3 , t4>

type arr1 = ['2'] | [1]
type arr2 = ['2']

type _arr = MyExcludeTemp<arr1, arr2>