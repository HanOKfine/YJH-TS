/**
 * 联合类型
 * union types
*/

let numberOrString: number | string

// typescript 不能判断联合类型的变量具体是哪个类型 
// 我们只能访问此联合类型的所有类型里共有的属性和变量

// number type
numberOrString = 1
numberOrString.toFixed()

// string type 
numberOrString = ''
numberOrString.slice()

/**
 *  类型断言
 *  type assertions
 */

// 用 as 关键字 明确的告诉typescript 当前值的类型
function getLength(value: string | number){
    let input = value as string 
    if(input.length){   // 缺陷 string length 长度为 0 也会判false 走else as number 的逻辑
        return input.length
    }else{
        const num = value as number
        return num.toString().length
    }
}


/**
 *  类型守卫
 *  type guard
 */
function getLength2(value: string | number){
    if(typeof value === "string"){
        return value.length
    }else{
        return value.toString().length
    }
}

