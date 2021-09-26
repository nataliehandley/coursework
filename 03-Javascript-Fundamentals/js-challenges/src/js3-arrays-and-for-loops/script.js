
//  * A function that takes an array of numbers. It returns the average from the given array.
//  * The result should rounded up to the nearest decimal place.
//  *
  * @param {number[]} numberArr [1,2,3]
  *   * @return {number} 2

 const generateAverage = (numberArr) => {
    let sum = 0;
    for(let i=0; i < numberArr.length; i++) {
     sum = sum + numberArr[i];
   //return sum;
   console.log(sum)
     
    }
//     let averageArray = Math.round(sum / numberArr.length) || 0;
//     return averageArray;
//   };
}
generateAverage();