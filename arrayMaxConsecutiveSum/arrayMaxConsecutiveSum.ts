export function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let resultArr: number[] = [];
    inputArray.map((element,index) =>{
        //check until the index-2nd element
        if(index <= inputArray.length-2) resultArr.push(element + inputArray[index+k-1])
        
    })
    
    //check the max result
    let max:number = 0;
    resultArr.forEach(element => {
        if(max < element) max = element;
        return max;
    });
    return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));