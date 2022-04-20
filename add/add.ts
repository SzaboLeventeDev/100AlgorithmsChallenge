export function add(param1: number, param2: number): number {
    return param1 + param2
}

export function add2(...param1: number[]): number {
   /* let final:number = param1.forEach(value => {
        let result:number = 0;
        result += value;
        return value;
    })  
    return final; */
    let result:number = 0;
    for (let index = 0; index < param1.length; index++) {
        const element = param1[index];
        result += element;
    }
    return result;
}
console.log(add(1, 2));
// console.log(add(3, 2));

console.log(add2(1,2,3,4,5));
// console.log(add2(2,3));
