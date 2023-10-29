const array1 = [3, 5, 2, -4, 8, 11];

// bruite force solution
function twoSum(arr, target) {
    let sum = [];
    for (let i=0; i< arr.length; i++) {
        for (let j=i+1; j< arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                sum.push([arr[i], arr[j]])
            }
        }
    }
    return sum;
}

const result = twoSum(array1, 7)
console.log(result)