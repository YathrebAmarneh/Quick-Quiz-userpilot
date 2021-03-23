

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

function ArrayCouples(arr){

    //for loop to convert the submitted array to subArrays

    const arrOfSubArrs = [];

    for(let i = 0 ; i < arr.length ; i += 2){

        let subArr = arr.slice(i,i+2);
        arrOfSubArrs.push(subArr);
    }

    for(let j = 0 ; j < arrOfSubArrs.length ; j++){
        // console.log(arrOfSubArrs)
        // console.log(arrOfSubArrs[j])
        // console.log(arrOfSubArrs[j].reverse())
        console.log(arrOfSubArrs)
        console.log(arrOfSubArrs.includes(arrOfSubArrs[j]))
        console.log(arrOfSubArrs[j])
        console.log(reverseArray(arrOfSubArrs[j]))
        console.log(arrOfSubArrs.includes(reverseArray(arrOfSubArrs[j])))
        console.log("************************************************")
        
        
        if( arrOfSubArrs.includes(arrOfSubArrs[j])  && arrOfSubArrs.includes(reverseArray(arrOfSubArrs[j]))){
            console.log("yes")
        }else {
            console.log(arrOfSubArrs[j])
        }

    }

}// end of function

// const arr = prompt("Enter your numbers splitted by comma").split(",")
const arr = [4,5,1,4,5,4,4,1,9,6]

const result = ArrayCouples(arr);
console.log(result)
