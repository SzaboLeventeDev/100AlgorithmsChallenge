import { toNamespacedPath } from "path";

export function addBorder(picture: string[]): string[] {
    let result:string[] = [];
    let maxLength:number = 0;
    
    //check the length of the longest element in the array
    picture.forEach(element => {
        if(element.length> maxLength) maxLength = element.length;
        return maxLength;
    })
    
    let tempStr:string;
    //add the upper part of the frame
    tempStr = ''
    for(let i:number = 0; i< maxLength+2; i++){
        tempStr += '*';
    }
    result.push(tempStr);
    
    
    //add the inner part of the picture
    picture.map((line) => {
        let diff:number = maxLength - line.length;
        
        tempStr = '';
        
        if(diff == 0){
            tempStr = '*' + line + '*';
            result.push(tempStr);
        }
        
    })
    
    //add the bottom part of the frame
    tempStr = ''
    for(let i:number = 0; i< maxLength+2; i++){
        tempStr += '*';
    }
    result.push(tempStr);    
    console.log(result);
    return result;
}

 console.log(addBorder(["abc", "ded"]));