

// Program to check arrays with couples

function ArrayCouples(arr){

//for loop to convert the submitted array to subArrays

    const arrOfSubArrs = [];

    for(let i =0 ;i < arr.length; i+=2){

        let subArr = arr.slice(i,i+2);
        arrOfSubArrs.push(subArr);
    }

    // console.log(arrOfSubArrs.includes([6,9])) //return false
  
//for loop to check if the couples exists

    for(let j = 0 ; j < arrOfSubArrs.length ; j++){
        console.log(arrOfSubArrs)
        console.log(arrOfSubArrs[j])
        console.log(arrOfSubArrs[j].reverse())
        if( arrOfSubArrs.includes((arrOfSubArrs[j] && arrOfSubArrs[j].reverse()))){
            console.log("yes")
        }else {
            console.log(arrOfSubArrs[j])
        }

    }
}

// const arr = prompt("Enter your numbers splitted by comma").split(",")
const arr = [4,5,1,4,5,4,4,1,9,6]
const result = ArrayCouples(arr);

console.log(result)