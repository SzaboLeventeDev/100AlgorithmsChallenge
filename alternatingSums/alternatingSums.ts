export function alternatingSums(a: number[]): number[] {
    let sum1:number = 0;
    let sum2:number = 0;
    for(let i = 0; i < a.length; i++){
        if(i % 2 == 0){
            sum1 += a[i];
        } else{
            sum2 += a[i];
        }
    }
    return [sum1,sum2]
}

console.log(alternatingSums([50, 60, 60, 45, 70]))