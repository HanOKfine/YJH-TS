type Length<T extends readonly any[]> = T['length']



/**
 *  知识点
 *  1 什么是tuple 类型
 *  2 tuple 跟 array 有什么区别
 * 
 */

function getLength(T){
    if(!Array.isArray(T))return Error
    return T.length
}
