export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
   
   //variables & declarations
    let maxDiff:number = 0;
    let resultArr: number[] = [];

    
    inputArray.map((element,index) =>{
        //check until the index-1st element
        if(index <= inputArray.length-2) resultArr.push(Math.abs(element + inputArray[index+1]))
        
    })
    maxDiff = Math.max(...resultArr);
    return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));