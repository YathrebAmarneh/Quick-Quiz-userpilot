// program to reverse an array

function reverseArray(array) {

    // empty array
    let reverseArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reverseArray.push(array[i])
    }
    return reverseArray;
}

// Program to check arrays with couples

function arrayCouples(arr) {

    //for loop to convert the submitted array to subArrays

    const arrOfSubArrs = [];

    for (let i = 0; i < arr.length; i += 2) {
        arrOfSubArrs.push([arr[i], arr[i + 1]]);
    }
    
    //Two for loops to check if the pair and its corresponding reverse exist
    
    let check = {};
        for(let j = 0 ; j <= arrOfSubArrs.length-2 ; j++) {
            
            if(j in check) {continue;}
            
            for(let k = j+1 ; k <= arrOfSubArrs.length-1 ; k++) {
                
                if((arrOfSubArrs[j][0] === arrOfSubArrs[k][1]) && (arrOfSubArrs[j][1] === arrOfSubArrs[k][0])) { 
                    check[k]=j;
                    break;
                }

            }// end of first loop
            
        }//end of outer loop
       
    console.log(check)

    const values = Object.keys(check).map((key) => check[key]); //values of check 
    const keys = Object.keys(check); //keys of check

    const keyValue = keys.concat(values) // check object is converted to an array

    const keyValueNumbers = keyValue.map((KV) => {return Number(KV)}); // convert keyvalue keys to numbers
       
    const arrOfPairsIndices = [], singlePairs = [];

    for(let h = 0 ; h <= arrOfSubArrs.length-1; h++) { //indices of the original array
        arrOfPairsIndices.push(h)

        if(!keyValueNumbers.includes(h)){singlePairs.push(arrOfSubArrs[h])}
    }
    console.log(singlePairs.join(" , "))
    if(singlePairs.length === 0) {console.log("Yes")}
    
} // end of function

// const arr = prompt("Enter your numbers splitted by comma").split(",")
const arr = [4, 5, 1, 4, 5, 4, 4, 1, 9, 6 , 7, 8]

const result = arrayCouples(arr);
console.log(result)


