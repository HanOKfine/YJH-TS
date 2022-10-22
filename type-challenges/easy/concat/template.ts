type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]




type FirstElement<T extends unknown[]> = T extends [infer F, ...infer Nexts] ? F : never


type arr = ['1' , '2' , '3']  
type _first = FirstElement<arr>

type TailElement<T extends unknown[]> = T extends [...infer Be, infer F] ? F : never
type _tail = TailElement<arr>
