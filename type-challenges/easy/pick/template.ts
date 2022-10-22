type MyPick<T, K extends keyof T> = {
    [P in K] : T[P]
}
/**
 * K 继承并遍历出 T对象里的 key
 * 
 * 判断 P 有没有在 K 里 有就 从 T里拿值
 */