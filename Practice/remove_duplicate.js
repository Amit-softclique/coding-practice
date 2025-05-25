QUestion:: 1. Flat the nested array (without using flat() method)
          2. Remove duplicate element from the flat array. (without using set() method)
          3. Count the number of occurence of each element of the array.
          4. Display the number of count of duplicate elements only.

const flatArray = [3,4,5,[7,9,3,[10,7,4,7]]]

function analyzeArray (inputArray) {
    
    function flatternArray(arr) {
        let result = [];
        
        for(let i=0; i<arr.length;i++) {
            if (Array.isArray(arr[i])) {
                result= result.concat(flatternArray(arr[i]))
            } else {
                result.push(arr[i]);
            }
        }
        return result
    }
    const resultArray = flatternArray(inputArray);
    console.log('Flat Array=>',resultArray)
    
    const countMap = {}
    for (let num = 0; num < resultArray.length; num++) {
        if(countMap[resultArray[num]]) {
            countMap[resultArray[num]]++
        } else {
            countMap[resultArray[num]] = 1
        }
    }
    
    console.log('countMap',countMap)
    
    for(let item in countMap) {
        if(countMap[item] > 1) {
            console.log(`${item} appears ${countMap[item]} times`)
        }
    }
    
    const uniqueArray = resultArray.reduce((acc, item)=> {
        if(!acc.includes(item)) {
            acc.push(item)
        }
        return acc;
    }, [])
    return uniqueArray
}

console.log('unique Array', analyzeArray(flatArray))

output :: 
Flat Array=> [
  3,  4, 5, 7, 9,
  3, 10, 7, 4, 7
]
countMap { '3': 2, '4': 2, '5': 1, '7': 3, '9': 1, '10': 1 }
3 appears 2 times
4 appears 2 times
7 appears 3 times
unique Array [ 3, 4, 5, 7, 9, 10 ]
